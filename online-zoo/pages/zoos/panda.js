/* Burger Menu */
document.querySelector('.header__burger').onclick = function () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

/* Check Switcher */
const switcher = document.querySelector('.swither');
const switcherCircle = document.querySelector('.switcher__circle');


switcher.addEventListener('click', () => {
	switcherCircle.classList.toggle('right');
	document.querySelector('body').classList.toggle('green');
})

/* Toggle sidebar*/
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

/* Sidebar slider*/
const sidebarList = document.querySelector('.sidebar__list');
const sidebarItem = document.querySelectorAll('.sidebar__item');

(function() {
	sidebar.addEventListener('click', addCloneFirstLast);
	
	function addCloneFirstLast(e) {
	  let parent = document.querySelector('.sidebar__list');
	  let first = parent.querySelector('.sidebar__item');

	  if (e.target.classList.contains('sidebar__arrow_item')) parent.appendChild(first);
	};
}).call(this);

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

/* Cameras slider */
const sliderBlock = document.querySelector('.camera__more_content');
const sliderItems = document.querySelector('.camera__more_container');
const btnPrev = document.querySelector('.btn-left');
const btnNext = document.querySelector('.btn-right');

const sliderShift = 10;

(function() {
	sliderBlock.addEventListener('click', addCloneFirstLast);
	
	function addCloneFirstLast(e) {
	  let parent = document.querySelector('.camera__more_container');
	  let first = parent.querySelector('.camera__more_block');
	  let last = parent.querySelector('.camera__more_block:last-child');

	  if (e.target.classList.contains('btn-left')) parent.insertBefore(last, first);	  
	  if (e.target.classList.contains('btn-right')) parent.appendChild(first);
	};
}).call(this);

/* Switch main camera */

const playBtns = document.querySelectorAll('.camera__more_play');

playBtns.forEach(item => {
	item.addEventListener('click', () => {
		let currentCamera = item.parentElement.children[2].children[0];
		let currentSrc = currentCamera.src;
		let arrayCurrent = currentSrc.split('');
		let currentPlaySrc = '';
		
		arrayCurrent.splice(arrayCurrent.length-1, 1, '1');
		for (let i = 0; i < arrayCurrent.length; i++) {
			currentPlaySrc += arrayCurrent[i];
		}
	
		let bigCamera = document.querySelector('.camera__main');
		let bigCameraSrc = bigCamera.src;
		let arrayBig = bigCameraSrc.split('');
		let bigCameraStopSrc = '';

		arrayBig.splice(arrayBig.length-1, 1, '0');
		for (let i = 0; i < arrayBig.length; i++) {
			bigCameraStopSrc += arrayBig[i];
		}

		bigCamera.src = currentPlaySrc;
		currentCamera.src = bigCameraStopSrc;
	})
});

document.addEventListener("touchend", touch2Mouse, true);

function touch2Mouse(e) {
  var theTouch = e.changedTouches[0];
  var mouseEv;

  switch(e.type) {
   	case "touchend":  mouseEv="click"; break;
    default: return;
  }

  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  theTouch.target.dispatchEvent(mouseEvent);

  e.preventDefault();
}

/* MODAL WINDOWS */

import {modalControl} from './../main/modal.js'

const feedBlockBtn = document.querySelector('.feed-block__button');
const donatBlockBtn = document.querySelector('.donat__btn');
const donatBlockAmount = document.querySelector('.donat__input');
const footerBtn = document.querySelector('.footer__btn');

donatBlockBtn.addEventListener('click', (event) => {
	let value = donatBlockAmount.value;

	modalControl(event, value);
});

feedBlockBtn.addEventListener('click', (event) => {
	modalControl(event)
});

footerBtn.addEventListener('click', (event)=> {
	modalControl(event)
});
