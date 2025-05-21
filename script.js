const btnHowtoPlay = document.querySelector('.btn-how-to-play');
const menuHomeContainer = document.querySelector('.menu-home-container');
const howToPlayContainer = document.querySelector('.how-to-play-container');
const categoryContainer = document.querySelector('.category-container');
const backBtns = document.querySelectorAll('.back-btn-container');
const playBtn = document.querySelector('.img-play-container');
const gameContainer = document.querySelector('.game-container');
const categoriesContainer = document.querySelector('.categories');
let wordContainer = document.querySelector('.word');
const pickedCategory = document.querySelector('.picked-category');
const keyboard = document.querySelector('.keyboard');
const menuIngame = document.querySelector('.menu-container');
const healthBar = document.querySelector('.health-bar');
const menuIcon = document.querySelector('.menu-icon-container');
const pauseContainer = document.querySelector('.paused-container');
const game = document.querySelector('.game');
const pausedMenu = document.querySelector('.paused-menu');
const continueButton = document.querySelector('[data-option="Continue"]');
const playAgainButton = document.querySelector('.play-again');
const quitButton = document.querySelector('[data-option="Quit Game"]');
const keys = [...document.querySelectorAll('.key')];
let lettersChosen = [];

let randomWord;
let lives = 5;
let maxLives = 5;
let category;

let GAME_STATES = {
  STARTED: 'started',
  PAUSED: 'paused',
  ENDED: 'ended',
  NOT_STARTED: 'not started',
};
let gameState = GAME_STATES.NOT_STARTED;

btnHowtoPlay.addEventListener('click', function () {
  menuHomeContainer.classList.add('display--none');
  howToPlayContainer.classList.remove('display--none');
  gameContainer.classList.add('display--none');
});

backBtns.forEach(btn =>
  btn.addEventListener('click', function (e) {
    menuHomeContainer.classList.remove('display--none');
    howToPlayContainer.classList.add('display--none');
    categoryContainer.classList.add('display--none');
    gameContainer.classList.add('display--none');
    console.log(e.target);
  })
);

pausedMenu.addEventListener('click', function (e) {
  const pausedOption = e.target.dataset.option;
  // gameState = GAME_STATES.PAUSED;

  if (pausedOption === 'Continue') {
    gameState = GAME_STATES.STARTED;
    pauseContainer.classList.add('display--none');
    game.classList.remove('inactive--key');
    keyboard.classList.remove('inactive--key');
  } else if (pausedOption === 'New Category') {
    gameState = GAME_STATES.ENDED;
    gameContainer.classList.add('display--none');
    categoryContainer.classList.remove('display--none');
  }
});

menuIcon.addEventListener('click', function () {
  gameState = GAME_STATES.PAUSED;
  pauseContainer.classList.remove('display--none');
  game.classList.add('inactive--key');
  keyboard.classList.add('inactive--key');
});

let wordContainerChildren;

playAgainButton.addEventListener('click', function () {
  gameState = GAME_STATES.STARTED;
  wordContainer.innerHTML = '';
  pauseContainer.classList.add('display--none');
  playAgainButton.classList.add('display--none');
  continueButton.classList.remove('display--none');
  lives = 5;
  maxLives = 5;

  console.log(lettersChosen);
  healthBar.style.transform = 'scaleX(1)';
  fetchWord(category);
});

