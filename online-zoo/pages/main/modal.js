export function modalControl (event, value) {
	createModalWindow(event, value)

	function createModalWindow (event, value) {
		let amount = value;

		if (!value) amount = 0;

		const base = `
			<div class="modal-window" id="modal-window">
			</div>
		`

		document.body.insertAdjacentHTML('beforeend', base);

		createModalCare();
		createModalFirst();
		createModalSecond();
		createModalThird();
		createModalFourth();
		openPayModalWindow(event, amount);
	}

	function	createModalCare() {
		const modalWindow = document.querySelector('.modal-window');

		const base = `
			<div class="modal__care non-active">
				<img class="modal__care_icon" src="../../assets/icons/cross.svg" alt="">
				<img class="modal__care_img" src="../../assets/images/image 129.png" alt="">
				<div class="modal__care_title block-title"> together we care, save and protect! </div>
				<div class="modal__care_subtitle info-text"> Your most generous gift not only cares for countless animals, but
					it also offers hope and a vital lifeline to the world’s most endangered wildlife relying on us to survive.
				</div>
				<div class="modal__care_buttons">
					<button class="modal__care_btn"> $ 20 </button>
					<button class="modal__care_btn"> $ 30 </button>
					<button class="modal__care_btn"> $ 50 </button>
					<button class="modal__care_btn"> $ 80 </button>
					<button class="modal__care_btn"> $ 100 </button>
					<button class="modal__care_btn">  </button>
				</div>
			</div>
		`

		modalWindow.insertAdjacentHTML('beforeend', base);
	};

	function	createModalFirst() {
		const modalWindow = document.querySelector('.modal-window');

		const base = `
			<div class="modal__first non-active">
					<div class="modal-window_header"> 
						make your donation 
						<img class="modal__window_icon" src="../../assets/icons/cross.svg" alt="">
					</div>
					<div class="modal-window_heading info-text"> Donation Information: </div>

					<div class="modal__content">
						<div class="modal-window_main">
								<form class="modal-window__form form">
									<p class="form__choose amount__choice info-text"><span>*</span> Choose your donation amount: </p>
									<div class="form__label buttons info-text">
										<button class="form__button" data-type="btn-first"> $ 10 </button>
										<button class="form__button" data-type="btn-first"> $ 20 </button>
										<button class="form__button" data-type="btn-first"> $ 30 </button>
										<button class="form__button" data-type="btn-first"> $ 50 </button>
										<button class="form__button" data-type="btn-first"> $ 80 </button>
										<button class="form__button" data-type="btn-first"> $ 100 </button>
									</div>
									<div class="form__label info-text">
										<button class="form__button" id="other-amount" data-type="btn-first"> other amount </button>
										<input class="form__input_num info-text" disabled type="number" maxlength="4">
									</div>

									<div class="form__label select info-text">
										<button class="form__button_special" id="btn__special-pet"> for special pet </button>
										<div class="form__select active">
											<div class="form__select_header">
												<span class="form__select_name"> </span>
												<div class="form__select_btn"></div>
											</div>
											<div class="form__select_area">
												<div class="form__select_option"> Lukas the Panda </div>
												<div class="form__select_option"> Sam & Lora the Eagles family </div>
												<div class="form__select_option"> Glen the Gorilla </div>
												<div class="form__select_option"> Andy the Lemur </div>
											</div>
										</div>
									</div>
									<div class="form__label info-text">
										<div class="form__checkbox"></div>
										<span class="form__make info-text"> Make this a monthly recurring gift </span>
									</div>

									<div class="modal-window_footer">
										<button class="modal-window_next first" id="btn-first-next" type="submit"> next </button>
									</div>
								</form>
						</div>

						<img class="modal-window_steps" src="../../assets/icons/steps 1.svg" alt="">
					</div>
				</div>
		`

		modalWindow.insertAdjacentHTML('beforeend', base);
	};

	function	createModalSecond() {
		const modalWindow = document.querySelector('.modal-window');

		const base = `
			<div class="modal__second non-active">
			<div class="modal-window_header"> 
				make your donation 
				<img class="modal__window_icon" src="../../assets/icons/cross.svg" alt="">
			</div>
			<div class="modal-window_heading info-text"> Billing Information: </div>

			<div class="modal__content">
				<div class="modal-window_main">
					<form class="modal-window_form-second">
						<p class="form__choose info-text"><span>*</span> Your Name </p>
						<input class="form__input-long info-text" data-type="input-second" type="text" placeholder="First and last name">

						<p class="form__choose info-text"><span>*</span> Your Email Address </p>
						<input class="form__input-long info-text" data-type="input-second" type="email" placeholder="Enter your email">
					
						<div class="modal__second-info"> You will receive emails from the Online Zoo, including updates and news on the latest discoveries and
								translations. You can unsubscribe at any time.
						</div>

						<div class="modal-window_footer">
							<button class="modal-window_back" id="btn-second-back"> Back </button>
							<button class="modal-window_next" id="btn-second-next" type="submit"> next </button>
						</div>
					</form>
				</div>

					<img class="modal-window_steps" src="../../assets/icons/steps 2.svg" alt=""/>
				</div>
			</div>
		`

		modalWindow.insertAdjacentHTML('beforeend', base);
	};

	function	createModalThird() {
		const modalWindow = document.querySelector('.modal-window');

		const base = `
				<div class="modal__third non-active">
				<div class="modal-window_header">
					make your donation
					<img class="modal__window_icon" src="../../assets/icons/cross.svg" alt="">
				</div>
				<div class="modal-window_heading info-text"> Payment Information:</div>
				<div class="modal__content">
					<div class="modal-window_main">
						<form class="modal-window__form form">
							<div class="form__label_card-number">
								<div class="form__label_card-num">
									<p class="form__choose info-text"><span>*</span> Credit Card Number </p>
									<input class="form__input form__input-num info-text" data-type="form-third" type="text" maxlength="16">
								</div>
								<div class="form__label_card-cvv">
									<p class="form__choose info-text"><span>*</span> CVV Number </p>
									<input class="form__input form__input-cvv info-text" data-type="form-third" type="number" maxlength="3">
								</div>
							</div>
							
							<div class="form__label_card ">
								<p class="form__choose info-text"><span>*</span> Expiration Date </p>
								<div class="form__label_card-info">
									<div class="form__select-month">
										<div class="form__select_header month">
											<span class="form__select_name month"> </span>
											<div class="form__select_btn month"></div>
										</div>
										<div class="form__select_area month">
											<div class="form__select_wrapper">
												<div class="form__select_option month"> 01 </div>
												<div class="form__select_option month"> 02 </div>
												<div class="form__select_option month"> 03 </div>
												<div class="form__select_option month"> 04 </div>
												<div class="form__select_option month"> 05 </div>
												<div class="form__select_option month"> 06 </div>
												<div class="form__select_option month"> 07 </div>
												<div class="form__select_option month"> 08 </div>
												<div class="form__select_option month"> 09 </div>
												<div class="form__select_option month"> 10 </div>
												<div class="form__select_option month"> 11 </div>
												<div class="form__select_option month"> 12 </div>
											</div>
										</div>
									</div>

									<div class="form__select-year">
										<div class="form__select_header year">
											<span class="form__select_name year"> </span>
											<div class="form__select_btn year"></div>
										</div>
										<div class="form__select_area year">
											<div class="form__select_wrapper">
												<div class="form__select_option year"> 2021 </div>
												<div class="form__select_option year"> 2022 </div>
												<div class="form__select_option year"> 2023 </div>
												<div class="form__select_option year"> 2024 </div>
												<div class="form__select_option year"> 2025 </div>
												<div class="form__select_option year"> 2026 </div>
											</div>
										</div>
									</div>
								</div>
							</div>
					
							<div class="modal-window_footer">
								<button class="modal-window_back" id="btn-third-back"> Back </button>
								<button class="modal-window_complete" id="btn-third-complete" type="submit"> complete donation </button>
							</div>
						</form>
					</div>

					<img class="modal-window_steps" src="../../assets/icons/steps 3.svg" alt="">
				</div>
			</div>
		`

		modalWindow.insertAdjacentHTML('beforeend', base);
	};

	function	createModalFourth() {
		const modalWindow = document.querySelector('.modal-window');

		const base = `
			<div class="modal__fourth non-active">
				<div class="modal__fourth_title block-title"> thank you for your donation !</div>
				<div class="modal__content">
					<img class="modal__fourth-img" src="../../assets/icons/panda thanks.svg" alt=""/>
						
					<div class="modal-window_footer">
						<button class="modal-window_last" id="btn-fourth-close"> Back to main page </button>
						<a class="modal-window_last" href="../map/map.html"> Go to map page </a>
					</div>
				</div>
			</div>
		`

		modalWindow.insertAdjacentHTML('beforeend', base);
	};

	function openPayModalWindow (event, value) {
		const modalWindow = document.querySelector('.modal-window');
		const modalCareWindow = document.querySelector('.modal__care');
		const modalFirstWindow = document.querySelector('.modal__first');
		
		const buttonsFirstWindow = document.querySelectorAll('[data-type="btn-first"]');
		const btnOtherAmount = document.querySelector('#other-amount');
		const input = modalFirstWindow.querySelector('.form__input_num');

		document.body.style.overflow = "hidden";
		document.body.style.height = "100%";
		modalWindow.classList.remove('non-active');

		let amount = value;

		if (event.target.className === 'donat__btn' 
				|| event.target.className === 'img-arrow') {
			if (amount) {
				input.value = amount;
				btnOtherAmount.classList.add('active');
			} else {
					amount = 10;
					buttonsFirstWindow[0].classList.add('active');
					input.value = amount;
			}
		}

		if (event.target.className === 'modal__care_btn') {
			if (amount !== 'other amount') {
				input.disabled = true;
				input.value = amount;
				buttonsFirstWindow.forEach(el => {
					el.classList.remove('active');
					let target = el.textContent;
					let value;
					
					if (target !== ' other amount ') {
						value = target.match(/[0-90-9]/g).join('');
					} else {
						value = '';
					}
					
					if (amount === value && value !== '') {
						el.classList.add('active');
					} 
				})
		
			} else {
				buttonsFirstWindow.forEach(el => {
					el.classList.remove('active');
				});

				input.value = '';
				btnOtherAmount.classList.add('active');
				focusedInput();
			}
		}

		if (!amount) {
			amount = 10;
			buttonsFirstWindow[0].classList.add('active');
			input.value = amount;
		}
		
		if (event.target.className === 'footer__btn') {
			modalCareWindow.classList.remove('non-active');
		}

		if (event.target.className === 'donat__btn'
		|| event.target.className === 'feed-block__button'
		|| event.target.className === 'cardsholder__button'
		|| event.target.className === 'modal__care_btn') {
			modalFirstWindow.classList.remove('non-active');
			modalCareWindow.classList.add('non-active');
		}

		if (event.target.className === 'img-arrow') {
			if (event.target.parentNode.className === 'donat__btn'
			|| event.target.parentNode.className === 'feed-block__button') {
				modalFirstWindow.classList.remove('non-active');
			}
		}
	}

	const modalWindow = document.querySelector('.modal-window');
	const modalCareWindow = document.querySelector('.modal__care');
	const modalFirstWindow = document.querySelector('.modal__first');
	const modalSecondWindow = document.querySelector('.modal__second');
	const modalThirdWindow = document.querySelector('.modal__third');
	const modalFourthWindow = document.querySelector('.modal__fourth');

	const donatBlockAmount = document.querySelector('.donat__input');
	const buttonsFirstWindow = document.querySelectorAll('[data-type="btn-first"]');
	const btnOtherAmount = document.querySelector('#other-amount');
	const input = document.querySelector('.form__input_num');
	const closeIcons = document.querySelectorAll('.modal__window_icon');

	let inputsValid = false;

	/* Turn on prevent defaul for modal windows*/
	modalCareWindow.addEventListener('submit', formSubmit);
	modalFirstWindow.addEventListener('submit', formSubmit);
	modalSecondWindow.addEventListener('submit', formSubmit);
	modalThirdWindow.addEventListener('submit', formSubmit);

	function formSubmit (event) {
		event.preventDefault();
	}

	/* Modal care window */
	const closeCareBtn = document.querySelector('.modal__care_icon');
	const buttonsCareWindow = document.querySelector('.modal__care_buttons');
	const btnCareWindow = document.querySelectorAll('.modal__care_btn');

	buttonsCareWindow.addEventListener('click', (event)=> {
		let target = event.target.textContent;
		let value;
		
		if (target !== '  ') {
		value = target.match(/[0-90-9]/g).join('');
		} else {
			value = 'other amount';
		}
		
		openPayModalWindow(event, value);
	})

	closeCareBtn.addEventListener('click', closePayModalWindow);

	/* Modal donation window - 1*/

	const btnSpecialPet = document.querySelector('#btn__special-pet');
	const formSelect = modalFirstWindow.querySelector('.form__select');
	const amountChoice = modalFirstWindow.querySelector('.amount__choice');

	const selectPlaceholder = document.querySelector('.form__select_name');
	const selectOptions = document.querySelectorAll('.form__select_option');
	const selectBtn = document.querySelector('.form__select_btn');
	const selectArea = document.querySelector('.form__select_area');
	const selectHeader = document.querySelector('.form__select_header');

	selectPlaceholder.innerText = 'Choose your favourite';

	function toggleSelect (btn, area) {
		btn.classList.toggle('active');
		area.classList.toggle('active');
	}

	function changeSelectorStyle(area, form, btn, options, placeholder) {
		area.classList.remove('active');
		form.classList.remove('focus');
		btn.classList.add('active');

		options.forEach(el => {
			el.classList.remove('active');
		})

		if (placeholder.innerText !== 'Choose your favourite') {
			btnSpecialPet.classList.add('active');
		}
	}

	function focusedInput() {
			input.disabled = false;
			input.classList.add('focus');

			input.addEventListener('input', ()=> {
				const value = input.value;

				if (value.length > input.maxLength) {
					input.value = value.slice(0, input.maxLength);
				}
			});
	}

	selectHeader.addEventListener('click', () => {
			toggleSelect(selectBtn, selectArea)
		});

	selectArea.addEventListener('click', (event) => {
		let newInner = event.target.innerText;
		selectPlaceholder.innerText = newInner;
		changeSelectorStyle(selectArea, formSelect, selectBtn, selectOptions, selectPlaceholder);
		event.target.classList.add('active');
		selectBtn.classList.remove('active');
	});

	modalFirstWindow.addEventListener('click', (event) => {
		if (!event.target.classList.contains('form__input_num')) {
			if (input.value === '') btnOtherAmount.classList.remove('active');
			
			input.classList.remove('focus');
			input.disabled = true;
		}

		if (event.target.classList.contains('form__button')) {
			input.classList.remove('focus');
			input.disabled = true;
			amountChoice.classList.remove('invalid');

			let inner = event.target.innerText.split('');
			let valueArray = [];
			for (let i = 2; i < inner.length; i++ ){
				valueArray.push(inner[i])
			}
			let valueNum = valueArray.join('');
			
			input.value = valueNum;
		
			buttonsFirstWindow.forEach((el)=> {
				el.classList.remove('active');
			});

			event.target.classList.add('active');
		}

		if (event.target.classList.contains('form__button_special')) {
			btnSpecialPet.classList.toggle('active');
			formSelect.classList.toggle('focus');

			if (!btnSpecialPet.classList.contains('active')) {
				selectPlaceholder.innerText = 'Choose your favourite';
				selectPlaceholder.classList.remove('active');
				formSelect.classList.remove('focus');
				selectOptions.forEach(el => {
					el.classList.remove('active');
				})
			};
		}

		if (event.target.classList.contains('form__checkbox') || event.target.classList.contains('form__make')) {
			modalFirstWindow.querySelector('.form__checkbox').classList.toggle('active');
		}

		if (event.target.id === 'other-amount') {
			focusedInput();
		}
	})

	modalFirstWindow.querySelector('#btn-first-next').addEventListener('click', () => {	
		const input = modalFirstWindow.querySelector('.form__input_num');
		const amountChoice = modalFirstWindow.querySelector('.amount__choice');

		if (input.value !== '') {
			amountChoice.classList.remove('invalid');
			inputsValid = true;
		}

		if (inputsValid) {
			modalFirstWindow.classList.add('non-active');
			modalSecondWindow.classList.remove('non-active');
			amountChoice.classList.remove('invalid');
		} else {
			amountChoice.classList.add('invalid');
		}
			
			inputsValid = false;
			return false;
	})

	/* Modal donation window - 2*/

	const inputsSecondWindow = document.querySelectorAll('[data-type="input-second"]');

	document.querySelector('#btn-second-back').addEventListener('click', () => {
			modalSecondWindow.classList.add('non-active');
			modalFirstWindow.classList.remove('non-active');	
	})

	document.querySelector('#btn-second-next').addEventListener('click', btnSecondWindowHandler);

	function btnSecondWindowHandler() {
		for (let i = 0; i < inputsSecondWindow.length; i++) {
			if (inputsSecondWindow[i].value === '') {
					inputsSecondWindow[i].classList.add('form_invalid');
			} else if (!inputsSecondWindow[i].validity.valid) {
					inputsSecondWindow[i].classList.add('form_invalid');
			} else 	{
				inputsSecondWindow[i].classList.remove('form_invalid');
			}
		}

		for (let i = 0; i < inputsSecondWindow.length; i++) {
			if (inputsSecondWindow[i].classList.contains('form_invalid')) {
				inputsValid = false;
			} else if (inputsSecondWindow[i].value === '') {
				inputsValid = false; 
			} else if (!inputsSecondWindow[i].validity.valid) {
				inputsValid = false;
			} else {
				inputsValid = true; 
			}
		}

		if (inputsValid) {
			modalThirdWindow.classList.remove('non-active');
			modalSecondWindow.classList.add('non-active');
		}

		inputsValid = false;
	}

	/* Modal donation window - 3*/

	const cardNumber = document.querySelector('.form__input-num');
	const cardCvv = document.querySelector('.form__input-cvv');

	const formSelectMonth = document.querySelector('.form__select-month');
	const selectHeaderMonth = document.querySelector('.form__select_header.month');
	const selectPlaceholderMonth = document.querySelector('.form__select_name.month');
	const selectBtnMonth = document.querySelector('.form__select_btn.month');
	const selectAreaMonth = document.querySelector('.form__select_area.month');
	const selectMonth = document.querySelectorAll('.form__select_option.month');

	const formSelectYear = document.querySelector('.form__select-year');
	const selectHeaderYear = document.querySelector('.form__select_header.year');
	const selectPlaceholderYear = document.querySelector('.form__select_name.year');
	const selectBtnYear = document.querySelector('.form__select_btn.year');
	const selectAreaYear = document.querySelector('.form__select_area.year');
	const selectYear = document.querySelectorAll('.form__select_option.year');

	selectPlaceholderMonth.innerText = 'Month';
	selectPlaceholderYear.innerText = 'Year';

	const isValidNumber = (inp) => {
		const cardNumberLength = 16;
		const input = inp;
		const value = input.value;

		if (value.length > input.maxLength){
			input.value = value.slice(0, input.maxLength);
		}

		if (value.length === input.maxLength) {
			return true;
		} else {
			return false;
		}
		}

	function ThirdWindowHandler() {
		let numberValid = false;
		let cvvValid = false;
		let monthValid = false;
		let yearValid = false;


		if (!isValidNumber(document.querySelector('.form__input-num'))) {
			cardNumber.classList.add('form_invalid');
			numberValid = false; 
		} else {
			cardNumber.classList.remove('form_invalid');
			numberValid = true;
		}

		if (!isValidNumber(document.querySelector('.form__input-cvv'))) {
			cardCvv.classList.add('form_invalid');
			cvvValid = false; 
		} else {
			cardCvv.classList.remove('form_invalid');
			cvvValid = true;
		}

		if (selectPlaceholderMonth.innerText === 'Month') {
			selectHeaderMonth.classList.add('invalid');
			monthValid = false; 
		} else {
			selectHeaderMonth.classList.remove('invalid');
			monthValid = true;
		}

		if (selectPlaceholderYear.innerText === 'Year') {
			selectHeaderYear.classList.add('invalid');
			yearValid = false; 
		} else {
			selectHeaderYear.classList.remove('invalid');
			yearValid = true;
		}
		
		if (!numberValid || !cvvValid || !monthValid || !yearValid) {
			inputsValid = false;
		}	else {
			inputsValid = true;
		}

		if (inputsValid) {
			modalThirdWindow.classList.add('non-active');
			modalFourthWindow.classList.remove('non-active');
		}
			
		inputsValid = false;
	}

	cardNumber.addEventListener('input', () => {
		isValidNumber(document.querySelector('.form__input-num'));
	});

	cardCvv.addEventListener('input', () => {
		isValidNumber(document.querySelector('.form__input-cvv'));
	});

	selectHeaderMonth.addEventListener('click', () => {
			toggleSelect(selectBtnMonth, selectAreaMonth)
		});

	selectAreaMonth.addEventListener('click', (event) => {
		let newInner = event.target.innerText;
		selectPlaceholderMonth.innerText = newInner;
		changeSelectorStyle(selectAreaMonth, formSelectMonth, selectBtnMonth, selectMonth, selectPlaceholderMonth);
		event.target.classList.add('active');
		selectBtnMonth.classList.remove('active');
	});

	selectHeaderYear.addEventListener('click', () => {
		toggleSelect(selectBtnYear, selectAreaYear)
	});

	selectAreaYear.addEventListener('click', (event) => {
		let newInner = event.target.innerText;
		selectPlaceholderYear.innerText = newInner;
		changeSelectorStyle(selectAreaYear, formSelectYear, selectBtnYear, selectYear, selectPlaceholderYear);
		event.target.classList.add('active');
		selectBtnYear.classList.remove('active');
	});

	document.querySelector('#btn-third-back').addEventListener('click', () => {
		modalThirdWindow.classList.add('non-active');
		modalSecondWindow.classList.remove('non-active');
	});

	document.querySelector('#btn-third-complete').addEventListener('click', ThirdWindowHandler);

	/* Modal donation window. Part 4*/

	document.querySelector('#btn-fourth-close').addEventListener('click', closePayModalWindow);

	/* Close Modal Window */

	function closePayModalWindow () {
		document.body.style.overflow = "auto";
		document.body.style.height = "auto";

		const children = modalWindow.children;
		children[0].parentNode.remove(children);

		if(donatBlockAmount) donatBlockAmount.value = '';
	}

	modalWindow.addEventListener('click', (event) => {
		if (event.target.className === 'modal-window') {
			closePayModalWindow();
		}
	});

	closeIcons.forEach(icon => {
		icon.addEventListener('click', closePayModalWindow)
	});
}