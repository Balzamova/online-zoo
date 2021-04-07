/* Burger Menu */
document.querySelector('.header__burger').onclick = function () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

/* Forms validation */

const formBtn = document.querySelector('.form__btn');
const inputs = document.querySelectorAll('.form__input');
const textArea = document.querySelector('.form__textarea');

formBtn.addEventListener('click', () => {
	inputs.forEach(input => {
		if (input.value === '') {
			input.classList.add('form_invalid');
		} else {
			input.classList.remove('form_invalid');
		}
	})

	if (textArea.value === '') {
		textArea.classList.add('form_invalid');
	} else {
		textArea.classList.remove('form_invalid');
	}
});
