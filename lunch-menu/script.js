// ─────────────────────────────────────────
// 1. 메뉴 목록
//    새 메뉴를 넣고 싶으면 이 목록에 한 줄 추가하면 돼요.
//    category(종류), name(이름), emoji(그림), description(설명),
//    moods(어울리는 기분: 국물 / 매운 / 가벼운 / 든든한 / 해장)
// ─────────────────────────────────────────
const allMenus = [
  // 한식
  { category: '한식', name: '김치찌개',   emoji: '🍲', moods: ['국물', '매운', '든든한'], description: '얼큰하고 든든한 국민 메뉴' },
  { category: '한식', name: '제육볶음',   emoji: '🥘', moods: ['매운', '든든한'],         description: '매콤달콤, 밥 한 공기 뚝딱' },
  { category: '한식', name: '비빔밥',     emoji: '🍚', moods: ['가벼운'],                 description: '채소 듬뿍, 가볍게 한 그릇' },
  { category: '한식', name: '된장찌개',   emoji: '🥣', moods: ['국물'],                   description: '구수하고 속 편한 맛' },
  { category: '한식', name: '삼겹살',     emoji: '🥓', moods: ['든든한'],                 description: '오늘은 좀 든든하게' },
  { category: '한식', name: '순두부찌개', emoji: '🥘', moods: ['국물', '매운'],           description: '보들보들 순두부에 얼큰한 국물' },
  { category: '한식', name: '부대찌개',   emoji: '🍲', moods: ['국물', '매운', '든든한'], description: '햄과 라면사리까지 푸짐하게' },
  { category: '한식', name: '국밥',       emoji: '🍚', moods: ['국물', '든든한', '해장'], description: '뜨끈한 국물에 밥 말아서' },
  { category: '한식', name: '냉면',       emoji: '🍜', moods: ['가벼운', '해장'],         description: '더운 날엔 시원하게' },
  { category: '한식', name: '불고기',     emoji: '🥩', moods: ['든든한'],                 description: '달콤한 양념 고기' },
  { category: '한식', name: '칼국수',     emoji: '🍜', moods: ['국물'],                   description: '쫄깃한 면에 시원한 국물' },
  { category: '한식', name: '닭갈비',     emoji: '🍗', moods: ['매운', '든든한'],         description: '매콤하게 볶아 먹는 닭' },
  { category: '한식', name: '갈비탕',     emoji: '🍖', moods: ['국물', '든든한'],         description: '푹 고아 낸 든든한 한 그릇' },
  { category: '한식', name: '쌈밥 정식',  emoji: '🥬', moods: ['가벼운'],                 description: '채소 쌈으로 건강하게' },
  { category: '한식', name: '생선구이',   emoji: '🐟', moods: ['가벼운'],                 description: '노릇하게 구운 생선 정식' },
  { category: '한식', name: '순대국',     emoji: '🍲', moods: ['국물', '든든한', '해장'], description: '들깨 듬뿍, 뜨끈한 순대국밥' },
  { category: '한식', name: '뼈해장국',   emoji: '🦴', moods: ['국물', '든든한', '해장'], description: '살 발라 먹는 재미가 있는 해장국' },
  { category: '한식', name: '선지해장국', emoji: '🍲', moods: ['국물', '해장'],           description: '선지와 우거지가 듬뿍' },
  { category: '한식', name: '내장탕',     emoji: '🍲', moods: ['국물', '매운', '해장'],   description: '쫄깃한 내장이 가득한 얼큰한 탕' },
  { category: '한식', name: '육개장',     emoji: '🌶️', moods: ['국물', '매운', '해장'],   description: '고사리 넣은 얼큰한 소고기 국' },
  { category: '한식', name: '콩국수',     emoji: '🥛', moods: ['가벼운'],                 description: '고소하고 시원한 여름 국수' },
  { category: '한식', name: '설렁탕',     emoji: '🍚', moods: ['국물', '든든한'],         description: '뽀얀 국물에 소면 한 줌' },
  { category: '한식', name: '삼계탕',     emoji: '🐔', moods: ['국물', '든든한'],         description: '기운 없는 날 몸보신' },
  { category: '한식', name: '김치찜',     emoji: '🥘', moods: ['매운', '든든한'],         description: '푹 익은 김치에 두툼한 고기' },
  { category: '한식', name: '청국장',     emoji: '🥣', moods: ['국물'],                   description: '구수한 맛이 일품' },
  { category: '한식', name: '추어탕',     emoji: '🍲', moods: ['국물', '든든한'],         description: '걸쭉하고 든든한 보양식' },
  { category: '한식', name: '오징어볶음', emoji: '🦑', moods: ['매운'],                   description: '매콤하게 볶은 오징어 덮밥' },
  { category: '한식', name: '수제비',     emoji: '🥣', moods: ['국물', '가벼운'],         description: '비 오는 날 생각나는 맛' },
  { category: '한식', name: '보쌈 정식',  emoji: '🥬', moods: ['든든한'],                 description: '부드러운 수육에 김치 한 쌈' },

  // 중식
  { category: '중식', name: '짜장면',     emoji: '🍜', moods: ['든든한'],                 description: '실패 없는 짜장의 맛' },
  { category: '중식', name: '짬뽕',       emoji: '🌶️', moods: ['국물', '매운', '해장'],   description: '얼큰한 국물이 당길 때' },
  { category: '중식', name: '탕수육',     emoji: '🍖', moods: ['든든한'],                 description: '여럿이 나눠 먹기 좋아요' },
  { category: '중식', name: '볶음밥',     emoji: '🍳', moods: ['든든한'],                 description: '고슬고슬 불맛 나는 밥' },
  { category: '중식', name: '마파두부',   emoji: '🌶️', moods: ['매운'],                   description: '얼얼하게 매운 두부 덮밥' },
  { category: '중식', name: '마라탕',     emoji: '🥢', moods: ['국물', '매운'],           description: '얼얼한 국물에 골라 담는 재료' },
  { category: '중식', name: '깐풍기',     emoji: '🍗', moods: ['매운', '든든한'],         description: '바삭하고 새콤달콤한 닭튀김' },
  { category: '중식', name: '울면',       emoji: '🍜', moods: ['국물'],                   description: '걸쭉하고 부드러운 국물 면' },
  { category: '중식', name: '잡채밥',     emoji: '🍚', moods: ['든든한'],                 description: '불맛 나는 잡채를 밥 위에' },
  { category: '중식', name: '짬뽕밥',     emoji: '🌶️', moods: ['국물', '매운', '해장'],   description: '얼큰한 짬뽕 국물에 밥 한 공기' },
  { category: '중식', name: '유산슬밥',   emoji: '🍚', moods: ['가벼운'],                 description: '부드러운 해물 소스 덮밥' },
  { category: '중식', name: '고추잡채밥', emoji: '🫑', moods: ['매운'],                   description: '아삭한 피망과 고기 볶음 덮밥' },
  { category: '중식', name: '볶음짬뽕',   emoji: '🔥', moods: ['매운'],                   description: '국물 없이 불향 가득 볶은 면' },
  { category: '중식', name: '군만두',     emoji: '🥟', moods: ['가벼운'],                 description: '바삭하게 구운 만두' },

  // 일식
  { category: '일식', name: '초밥',       emoji: '🍣', moods: ['가벼운'],                 description: '깔끔하고 산뜻하게' },
  { category: '일식', name: '돈가스',     emoji: '🍛', moods: ['든든한'],                 description: '바삭한 튀김이 생각날 때' },
  { category: '일식', name: '우동',       emoji: '🍥', moods: ['국물', '가벼운'],         description: '따뜻한 국물에 탱글한 면' },
  { category: '일식', name: '라멘',       emoji: '🍜', moods: ['국물', '든든한'],         description: '진한 국물에 차슈 한 장' },
  { category: '일식', name: '규동',       emoji: '🍚', moods: ['든든한'],                 description: '달큰한 소고기 덮밥' },
  { category: '일식', name: '카레라이스', emoji: '🍛', moods: ['든든한'],                 description: '부드럽고 순한 일본식 카레' },
  { category: '일식', name: '소바',       emoji: '🥢', moods: ['가벼운'],                 description: '시원하게 쯔유에 찍어 먹는 메밀면' },
  { category: '일식', name: '오므라이스', emoji: '🍳', moods: ['든든한'],                 description: '폭신한 달걀 이불 덮은 밥' },
  { category: '일식', name: '가츠동',     emoji: '🍱', moods: ['든든한'],                 description: '돈가스를 달걀로 덮은 덮밥' },
  { category: '일식', name: '텐동',       emoji: '🍤', moods: ['든든한'],                 description: '바삭한 튀김을 올린 덮밥' },
  { category: '일식', name: '회덮밥',     emoji: '🐟', moods: ['가벼운'],                 description: '신선한 회와 채소를 초장에 쓱쓱' },
  { category: '일식', name: '사케동',     emoji: '🍣', moods: ['가벼운'],                 description: '연어를 듬뿍 올린 덮밥' },

  // 양식
  { category: '양식', name: '파스타',       emoji: '🍝', moods: ['든든한'],               description: '분위기 내고 싶은 날' },
  { category: '양식', name: '햄버거',       emoji: '🍔', moods: ['든든한'],               description: '빠르고 든든하게' },
  { category: '양식', name: '피자',         emoji: '🍕', moods: ['든든한'],               description: '여럿이 함께라면 피자' },
  { category: '양식', name: '스테이크',     emoji: '🥩', moods: ['든든한'],               description: '오늘은 나를 위한 특별한 점심' },
  { category: '양식', name: '샐러드',       emoji: '🥗', moods: ['가벼운'],               description: '가볍고 상큼하게' },
  { category: '양식', name: '샌드위치',     emoji: '🥪', moods: ['가벼운'],               description: '간단하게 한 손으로' },
  { category: '양식', name: '리조또',       emoji: '🧀', moods: ['든든한'],               description: '크리미하고 고소한 쌀 요리' },
  { category: '양식', name: '타코',         emoji: '🌮', moods: ['가벼운'],               description: '색다른 게 먹고 싶을 때' },
  { category: '양식', name: '함박스테이크', emoji: '🍖', moods: ['든든한'],               description: '촉촉한 고기 패티에 소스 듬뿍' },
  { category: '양식', name: '그라탕',       emoji: '🧀', moods: ['든든한'],               description: '치즈가 쭉 늘어나는 오븐 요리' },

  // 분식
  { category: '분식', name: '떡볶이',     emoji: '🍢', moods: ['매운'],                   description: '매콤한 게 당길 때' },
  { category: '분식', name: '김밥',       emoji: '🍙', moods: ['가벼운'],                 description: '가볍고 간편하게' },
  { category: '분식', name: '라면',       emoji: '🍜', moods: ['국물', '매운', '해장'],   description: '가끔은 라면이 최고' },
  { category: '분식', name: '쫄면',       emoji: '🥢', moods: ['매운', '가벼운'],         description: '새콤달콤 쫄깃한 면' },
  { category: '분식', name: '순대',       emoji: '🌭', moods: ['가벼운'],                 description: '떡볶이 국물에 찍어 먹으면 최고' },
  { category: '분식', name: '튀김',       emoji: '🍤', moods: ['가벼운'],                 description: '바삭바삭 골라 먹는 재미' },
  { category: '분식', name: '라볶이',     emoji: '🍢', moods: ['매운', '든든한'],         description: '떡볶이와 라면을 한 번에' },
  { category: '분식', name: '김치볶음밥', emoji: '🍳', moods: ['매운', '든든한'],         description: '달걀 프라이 하나 올려서' },
  { category: '분식', name: '잔치국수',   emoji: '🍜', moods: ['국물', '가벼운'],         description: '멸치 국물에 후루룩' },
  { category: '분식', name: '비빔국수',   emoji: '🌶️', moods: ['매운', '가벼운'],         description: '새콤매콤 비벼 먹는 국수' },
  { category: '분식', name: '만두',       emoji: '🥟', moods: ['가벼운'],                 description: '찐만두로 간단하게' },
  { category: '분식', name: '어묵탕',     emoji: '🍢', moods: ['국물', '가벼운'],         description: '따끈한 국물에 꼬치 어묵' },
];