keyboard.addEventListener('click', function (e) {
  console.log(gameState);
  if (gameState !== GAME_STATES.STARTED) return;
  const key = e.target.closest('[data-key]')?.dataset.key?.toLowerCase();
  console.log(key);
  if (!key) return;
  let randomWordUnspaced = [...randomWord.replaceAll(' ', '').toLowerCase()];
  let alreadyChosen = lettersChosen.includes(key);
  if (randomWordUnspaced.includes(key) && !alreadyChosen) {
    let indexes = [];
    randomWordUnspaced.forEach((item, index) => {
      item === key ? indexes.push(index) : '';
    });
    wordContainerChildren = [...wordContainer.children].filter(el =>
      el.classList.contains('letter')
    );

    // console.log(wordContainerChildren);
    indexes.forEach(el => {
      wordContainerChildren[el].textContent =
        el === 0 ? key.toUpperCase() : key;
    });
    e.target.classList.add('inactive--key');
    lettersChosen.push(key);
    // console.log(wordContainerChildren, indexes);
  } else if (lives > 0 && !randomWordUnspaced.includes(key) && !alreadyChosen) {
    e.target.classList.add('inactive--key');
    lives--;
    const percent = lives / maxLives;
    healthBar.style.transform = `scaleX(${percent})`;
    lettersChosen.push(key);
  }
  const allLettersFilled =
    wordContainerChildren &&
    wordContainerChildren.every(el => el.textContent !== '');
  if (lives <= 0 || allLettersFilled) {
    gameState = GAME_STATES.ENDED;
    handleGameEnd();
  }
});

quitButton.addEventListener('click', function () {
  pauseContainer.classList.add('display--none');
  gameContainer.classList.add('display--none');
  menuHomeContainer.classList.remove('display--none');
  gameState = GAME_STATES.ENDED;
});

function handleGameEnd() {
  // let wordTile = [...wordContainer.children].filter(el =>
  //   el.classList.contains('letter')
  // );

  const continueButton = document.querySelector('[data-option="Continue"]');
  console.log(continueButton);
  let word = [...randomWord.replaceAll(' ', '')];
  keys.forEach(el => el.classList.remove('inactive--key'));
  pauseContainer.classList.remove('display--none');
  continueButton.classList.add('display--none');
  playAgainButton.classList.remove('display--none');
  // menuIcon.classList.add('inactive--key');
  wordContainerChildren.forEach((el, i) => (el.textContent = word[i]));
  lettersChosen = [];
}

playBtn.addEventListener('click', function () {
  menuHomeContainer.classList.add('display--none');
  categoryContainer.classList.remove('display--none');
  gameContainer.classList.add('display--none');
});

const fetchWord = function (category) {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      // console.log(category);
      let categoryItems = data.categories[category];
      // let randomNumber = Math.trunc(Math.random() * categoryItems.length) + 1;
      let randomNumber = Math.floor(Math.random() * categoryItems.length);
      randomWord = categoryItems[randomNumber].name;

      randomWord.split('').forEach(char => {
        let html = document.createElement('div');
        if (char !== ' ') {
          html.classList.add('letter');
          console.log(html.classList.contains('letter'));
          wordContainer.append(html);
        } else {
          const space = document.createElement('div');
          space.classList.add('space');
          wordContainer.appendChild(space);
        }

        console.log(randomWord);
      });
      wordContainerChildren = [...wordContainer.querySelectorAll('.letter')];
      console.log(wordContainerChildren);
    });
  // wordContainerChildren = [...wordContainer.children].filter(el =>
  //   el.classList.contains('letter')
  // );
};
categoriesContainer.addEventListener('click', function (e) {
  category = e.target.dataset.category;
  pickedCategory.textContent = category;

  // console.log(category);
  if (category) {
    gameContainer.classList.remove('display--none');
    categoryContainer.classList.add('display--none');
    gameState = GAME_STATES.STARTED;
    pauseContainer.classList.add('display--none');
    continueButton.classList.remove('display--none');
    playAgainButton.classList.add('display--none');
    console.log(gameState);
    game.classList.remove('inactive--key');
    keyboard.classList.remove('inactive--key');
    keys.forEach(el => el.classList.remove('inactive--key'));
    lives = 5;
    maxLives = 5;
    healthBar.style.transform = 'scaleX(1)';
    [...wordContainer.children].forEach(el => (el.textContent = ''));
    wordContainer.innerHTML = '';
  }
  fetchWord(category);
});
