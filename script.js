/* ==========================================================================
   Dummy content for JUJUBE BOOKS (쥬쥬베북스)
   Replace with real copy / real images whenever they're ready —
   every "cover" is just a CSS color block with a title, no image files needed.
   ========================================================================== */

const BOOKS = [
  {
    slug: "sand-city",
    folder: "BOOK",
    color: "#33503B",
    title: "모래알 도시",
    titleEn: "The Sand City",
    author: "이하은",
    date: "2025",
    category: "그림책",
    summary: "모래로 지어진 도시에서, 바람이 부는 날마다 조금씩 모습을 바꾸는 마을 이야기.",
    tags: ["그림책", "전연령", "환경"],
    synopsisTitle: "줄거리",
    synopsis:
      "모래알 도시에는 바람이 심하게 부는 날이면 지붕이 날아가고 골목이 사라진다. 마을 사람들은 그때마다 도시를 다시 짓는 대신, 바뀐 모습 그대로를 받아들이는 법을 배운다. 이 책은 변화를 두려워하지 않는 마을 사람들의 이야기를 통해 어린 독자들에게 유연함과 적응의 아름다움을 전한다.",
    body2Title: "작가의 말",
    body2:
      "어린 시절 살던 동네가 재개발로 사라진 경험에서 이 이야기를 시작했습니다. 사라짐이 곧 끝은 아니라는 것을, 모래알 도시 사람들의 담담한 태도를 통해 보여주고 싶었습니다."
  },
  {
    slug: "back-of-summer",
    folder: "BOOK",
    color: "#C1613A",
    title: "여름의 뒷모습",
    titleEn: "Back of Summer",
    author: "정도윤",
    date: "2024",
    category: "에세이",
    summary: "매년 여름이 끝날 때마다 남기는 짧은 기록들을 모은 에세이집.",
    tags: ["에세이", "계절", "일상"],
    synopsisTitle: "소개",
    synopsis:
      "이 책은 저자가 10년 동안 여름의 마지막 날마다 써온 짧은 글들을 엮은 것이다. 매미 소리가 잦아드는 순간, 첫 가을바람이 부는 순간처럼 사소하지만 선명한 감각들을 통해 계절의 끝을 기록한다.",
    body2Title: "발췌",
    body2:
      "\"여름은 언제나 끝나기 직전이 가장 여름답다. 그 며칠을 붙잡아두고 싶어서 나는 매년 이 노트를 편다.\""
  },
  {
    slug: "small-kitchen-time",
    folder: "BOOK",
    color: "#8A7148",
    title: "작은 부엌의 시간",
    titleEn: "Time in a Small Kitchen",
    author: "박서연",
    date: "2023",
    category: "요리 에세이",
    summary: "네 평 남짓한 부엌에서 보낸 계절과 레시피, 그리고 사람들에 대한 기록.",
    tags: ["에세이", "요리", "레시피"],
    synopsisTitle: "소개",
    synopsis:
      "작은 부엌에서 매일 밥을 짓던 저자가 그 시간 속에서 만난 사람들과 계절의 재료들을 담담히 기록했다. 15개의 계절 레시피와 함께, 부엌이라는 공간이 주는 위로에 대해 이야기한다.",
    body2Title: "작가의 말",
    body2:
      "요리는 결국 누군가를 기다리는 일이라는 것을, 이 부엌에서 배웠습니다."
  },
  {
    slug: "blue-mailbox",
    folder: "BOOK",
    color: "#2C4A6B",
    title: "파란 우체통",
    titleEn: "The Blue Mailbox",
    author: "한지민",
    date: "2025",
    category: "장편소설",
    summary: "이사 간 옛집 앞 우체통에서 낯선 이의 편지를 받기 시작한 한 사람의 이야기.",
    tags: ["소설", "장편", "신간"],
    synopsisTitle: "줄거리",
    synopsis:
      "다율은 새로 이사한 집 앞 낡은 파란 우체통에서 자신에게 온 것이 아닌 편지를 발견한다. 답장을 보내야 할지 고민하던 다율은, 편지 속 인물과 조금씩 얽히며 잊고 있던 자신의 과거와 마주하게 된다.",
    body2Title: "북토크 안내",
    body2:
      "출간을 기념하여 저자와 함께하는 북토크가 예정되어 있습니다. 자세한 일정은 NEWS 페이지에서 확인해 주세요."
  },
  {
    slug: "cats-walk-in-secret",
    folder: "BOOK",
    color: "#5C3A56",
    title: "고양이는 몰래 걷는다",
    titleEn: "Cats Walk in Secret",
    author: "최연주",
    date: "2022",
    category: "그림책",
    summary: "골목 고양이들이 밤마다 나누는 작은 회의를 훔쳐본 그림책.",
    tags: ["그림책", "동물", "베스트셀러"],
    synopsisTitle: "줄거리",
    synopsis:
      "밤이 되면 골목 고양이들은 아무도 모르게 모여 하루 동안 있었던 일을 나눈다. 누가 어디서 맛있는 걸 얻어먹었는지, 어떤 담장이 위험한지. 이 책은 우리가 미처 보지 못한 골목의 밤을 고양이의 시선으로 그린다.",
    body2Title: "작가의 말",
    body2:
      "매일 밤 창밖으로 보이던 골목 고양이 세 마리에서 시작된 이야기입니다."
  },
  {
    slug: "map-of-the-night",
    folder: "BOOK",
    color: "#1F2A2E",
    title: "밤의 지도",
    titleEn: "Map of the Night",
    author: "오세훈",
    date: "2021",
    category: "시집",
    summary: "잠들지 못하는 밤들을 기록한 43편의 짧은 시.",
    tags: ["시집", "밤", "스테디셀러"],
    synopsisTitle: "소개",
    synopsis:
      "이 시집은 불면의 밤마다 쓴 짧은 기록들을 모았다. 시인은 잠들지 못하는 시간을 도망쳐야 할 시간이 아니라, 낮보다 정직한 자신과 마주하는 시간으로 그린다.",
    body2Title: "발췌",
    body2: "\"밤에는 지도가 없어서, 나는 매번 새로 길을 잃는다.\""
  },
  {
    slug: "noon-table",
    folder: "BOOK",
    color: "#B08A3E",
    title: "정오의 식탁",
    titleEn: "Noon Table",
    author: "김하람",
    date: "2020",
    category: "산문집",
    summary: "정오마다 혼자 차려 먹은 밥상에 대한 기록.",
    tags: ["산문", "일상", "혼밥"],
    synopsisTitle: "소개",
    synopsis:
      "혼자 밥을 먹는 일이 유독 쓸쓸하게 느껴지던 시절, 저자는 정오의 식탁을 조금 더 다정하게 차리기 시작했다. 이 책은 그 다정함을 기록한 36편의 짧은 산문이다.",
    body2Title: "작가의 말",
    body2: "혼자 먹는 밥도, 잘 차리면 잔치가 됩니다."
  },
  {
    slug: "bottle-letters",
    folder: "BOOK",
    color: "#7A9E7E",
    title: "유리병 편지",
    titleEn: "Letters in a Bottle",
    author: "윤태경",
    date: "2019",
    category: "청소년 소설",
    summary: "바다로 던진 유리병 편지가 10년 뒤 되돌아오며 벌어지는 이야기.",
    tags: ["소설", "청소년", "성장"],
    synopsisTitle: "줄거리",
    synopsis:
      "열네 살의 여름, 바다에 유리병 편지를 던졌던 유나는 10년 뒤 낯선 이로부터 그 편지에 대한 답장을 받는다. 각자 다른 시간을 살아온 두 사람이 편지를 통해 서로의 성장을 마주하는 이야기.",
    body2Title: "작가의 말",
    body2: "우리는 모두 누군가에게 도착하지 못한 편지 한 통씩을 갖고 있습니다."
  },
  {
    slug: "seasons-of-a-tree",
    folder: "BOOK",
    color: "#3E6B4F",
    title: "나무의 계절",
    titleEn: "Seasons of a Tree",
    author: "최연주",
    date: "2018",
    category: "그림책",
    summary: "한 그루의 나무가 사계절을 지나며 만나는 존재들의 이야기.",
    tags: ["그림책", "자연", "스테디셀러"],
    synopsisTitle: "줄거리",
    synopsis:
      "마을 어귀의 오래된 나무는 봄에는 새들을, 여름에는 아이들을, 가을에는 다람쥐를, 겨울에는 눈을 맞이한다. 이 책은 한 자리에 머무는 나무가 사계절 동안 만나는 작은 존재들의 이야기를 그린다.",
    body2Title: "작가의 말",
    body2: "가장 느리게 사는 존재의 눈으로 계절을 그리고 싶었습니다."
  }
];