// 기분 버튼에 보여 줄 이름 ('상관없음'은 기분을 따지지 않음)
//   label(버튼에 보이는 말), mood(메뉴 목록의 moods와 맞춰 보는 말)
const moodChoices = [
  { label: '상관없음',     mood: '' },
  { label: '🍲 국물 땡겨', mood: '국물' },
  { label: '🌶️ 매운 거',  mood: '매운' },
  { label: '🥗 가볍게',    mood: '가벼운' },
  { label: '💪 든든하게',  mood: '든든한' },
  { label: '🍺 해장',      mood: '해장' },
];

// 종류 버튼에 보여 줄 이름들 ('전체'는 모든 종류)
const categoryNames = ['전체', '한식', '중식', '일식', '양식', '분식'];

// 최근 추천을 몇 개까지 보여 줄지
const maxHistoryCount = 5;

// 브라우저에 저장할 때 쓰는 이름표들
const historyStorageKey = 'lunch-menu-history';
const areaStorageKey = 'lunch-menu-area';


// ─────────────────────────────────────────
// 2. 화면에서 쓸 요소 찾아 두기
// ─────────────────────────────────────────
const moodButtonArea = document.getElementById('mood-buttons');
const categoryButtonArea = document.getElementById('category-buttons');
const resultCard = document.getElementById('result-card');
const resultEmoji = document.getElementById('result-emoji');
const resultName = document.getElementById('result-name');
const resultDescription = document.getElementById('result-description');
const mapLinkArea = document.getElementById('map-links');
const kakaoMapLink = document.getElementById('kakao-map-link');
const naverMapLink = document.getElementById('naver-map-link');
const recommendButton = document.getElementById('recommend-button');
const areaInput = document.getElementById('area-input');
const historyList = document.getElementById('history-list');
const menuBoardList = document.getElementById('menu-board-list');
const menuBoardCount = document.getElementById('menu-board-count');


