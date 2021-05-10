/* Burger Menu */
document.querySelector('.header__burger').onclick = function () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

/* Forms validation */

const formBtn = document.querySelector('.form__btn');
const inputs = document.querySelectorAll('.contacts__form__input');
const textArea = document.querySelector('.form__textarea');

formBtn.addEventListener('click', () => {
	inputs.forEach(input => {
		if (input.validity.valid) {
			input.classList.remove('form_invalid');
		} else {
			input.classList.add('form_invalid');
		}
	})

	if (textArea.value === '') {
		textArea.classList.add('form_invalid');
	} else {
		textArea.classList.remove('form_invalid');
	}
});

/* MODAL WINDOWS */

import {modalControl} from './../main/modal.js'

const footerBtn = document.querySelector('.footer__btn');

footerBtn.addEventListener('click', (event)=> {
	modalControl(event)
});