import fetchFollowers from './src/fetchFollowers.js';
import displayFollwers from './src/displayFollowers.js';
import get from './src/getElement.js';
import paginate from './src/paginate.js';
import displayButtons from './src/displayButtons.js';

const title = get('.section-title h1');
const container = get('.container');
const btnContainer = get('.btn-container');

let index = 0;
let pages = [];

const setUpUI = () => {
  container.innerHTML = displayFollwers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = 'Pagination';
  pages = paginate(followers);
  setUpUI();
};

window.addEventListener('load', init);

btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  setUpUI();
});