const GOODS = [
  {
    slug: "canvas-tote",
    folder: "AND MORE",
    color: "#33503B",
    title: "쥬쥬베북스 에코백",
    titleEn: "Jujube Books Tote Bag",
    category: "에코백",
    price: "18,000원",
    summary: "두꺼운 면 캔버스에 쥬쥬베북스 로고를 스크린 인쇄한 기본 에코백.",
    tags: ["에코백", "굿즈", "베스트"],
    synopsisTitle: "소개",
    synopsis:
      "16수 두꺼운 면 캔버스 원단을 사용해 오래 사용할 수 있도록 제작한 에코백입니다. 안쪽 포켓이 있어 소지품을 나누어 보관하기 좋습니다.",
    body2Title: "제품 정보",
    body2: "사이즈 38 x 42cm · 소재 100% Cotton Canvas · 세탁 시 찬물 손세탁 권장"
  },
  {
    slug: "character-badge-set",
    folder: "AND MORE",
    color: "#C1613A",
    title: "캐릭터 뱃지 세트",
    titleEn: "Character Badge Set",
    category: "뱃지",
    price: "9,000원",
    summary: "「모 이야기」 속 캐릭터들을 담은 3종 에나멜 뱃지 세트.",
    tags: ["뱃지", "굿즈", "한정판"],
    synopsisTitle: "소개",
    synopsis:
      "쥬쥬베북스의 그림책 속 캐릭터들을 에나멜 뱃지로 만들었습니다. 가방, 옷깃 어디에나 어울리는 사이즈로 제작했습니다.",
    body2Title: "제품 정보",
    body2: "사이즈 각 2.5cm · 소재 에나멜, 금속 합금(니켈 도금) · 구성 3종 세트"
  },
  {
    slug: "paperweight",
    folder: "AND MORE",
    color: "#8A7148",
    title: "문진",
    titleEn: "Paperweight",
    category: "문구",
    price: "24,000원",
    summary: "책상 위에 두고 쓰는 유리 문진, 안에는 작은 종이배 한 척.",
    tags: ["문구", "굿즈", "책상소품"],
    synopsisTitle: "소개",
    synopsis:
      "책을 읽다 잠시 펼쳐둔 페이지를 눌러줄 수 있는 유리 문진입니다. 안에 담긴 작은 종이배는 「파란 우체통」의 한 장면에서 영감을 받았습니다.",
    body2Title: "제품 정보",
    body2: "사이즈 지름 7cm · 소재 유리 · 주의 파손 위험, 완충 포장 배송"
  },
  {
    slug: "postcard-set",
    folder: "AND MORE",
    color: "#2C4A6B",
    title: "엽서 세트",
    titleEn: "Postcard Set",
    category: "엽서",
    price: "7,000원",
    summary: "쥬쥬베북스 표지 일러스트를 모은 8매 구성 엽서 세트.",
    tags: ["엽서", "굿즈", "선물"],
    synopsisTitle: "소개",
    synopsis:
      "지난 5년간 출간된 책들의 표지 일러스트 중 여덟 장을 골라 엽서로 제작했습니다. 무광 코팅으로 필기감이 좋습니다.",
    body2Title: "제품 정보",
    body2: "사이즈 10 x 15cm · 구성 8매 · 종이 랑데부 210g"
  },
  {
    slug: "masking-tape",
    folder: "AND MORE",
    color: "#5C3A56",
    title: "마스킹 테이프",
    titleEn: "Masking Tape",
    category: "문구",
    price: "5,000원",
    summary: "「나무의 계절」 패턴을 담은 마스킹 테이프.",
    tags: ["문구", "굿즈", "다이어리"],
    synopsisTitle: "소개",
    synopsis:
      "그림책 「나무의 계절」 속 사계절 패턴을 그대로 담은 마스킹 테이프입니다. 다이어리 꾸미기, 선물 포장 어디에나 잘 어울립니다.",
    body2Title: "제품 정보",
    body2: "사이즈 폭 1.5cm x 길이 5m · 소재 화지 테이프"
  },
  {
    slug: "bookmark-set",
    folder: "AND MORE",
    color: "#3E6B4F",
    title: "책갈피 세트",
    titleEn: "Bookmark Set",
    category: "문구",
    price: "6,000원",
    summary: "얇은 황동으로 제작한 클립형 책갈피 3종 세트.",
    tags: ["문구", "굿즈", "책갈피"],
    synopsisTitle: "소개",
    synopsis:
      "가볍고 얇은 황동 소재로 제작해 책장을 상하지 않게 고정할 수 있는 클립형 책갈피입니다. 쥬쥬베북스의 로고 문양을 새겼습니다.",
    body2Title: "제품 정보",
    body2: "사이즈 3.2cm · 소재 황동 · 구성 3종 세트"
  }
];

