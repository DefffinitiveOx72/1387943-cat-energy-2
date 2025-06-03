/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.nav');
const openButton = document.querySelector('.nav__button');

openButton.addEventListener('click', () => {
  navMain.classList.toggle('nav__list--open');
}
)

navMain.classList.remove('nav__list--nojs');