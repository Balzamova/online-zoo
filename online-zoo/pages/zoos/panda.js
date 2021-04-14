/* Burger Menu */
document.querySelector('.header__burger').onclick = function () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

/* Functions for toggle sidebar*/
const arrowBtn = document.querySelector('.sidebar__live_arrow');
const sidebar = document.querySelector('.sidebar');
const sidebarLive = document.querySelector('.sidebar__live_block');
const sidebarOpenMain = document.querySelector('.sidebar__open-main');
const sidebarCircle = document.querySelectorAll('.sidebar__circle');
const sidebarBigBar = document.querySelectorAll('.sidebar__open');
const sidebarText = document.querySelectorAll('.sidebar__open_text');

const toggleSidebar = () => {
	sidebar.classList.toggle('active');
	arrowBtn.classList.toggle('active');
	sidebarLive.classList.toggle('open');

	sidebarCircle.forEach(item => {
		item.classList.toggle('close');
	})
	
	sidebarBigBar.forEach(item => {
		item.classList.toggle('close');
	})

	sidebarText.forEach(item => {
		item.classList.toggle('close');
	})
}

arrowBtn.addEventListener('click', toggleSidebar);
sidebarOpenMain.addEventListener('click', toggleSidebar);

/* Input settings */

const form = document.querySelector('.donat__donate');
const donatInput = document.querySelector('.donat__input');
const submitBtn = document.querySelector('.donat__btn');

form.addEventListener('submit', (event)=> {
	event.preventDefault();
})

donatInput.addEventListener('input', ()=> {
	const value = donatInput.value;
	
	if (value.length > donatInput.maxLength){
		donatInput.value = value.slice(0, donatInput.maxLength);
	}
})