const NEWS = [
  {
    slug: "seoul-book-fair-2026",
    folder: "NEWS",
    color: "#7A4A2C",
    date: "2026.06.10",
    title: "2026 서울국제도서전 참가 안내",
    titleEn: "Jujube Books at Seoul International Book Fair 2026",
    summary: "쥬쥬베북스가 올해 서울국제도서전에 참가합니다. 부스 번호와 이벤트 일정을 안내드립니다.",
    synopsisTitle: "내용",
    synopsis:
      "쥬쥬베북스는 2026년 6월 서울국제도서전(코엑스)에 참가합니다. 부스에서는 신간 「파란 우체통」을 포함한 전 도서를 만나보실 수 있으며, 현장 구매 시 한정 굿즈를 증정합니다.",
    body2Title: "현장 이벤트",
    body2: "행사 기간 동안 매일 오후 2시, 작가와의 짧은 만남 시간을 준비했습니다. 자세한 시간표는 현장 안내 데스크에서 확인하실 수 있습니다."
  },
  {
    slug: "mo-story-2nd-print",
    folder: "NEWS",
    color: "#4E7057",
    date: "2026.03.02",
    title: "「모 이야기」 2쇄 출간 소식",
    titleEn: "Mo Story — Second Print Run",
    summary: "많은 사랑을 받은 「모 이야기」가 2쇄를 찍었습니다.",
    synopsisTitle: "내용",
    synopsis:
      "2024년 출간된 「모 이야기」가 독자분들의 꾸준한 사랑에 힘입어 2쇄를 인쇄했습니다. 초판과 동일한 판형, 동일한 종이로 제작되었으며, 전국 서점 및 온라인몰에서 순차 입고됩니다.",
    body2Title: "감사의 말",
    body2: "책을 아껴주신 독자분들께 깊이 감사드립니다. 앞으로도 좋은 이야기로 찾아뵙겠습니다."
  },
  {
    slug: "blue-mailbox-book-talk",
    folder: "NEWS",
    color: "#2C4A6B",
    date: "2026.01.24",
    title: "신간 「파란 우체통」 북토크 안내",
    titleEn: "Book Talk for The Blue Mailbox",
    summary: "한지민 작가와 함께하는 「파란 우체통」 출간 기념 북토크가 열립니다.",
    synopsisTitle: "내용",
    synopsis:
      "2월 15일 오후 4시, 연희동의 한 서점에서 「파란 우체통」 출간을 기념하는 북토크가 진행됩니다. 저자와의 대화, 사인회 순서로 진행되며 참가 신청은 쥬쥬베북스 인스타그램을 통해 받습니다.",
    body2Title: "참가 안내",
    body2: "선착순 30명으로 좌석이 제한되어 있으니 서둘러 신청해 주세요."
  },
  {
    slug: "summer-holiday-notice",
    folder: "NEWS",
    color: "#8A7148",
    date: "2025.08.01",
    title: "쥬쥬베북스 여름 휴점 안내",
    titleEn: "Summer Holiday Notice",
    summary: "8월 11일부터 15일까지 쥬쥬베북스 사무실이 휴점합니다.",
    synopsisTitle: "내용",
    synopsis:
      "무더운 여름, 쥬쥬베북스도 잠시 숨을 고르려 합니다. 8월 11일(월)부터 15일(금)까지 사무실 운영과 문의 응대가 일시 중단되며, 온라인 주문은 16일부터 순차적으로 처리됩니다.",
    body2Title: "안내",
    body2: "휴점 기간 중 문의는 이메일로 남겨주시면 업무 재개 후 순서대로 답변드리겠습니다."
  },
  {
    slug: "indie-bookstore-list-update",
    folder: "NEWS",
    color: "#5C3A56",
    date: "2025.05.19",
    title: "독립서점 입고 리스트 업데이트",
    titleEn: "Updated Independent Bookstore List",
    summary: "쥬쥬베북스 도서를 만나볼 수 있는 전국 독립서점 리스트를 갱신했습니다.",
    synopsisTitle: "내용",
    synopsis:
      "전국 24곳의 독립서점에서 쥬쥬베북스의 책을 만나보실 수 있습니다. 이번 업데이트에서는 대구, 전주, 강릉 지역 서점 다섯 곳이 새롭게 추가되었습니다.",
    body2Title: "리스트 확인",
    body2: "자세한 서점 명단과 위치는 CONTACT 페이지 또는 인스타그램 하이라이트에서 확인하실 수 있습니다."
  }
];

