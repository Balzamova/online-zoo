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
