/* Burger Menu */
document.querySelector('.header__burger').onclick = function () {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

/* Donation Form */
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

/* Slider MEET SOME OUR PETS */

const sliderBlock = document.querySelector('.meet-block__content');
const sliderItems = document.querySelector('.meet-block__cardsholder');

(function() {
	sliderBlock.addEventListener('click', addCloneFirstLast);
	
	function addCloneFirstLast(e) {
	  let first = sliderItems.querySelector('.meet-block__card');
	  let last = sliderItems.querySelector('.meet-block__card:last-child');

	  if (e.target.classList.contains('btn-left')) sliderItems.insertBefore(last, first);
	  if (e.target.classList.contains('btn-right')) sliderItems.appendChild(first);
	};
}).call(this);

/* Users Block: slider, timer*/

const usersCarousel = document.querySelector('.users-block__carousel');
const usersCardsholder = document.querySelector('.users-block__cardsholder');
const usersCards = document.querySelectorAll('.users-block__card');
const usersLeftBtn = document.querySelector('.users-block__btn.btn-left');
const usersRightBtn = document.querySelector('.users-block__btn.btn-right');

const usersCardsLength = usersCards.length;

let currentCol = 1;
let currentCard = 0;
let currLeft = 0;
let cardsHolderWidth;
let cardWidth;
let margin;
let numberOfRows;
let cardsShift;

const checkCardsholderWidth = () => {
	cardWidth = usersCards[0].offsetWidth;

	if (numberOfRows === 1 && cardWidth === 300) {
		margin = 10;
	} else {
		margin = 30;
	}

	usersCardsholder.style.width = `${(cardWidth + margin) * Math.ceil(usersCardsLength / numberOfRows)}px`;
	cardsHolderWidth = usersCardsholder.offsetWidth;

	cardsShift = cardWidth + margin;
}

const checkItemsPerPage = () => {
	cardWidth = usersCards[0].offsetWidth;

	if (cardWidth < 320 || cardWidth > 520) {
		numberOfRows = 1;
	} else {
		numberOfRows = 2;
	}

	checkCardsholderWidth();
}
checkItemsPerPage();

const nextSlides = () => {
	checkItemsPerPage();
	let rows;

	numberOfRows === 2 ? rows = usersCardsLength / numberOfRows - 1 : rows = usersCardsLength;

	if (currentCol >= rows) {
		currLeft = 0;
		currentCol = 1;
		currentCard = 0;
	} else {
		currLeft = currLeft - cardsShift;
		currentCol++;
		currentCard++;
	}

	switchDots(currentCard);
	usersCardsholder.style.left = `calc(${currLeft}px)`;
}

usersLeftBtn.addEventListener('click', () => {
	delayAutoSliding();
	checkItemsPerPage();
	
	if (currentCol === 1) {
		currLeft = -Math.ceil((cardsShift * (usersCardsLength / numberOfRows - 2)));
		currentCol = usersCardsLength / 2 - 1;
		currentCard = usersCardsLength - 1;
	} else {
		currLeft = currLeft + cardsShift;
		currentCol--;
		currentCard--;
	}

	switchDots(currentCard);
	usersCardsholder.style.left = `calc(${currLeft}px)`;
});

usersRightBtn.addEventListener('click', () => {
	delayAutoSliding();
	nextSlides();
});

let autoSlideInterval = setInterval(nextSlides, 15000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
	clearTimeout(autoSlideTimeout);
	clearInterval(autoSlideInterval);
	autoSlideInterval = null;

	autoSlideTimeout = setTimeout(() => {
		clearInterval(autoSlideInterval);
		autoSlideInterval = setInterval(nextSlides, 15000);
	}, 45000)
}

usersCarousel.addEventListener('click', delayAutoSliding);