/* ==========================================================================
   Shared behaviour: language toggle, grid rendering, detail rendering
   ========================================================================== */

/* ---- ENG/KOR toggle, backed by the Google Translate website widget ----
   Requires the page to be served over http(s) — the googtrans cookie
   approach does not work when opened directly as a file:// URL. */
function setSiteLanguage(lang) {
  const isEn = lang === "en";
  if (isEn) {
    document.cookie = "googtrans=/ko/en; path=/";
    document.cookie = "googtrans=/ko/en; path=/; domain=" + location.hostname;
  } else {
    document.cookie = "googtrans=/ko/ko; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + location.hostname;
  }
  localStorage.setItem("jb-lang", lang);
  location.reload();
}

function initLangToggle() {
  const saved = localStorage.getItem("jb-lang") || "ko";
  document.querySelectorAll(".lang-toggle").forEach((toggle) => {
    const enBtn = toggle.querySelector('[data-lang="en"]');
    const koBtn = toggle.querySelector('[data-lang="ko"]');
    if (enBtn) enBtn.addEventListener("click", () => setSiteLanguage("en"));
    if (koBtn) koBtn.addEventListener("click", () => setSiteLanguage("ko"));
    if (enBtn && koBtn) {
      enBtn.classList.toggle("is-active", saved === "en");
      koBtn.classList.toggle("is-active", saved === "ko");
    }
  });
}