// ─────────────────────────────────────────
// 3. 지금 상태
// ─────────────────────────────────────────
let selectedMood = '';                 // 지금 고른 기분 ('' = 상관없음)
let selectedCategory = '전체';         // 지금 고른 음식 종류
let chosenMenu = null;                 // 지금 카드에 나와 있는 메뉴
let lastRecommendedMenuName = '';      // 바로 전에 추천한 메뉴 (같은 메뉴가 연달아 나오지 않게)
let recentMenuNames = loadSavedValue(historyStorageKey, []);   // 최근 추천 기록


// ─────────────────────────────────────────
// 4. 기분 · 종류 버튼 만들기
// ─────────────────────────────────────────

// 버튼 한 묶음을 만들어 주는 공통 도우미
//   buttonArea: 버튼을 넣을 자리, labels: 버튼 글자들,
//   startSelectedIndex: 처음에 골라 둘 버튼 순서, whenClicked: 눌렀을 때 할 일
function makeFilterButtons(buttonArea, labels, startSelectedIndex, whenClicked) {
  labels.forEach((label, buttonIndex) => {
    const filterButton = document.createElement('button');
    filterButton.className = 'filter-button';
    filterButton.textContent = label;

    if (buttonIndex === startSelectedIndex) {
      filterButton.classList.add('selected');
    }

    filterButton.addEventListener('click', () => {
      // 같은 묶음 안에서는 누른 버튼만 주황색으로
      buttonArea.querySelectorAll('.filter-button').forEach((button) => {
        button.classList.toggle('selected', button === filterButton);
      });
      whenClicked(buttonIndex);
      showMenuBoard(); // 고른 조건이 바뀌면 메뉴판도 바로 바뀌어요
    });

    buttonArea.appendChild(filterButton);
  });
}

