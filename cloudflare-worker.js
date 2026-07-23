/* ==========================================================================
   JUJUBE BOOKS — link-preview thumbnail worker

   GitHub Pages serves the same book-detail.html / goods-detail.html file for
   every book or goods item; the actual content is filled in by JavaScript,
   which link-preview crawlers (KakaoTalk, Facebook, Slack, ...) don't run.
   So every shared link showed the same generic site thumbnail.

   This Cloudflare Worker sits in front of the domain. For book/goods detail
   pages it rewrites the <meta og:image>/<meta og:title> (and twitter: ones)
   tags in the HTML response to point at that specific item's own photo and
   title, before the page reaches the crawler (or the visitor's browser —
   either way, the real page still loads and works exactly as before, this
   only changes what's baked into the initial HTML's <head>).

   Deploy: paste this whole file into a new Cloudflare Worker, and set the
   Worker to run on the jujubebooks.com route (see setup notes given
   alongside this file). Nothing else in the site needs to change.
   ========================================================================== */

// same convention used by imageCandidates() in script.js: try common
// extensions in both upper/lower case, since some uploads use ".JPG" etc.
const IMG_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

// mirrors BOOKS_FALLBACK in script.js — the 15 original hand-built books.
// Only slug/folder/image/title/titleEn are needed here.
const BOOKS_FALLBACK = [
  { slug: "tree", folder: "BOOK/change the image", image: "tree_re_01", title: "나는 정말 나무가 되었다", titleEn: "I Have Become A Tree" },
  { slug: "is-it-there-warm", folder: "BOOK/change the image", image: "is it there warm_re_01", title: "그곳은 따듯한가요", titleEn: "Is It Warm There" },
  { slug: "inga", folder: "BOOK/change the image", image: "inga_01", title: "잉아의 순우리말 그림 사전", titleEn: "Inga's Pure Korean Picture Dictionary" },
  { slug: "the-right-ways-to-sit-wrong", folder: "BOOK/change the image", image: "the right ways to sit wroung_01", title: "앉는 걸 멈추지 마!", titleEn: "The Right Way to Sit Wrong!" },
  { slug: "to-say-i-love-you", folder: "BOOK/change the image", image: "to say I love you_01", title: "사랑을 한다는 건", titleEn: "To Say I Love You" },
  { slug: "ground-cover", folder: "BOOK/change the image", image: "ground_cover_01", title: "빈자리에 머무르기", titleEn: "Dwelling in the Empty" },
  { slug: "a-small-light", folder: "BOOK/change the image", image: "a small light_01", title: "작은 빛", titleEn: "A Small Light" },
  { slug: "lesson-reject", folder: "BOOK/change the image", image: "lesson reject_01", title: "제1강: 거절하는 방법", titleEn: "Lesson 1: How to Decline" },
  { slug: "always-friends", folder: "BOOK/change the image", image: "Always friends_01", title: "가족으로 만나 친구가 되었습니다", titleEn: "We Met as Family and Became Friends" },
  { slug: "castle", folder: "BOOK/change the image", image: "castle_01", title: "나의 아름다운 성에 초대된 자그마한 파괴자", titleEn: "Farewell, My Fair Castle" },
  { slug: "76-rainbow", folder: "BOOK/change the image", image: "76th rainbow_01", title: "76th Rainbow", titleEn: "[Kor.ver] I slutet av regnbågen" },
  { slug: "woof-woof", folder: "BOOK/change the image", image: "멍멍", title: "멍멍!", titleEn: "[Kor.ver] Ao Ao" },
  { slug: "meow", folder: "BOOK/change the image", image: "야옹", title: "야옹!", titleEn: "[Kor.ver] Meow" },
  { slug: "steal-the-sperm-whale", folder: "BOOK/change the image", image: "향유고래_정면", title: "향유고래를 훔쳐라", titleEn: "[Kor.ver] Steal a Cachalot" },
  { slug: "grandfathers-rainbow", folder: "BOOK/change the image", image: "할아버지가 사랑한 무지개", title: "할아버지가 사랑한 무지개", titleEn: "[Kor.ver] Grandad's Pride" },
];

// mirrors GOODS_FALLBACK in script.js — the 4 original hand-built goods.
const GOODS_FALLBACK = [
  { slug: "reading-sign-clip", folder: "AND MORE/Reading Now", image: "main", title: '"독서 중" 입간판 집게', titleEn: '"Reading Now" Mini Sign Clip' },
  { slug: "jujube-lenticular-bookmark", folder: "AND MORE/book mark_let start reading", image: "main", title: "'오늘은 여기까지만 읽자' 대추 렌티큘러 책갈피", titleEn: "'Let's Stop Here for Today' Jujube Lenticular Bookmark" },
  { slug: "photo-slot-bookmark", folder: "AND MORE/book mark_photo card", image: "main", title: "사진을 넣을 수 있는 책갈피 · 쥬쥬베북스", titleEn: "Bookmark with Photo Slot · jujube books" },
  { slug: "jujube-ceramic-paperweight", folder: "AND MORE/ceramic", image: "main", title: "대추 도자기 문진", titleEn: "Jujube Ceramic Paperweight" },
];