/* ---- real-image support -----------------------------------------------
   Each item's `folder` field points at a subfolder of 이미지/ (already set
   up on disk: 이미지/BOOK, 이미지/AND MORE, 이미지/NEWS, ...). Drop a file
   named after the item's slug (e.g. 이미지/BOOK/sand-city.jpg) and it will
   be picked up automatically — no code changes needed. Until a file exists,
   the colored placeholder block below shows instead. */
const IMG_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

function imageCandidates(folder, filename) {
  return IMG_EXTENSIONS.map((ext) => "이미지/" + folder + "/" + filename + "." + ext);
}

function handleImgFallback(img) {
  const candidates = JSON.parse(img.dataset.candidates);
  const next = parseInt(img.dataset.i, 10) + 1;
  if (next < candidates.length) {
    img.dataset.i = String(next);
    img.src = candidates[next];
  } else {
    img.style.display = "none";
  }
}

function realImageTag(folder, filename) {
  const candidates = imageCandidates(folder, filename);
  return (
    '<img src="' + candidates[0] + '" alt="" loading="lazy" ' +
    "data-candidates='" + JSON.stringify(candidates) + "' data-i=\"0\" " +
    'onerror="handleImgFallback(this)">'
  );
}

/* ---- cover placeholder builder ---- */
function coverBlockHTML(item, opts) {
  opts = opts || {};
  const label = opts.label || item.category || "";
  const image = item.folder ? realImageTag(item.folder, item.slug) : "";
  return (
    '<div class="cover-block" style="--c:' + item.color + '">' +
    image +
    (label ? '<div class="ck-label">' + label + "</div>" : "") +
    '<div class="ck-title">' + item.title + "</div>" +
    (item.author ? '<div class="ck-author">' + item.author + "</div>" : "") +
    "</div>"
  );
}