// 기분 버튼
makeFilterButtons(moodButtonArea, moodChoices.map((choice) => choice.label), 0, (buttonIndex) => {
  selectedMood = moodChoices[buttonIndex].mood;
});

// 종류 버튼
makeFilterButtons(categoryButtonArea, categoryNames, 0, (buttonIndex) => {
  selectedCategory = categoryNames[buttonIndex];
});


// ─────────────────────────────────────────
// 5. 메뉴 고르기
// ─────────────────────────────────────────

// 지금 고른 기분과 종류에 둘 다 맞는 메뉴만 골라내기
function getMatchingMenus() {
  return allMenus.filter((menu) => {
    const categoryMatches = selectedCategory === '전체' || menu.category === selectedCategory;
    const moodMatches = selectedMood === '' || menu.moods.includes(selectedMood);
    return categoryMatches && moodMatches;
  });
}

// 목록에서 아무거나 하나 뽑기
function pickRandomMenu(menuList) {
  const randomPosition = Math.floor(Math.random() * menuList.length);
  return menuList[randomPosition];
}

// 결과 카드에 메뉴 보여 주기
function showMenuOnCard(menu) {
  resultEmoji.textContent = menu.emoji;
  resultName.textContent = menu.name;
  resultDescription.textContent = `${menu.category} · ${menu.description}`;
}