const BOOK_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1rrPF7t5qdz14diCo0xz-3vo2vwU3azA_YQIkgOVgTp8/export?format=csv&gid=0";
const GOODS_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1IfQdSNmFwHQB_0YbVeEMw7_t5OZJBKZ6RP2B6F8pJdM/export?format=csv&gid=0";

// tiny CSV parser (quote-aware) — same behavior as parseCSV() in script.js,
// just re-implemented here since the Worker can't import that file
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((v) => v !== ""));
}

function csvRowsToObjects(rows) {
  const header = rows[0].map((h) => h.trim());
  return rows.slice(1).map((r) => {
    const obj = {};
    header.forEach((key, i) => {
      obj[key] = r[i] || "";
    });
    return obj;
  });
}

async function findInSheet(csvUrl, slug) {
  try {
    const res = await fetch(csvUrl, { cf: { cacheTtl: 300, cacheEverything: true } });
    const text = await res.text();
    const objs = csvRowsToObjects(parseCSV(text));
    const row = objs.find((o) => (o.slug || "").trim() === slug);
    if (!row) return null;
    return {
      slug,
      folder: row.folder,
      image: (row.image || "").trim() || "main",
      title: (row.title || "").trim(),
      titleEn: (row.titleEn || "").trim(),
    };
  } catch (e) {
    return null;
  }
}

async function findItem(slug, kind) {
  const sheetUrl = kind === "book" ? BOOK_SHEET_CSV_URL : GOODS_SHEET_CSV_URL;
  const fallbackList = kind === "book" ? BOOKS_FALLBACK : GOODS_FALLBACK;
  // sheet rows override a matching slug, same as mergeBySlug() at runtime —
  // so check the sheet first
  const fromSheet = await findInSheet(sheetUrl, slug);
  if (fromSheet) return fromSheet;
  return fallbackList.find((b) => b.slug === slug) || null;
}

function stripImageExtension(filename) {
  return filename.replace(/\.(jpg|jpeg|png|webp)$/i, "");
}

// mirrors imageCandidates() in script.js: try both NFC and NFD Unicode
// forms (macOS-saved filenames can differ from what's typed) times every
// extension in both cases
function imageCandidates(origin, folder, filename) {
  const path = folder + "/" + stripImageExtension(filename);
  const forms = [path.normalize("NFC"), path.normalize("NFD")];
  const candidates = [];
  forms.forEach((form) => {
    const encodedPath = form.split("/").map(encodeURIComponent).join("/");
    IMG_EXTENSIONS.forEach((ext) => {
      candidates.push(origin + "/이미지/" + encodedPath + "." + ext);
      candidates.push(origin + "/이미지/" + encodedPath + "." + ext.toUpperCase());
    });
  });
  return candidates;
}

async function resolveImageUrl(origin, folder, filename) {
  const candidates = imageCandidates(origin, folder, filename);
  for (const url of candidates) {
    try {
      const res = await fetch(url, { method: "HEAD", cf: { cacheTtl: 3600, cacheEverything: true } });
      if (res.ok) return url;
    } catch (e) {
      // try next candidate
    }
  }
  return null;
}

class MetaRewriter {
  constructor(replacements) {
    this.replacements = replacements; // { propertyOrName: newContent }
  }
  element(el) {
    const key = el.getAttribute("property") || el.getAttribute("name");
    if (key && Object.prototype.hasOwnProperty.call(this.replacements, key)) {
      el.setAttribute("content", this.replacements[key]);
    }
  }
}

async function handleDetailPage(request, kind) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");
  const originResponse = await fetch(request);

  if (!slug) return originResponse;

  const item = await findItem(slug, kind);
  if (!item || !item.folder) return originResponse;

  const imageUrl = await resolveImageUrl(url.origin, item.folder, item.image || "main");
  if (!imageUrl) return originResponse;

  const title = item.title || item.titleEn || "";
  const pageLabel = kind === "book" ? "BOOK" : "AND MORE";
  const fullTitle = title ? title + " — JUJUBE BOOKS" : pageLabel + " — JUJUBE BOOKS";

  const replacements = {
    "og:image": imageUrl,
    "twitter:image": imageUrl,
  };
  if (title) {
    replacements["og:title"] = fullTitle;
    replacements["twitter:title"] = fullTitle;
  }

  const rewriter = new HTMLRewriter().on('meta[property="og:image"], meta[property="og:title"], meta[name="twitter:image"], meta[name="twitter:title"]', new MetaRewriter(replacements));

  return rewriter.transform(originResponse);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/book-detail.html") {
      return handleDetailPage(request, "book");
    }
    if (url.pathname === "/goods-detail.html") {
      return handleDetailPage(request, "goods");
    }

    return fetch(request);
  },
};