/* ---- home page collage — shows every file currently sitting in 이미지/BOOK,
   scattered at random and draggable (readymag.com/designs/greennation style).
   Add or remove files there and update this list. ---- */
const HOME_BOOK_IMAGES = [
  "76th rainbow.png",
  "Always friends.png",
  "a small light.png",
  "ground_cover.png",
  "inga.png",
  "is it there warm_re.png",
  "lesson reject.png",
  "the right ways to sit wroung.png",
  "to say I love you.png",
  "tree_re.png"
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function renderHomeBookImages(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // uniform size for every item, matched to "to say I love you.png" (790 x 1242px)
  const ITEM_WIDTH = 220;
  const ITEM_HEIGHT = 346;
  const ASPECT = ITEM_HEIGHT / ITEM_WIDTH;

  // on mobile, start as a neat 2-column list instead of a random scatter —
  // dragging still works exactly the same afterwards
  const mobile = window.matchMedia("(max-width: 640px)").matches;
  const gap = 16;
  const colWidth = mobile ? (container.clientWidth - gap * 3) / 2 : 0;
  const colHeight = mobile ? colWidth * ASPECT : 0;

  const stage = container.closest(".hero-stage");
  if (mobile) {
    const rows = Math.ceil(HOME_BOOK_IMAGES.length / 2);
    const neededHeight = rows * (colHeight + gap) + gap;
    container.style.height = neededHeight + "px";
    if (stage) stage.style.minHeight = neededHeight + "px";
  } else {
    container.style.height = "";
    if (stage) stage.style.minHeight = "";
  }

  // desktop: scatter within the container's actual measured size, in pixels,
  // so items always land fully inside it — no overflow, no page scroll
  const maxLeft = Math.max(0, container.clientWidth - ITEM_WIDTH);
  const maxTop = Math.max(0, container.clientHeight - ITEM_HEIGHT);

  container.innerHTML = HOME_BOOK_IMAGES.map((filename, i) => {
    const src = "이미지/BOOK/" + encodeURIComponent(filename);
    let style;
    if (mobile) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const left = gap + col * (colWidth + gap);
      const top = gap + row * (colHeight + gap);
      style =
        "left:" + left + "px; top:" + top + "px; " +
        "width:" + Math.round(colWidth) + "px; height:" + Math.round(colHeight) + "px; " +
        "transform: rotate(0deg); z-index:" + (i + 1) + ";";
    } else {
      const left = randomBetween(0, maxLeft);
      const top = randomBetween(0, maxTop);
      const rotate = randomBetween(-9, 9).toFixed(1);
      style =
        "left:" + left + "px; top:" + top + "px; " +
        "width:" + ITEM_WIDTH + "px; height:" + ITEM_HEIGHT + "px; " +
        "transform: rotate(" + rotate + "deg); z-index:" + (i + 1) + ";";
    }
    return (
      '<div class="drag-item" style="' + style + '">' +
      '<img src="' + src + '" alt="" draggable="false"></div>'
    );
  }).join("");

  container.querySelectorAll(".drag-item").forEach((el) => makeDraggable(el, container));
}