// 휴대폰처럼 좁은 화면에서는 결과 카드가 화면 밖에 있을 수 있어요.
// 그럴 때 결과 카드가 보이는 곳까지 부드럽게 화면을 옮겨 줘요.
const narrowScreenWidth = 860; // style.css의 휴대폰 기준과 같은 숫자

function scrollToResultCardOnPhone() {
  if (window.innerWidth > narrowScreenWidth) return;
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 메뉴가 최종으로 정해졌을 때 할 일 (추천받기와 메뉴판 클릭에서 함께 써요)
function decideMenu(menu) {
  chosenMenu = menu;
  lastRecommendedMenuName = menu.name;
  showMenuOnCard(menu);
  updateMapLinks();
  addToHistory(menu);
  showMenuBoard();

  resultCard.classList.remove('choosing');
  void resultCard.offsetWidth; // 튀어나오는 효과를 매번 다시 보여 주기 위한 한 줄
  resultCard.classList.add('decided');
}

// "메뉴 추천받기" 버튼을 눌렀을 때
recommendButton.addEventListener('click', () => {
  scrollToResultCardOnPhone();
  const candidateMenus = getMatchingMenus();

  // 조건에 맞는 메뉴가 하나도 없을 때
  if (candidateMenus.length === 0) {
    resultEmoji.textContent = '🤔';
    resultName.textContent = '맞는 메뉴가 없어요';
    resultDescription.textContent = '기분이나 종류를 바꿔 보세요.';
    mapLinkArea.classList.remove('visible');
    return;
  }

  // 바로 전 메뉴는 빼고 고르기 (후보가 2개 이상일 때만)
  const menusExceptLastOne = candidateMenus.filter((menu) => menu.name !== lastRecommendedMenuName);
  const finalCandidates = menusExceptLastOne.length > 0 ? menusExceptLastOne : candidateMenus;

  // 고르는 동안 버튼을 잠깐 막고, 메뉴가 빠르게 바뀌는 효과를 보여 줘요
  recommendButton.disabled = true;
  mapLinkArea.classList.remove('visible');
  resultCard.classList.remove('decided');
  resultCard.classList.add('choosing');

  const shuffleSpeedInMilliseconds = 80;   // 얼마나 빨리 바뀔지
  const shuffleTimeInMilliseconds = 1000;  // 몇 초 동안 섞을지

  const shuffleTimer = setInterval(() => {
    showMenuOnCard(pickRandomMenu(candidateMenus));
  }, shuffleSpeedInMilliseconds);

  // 섞기가 끝나면 최종 메뉴를 정해요
  setTimeout(() => {
    clearInterval(shuffleTimer);
    decideMenu(pickRandomMenu(finalCandidates));
    recommendButton.disabled = false;
    recommendButton.textContent = '다른 메뉴 추천받기';
  }, shuffleTimeInMilliseconds);
});


// ─────────────────────────────────────────
// 6. 근처 식당 찾기 (카카오맵 · 네이버지도)
// ─────────────────────────────────────────

// 지도에서 검색할 말 만들기 (예: "정남면 순대국")
function makeMapSearchWords() {
  const areaName = areaInput.value.trim();
  return areaName ? `${areaName} ${chosenMenu.name}` : chosenMenu.name;
}

// 지도 버튼의 주소를 지금 메뉴에 맞게 바꾸기
function updateMapLinks() {
  if (!chosenMenu) return;
  const searchWords = encodeURIComponent(makeMapSearchWords());
  kakaoMapLink.href = `https://map.kakao.com/?q=${searchWords}`;
  naverMapLink.href = `https://map.naver.com/p/search/${searchWords}`;
  mapLinkArea.classList.add('visible');
}

// 동네 이름은 한 번 적어 두면 다음에도 기억해요
areaInput.value = loadSavedValue(areaStorageKey, '');
areaInput.addEventListener('input', () => {
  saveValue(areaStorageKey, areaInput.value.trim());
  updateMapLinks();
});


// ─────────────────────────────────────────
// 7. 메뉴판 (오른쪽)
// ─────────────────────────────────────────
function showMenuBoard() {
  const matchingMenus = getMatchingMenus();
  menuBoardList.innerHTML = '';
  menuBoardCount.textContent = `${matchingMenus.length}개`;

  if (matchingMenus.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'menu-board-empty';
    emptyMessage.textContent = '고른 조건에 맞는 메뉴가 없어요.';
    menuBoardList.appendChild(emptyMessage);
    return;
  }

  // 종류별로 묶어서 보여 주기 (한식 → 중식 → …)
  categoryNames.slice(1).forEach((categoryName) => {
    const menusInThisCategory = matchingMenus.filter((menu) => menu.category === categoryName);
    if (menusInThisCategory.length === 0) return;

    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'menu-board-category';
    categoryTitle.textContent = `${categoryName} ${menusInThisCategory.length}`;
    menuBoardList.appendChild(categoryTitle);

    const itemArea = document.createElement('div');
    itemArea.className = 'menu-board-items';

    menusInThisCategory.forEach((menu) => {
      const menuButton = document.createElement('button');
      menuButton.className = 'menu-board-item';
      menuButton.textContent = `${menu.emoji} ${menu.name}`;
      menuButton.title = menu.description;

      if (chosenMenu && chosenMenu.name === menu.name) {
        menuButton.classList.add('chosen');
      }

      // 메뉴판에서 누르면 그 메뉴로 바로 정해요
      menuButton.addEventListener('click', () => {
        if (recommendButton.disabled) return; // 섞는 중에는 무시
        decideMenu(menu);
        scrollToResultCardOnPhone();
      });

      itemArea.appendChild(menuButton);
    });

    menuBoardList.appendChild(itemArea);
  });
}


// ─────────────────────────────────────────
// 8. 최근 추천 기록
// ─────────────────────────────────────────

// 브라우저에 저장된 값 불러오기 (없거나 문제가 생기면 기본값)
function loadSavedValue(storageKey, defaultValue) {
  try {
    const savedText = localStorage.getItem(storageKey);
    return savedText === null ? defaultValue : JSON.parse(savedText);
  } catch {
    return defaultValue;
  }
}

// 브라우저에 값 저장하기
function saveValue(storageKey, value) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(value));
  } catch {
    // 저장할 수 없는 환경이면 저장만 건너뜁니다
  }
}

// 새 추천을 기록 맨 앞에 넣고, 정해진 개수만 남기기
function addToHistory(menu) {
  recentMenuNames.unshift(`${menu.emoji} ${menu.name}`);
  recentMenuNames = recentMenuNames.slice(0, maxHistoryCount);
  saveValue(historyStorageKey, recentMenuNames);
  showHistory();
}

// 기록을 화면에 보여 주기
function showHistory() {
  historyList.innerHTML = '';

  if (recentMenuNames.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.className = 'no-history';
    emptyMessage.textContent = '아직 추천받은 메뉴가 없어요.';
    historyList.appendChild(emptyMessage);
    return;
  }

  recentMenuNames.forEach((menuName) => {
    const historyItem = document.createElement('li');
    historyItem.textContent = menuName;
    historyList.appendChild(historyItem);
  });
}


// ─────────────────────────────────────────
// 9. 처음 열었을 때
// ─────────────────────────────────────────
showHistory();
showMenuBoard();
