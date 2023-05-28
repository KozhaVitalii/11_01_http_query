// Выносим наши ссылки на разметку в отдельный файл, после чего импортируем его в файл fetch-api.js

export default function getRefs() {
  return {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form'),
  };
}