/* click-and-drag to reposition an absolutely-positioned element within its container */
function makeDraggable(el, container) {
  let startX = 0;
  let startY = 0;
  let originLeft = 0;
  let originTop = 0;
  let dragging = false;

  el.addEventListener("pointerdown", (e) => {
    dragging = true;
    el.classList.add("dragging");
    el.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startY = e.clientY;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    originLeft = elRect.left - containerRect.left;
    originTop = elRect.top - containerRect.top;
    el.style.left = originLeft + "px";
    el.style.top = originTop + "px";
  });

  el.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    el.style.left = originLeft + (e.clientX - startX) + "px";
    el.style.top = originTop + (e.clientY - startY) + "px";
  });

  const stopDragging = (e) => {
    if (!dragging) return;
    dragging = false;
    el.classList.remove("dragging");
  };
  el.addEventListener("pointerup", stopDragging);
  el.addEventListener("pointercancel", stopDragging);
}

/* ---- BOOK / AND MORE grid list pages ---- */
function renderCardGrid(containerId, items, hrefBuilder) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map((item, i) => {
      const price = item.price ? '<div class="tag">' + item.price + "</div>" : "";
      return (
        '<a class="card" href="' + hrefBuilder(item) + '">' +
        '<div class="card-index">' + String(i + 1).padStart(2, "0") + ".</div>" +
        '<div class="card-cover">' + coverBlockHTML(item) + "</div>" +
        "<h3>" + item.title + "</h3>" +
        '<div class="card-desc">' + item.summary + "</div>" +
        '<div class="tag-row">' +
        item.tags.map((t) => '<div class="tag">#' + t + "</div>").join("") +
        price +
        "</div>" +
        "</a>"
      );
    })
    .join("");
}

/* ---- NEWS list page (sidebar + rows) ---- */
function renderNewsList(containerId, items, hrefBuilder) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map(
      (item) =>
        '<a class="news-row" href="' + hrefBuilder(item) + '">' +
        '<div class="news-cover">' + coverBlockHTML(item, { label: item.date }) + "</div>" +
        '<div class="news-text">' +
        '<div class="news-date">' + item.date + "</div>" +
        "<h3>" + item.title + "</h3>" +
        '<div class="news-desc">' + item.summary + "</div>" +
        "</div>" +
        "</a>"
    )
    .join("");
}

/* ---- query param helper ---- */
function getSlugFromQuery() {
  return new URLSearchParams(location.search).get("slug");
}

function findBySlug(list, slug) {
  return list.find((i) => i.slug === slug) || list[0];
}

/* ---- generic detail page renderer ----
   fields: { kicker, title, meta, synopsisTitle, synopsis, body2Title, body2, tags } */
function renderDetail(item, fields) {
  const set = (id, value, html) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) el.innerHTML = value;
    else el.textContent = value;
  };

  set("detail-cover", coverBlockHTML(item, { label: fields.kicker }), true);
  set("detail-kicker", fields.kicker || "");
  set("detail-title", item.title);
  set("detail-meta", fields.meta || "");
  set("synopsis-title", item.synopsisTitle || "줄거리");
  set("synopsis-text", item.synopsis || "");
  set("body2-title", item.body2Title || "");
  set("body2-text", item.body2 || "");

  const imageEl = document.getElementById("detail-image-block");
  if (imageEl) imageEl.innerHTML = coverBlockHTML(item, { label: item.titleEn || "" });

  const tagsEl = document.getElementById("detail-tags");
  if (tagsEl && item.tags) {
    tagsEl.innerHTML =
      '<div class="tag-row">' +
      item.tags.map((t) => '<div class="tag">#' + t + "</div>").join("") +
      "</div>";
  }

  document.title = item.title + " — JUJUBE BOOKS";
}

document.addEventListener("DOMContentLoaded", initLangToggle);
