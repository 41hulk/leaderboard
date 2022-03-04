import './style.css';
import Game from './modules/game.js';
import Display from './modules/display.js';

const gameName = 'Leader Game';
const game = new Game(gameName);
const display = new Display();

const form = document.querySelector('form');
const refreshBtn = document.querySelector('.section-head button');

const resfreshList = async () => {
  const scores = await game.getScores();
  display.displayScores(scores.result);
};

const render = async () => {
  await game.start();
  await resfreshList();
};

const addScore = async (e) => {
  e.preventDefault();
  const user = document.getElementById('name');
  const score = document.getElementById('score');
  await game.addScoreToGame(user.value, score.value);
  user.value = '';
  score.value = '';
  await resfreshList();
};

render();
form.addEventListener('submit', addScore);
refreshBtn.addEventListener('click', resfreshList);