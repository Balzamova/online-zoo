/* Burger Menu */
document.querySelector('.header__burger').onclick = function () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

/* MODAL WINDOWS */

import {modalControl} from './../main/modal.js'

const footerBtn = document.querySelector('.footer__btn');

footerBtn.addEventListener('click', (event)=> {
	modalControl(event)
});