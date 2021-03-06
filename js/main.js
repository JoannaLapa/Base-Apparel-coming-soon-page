const email = document.querySelector('.form__input')
const btn = document.querySelector('.form__btn')
const msg = document.querySelector('.form__msg')
const errorIcon = document.querySelector('.form__error-icon')
const subscribeForm = document.querySelector('.form')

const makeIfCorrect = () => {
	errorIcon.classList.remove('activate')
	msg.classList.add('msg-styles')
	msg.textContent = 'Your email was added successfully!'
}

makeIfNotCorrect = () => {
	subscribeForm.classList.add('border-pink')
	errorIcon.classList.add('activate')
	msg.classList.add('msg-styles')
	msg.textContent = 'Please provide a valid email'
}

const checkIfCorrect = input => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (re.test(input.value)) {
		makeIfCorrect()
	} else {
		makeIfNotCorrect()
	}
}

btn.addEventListener('click', e => {
	e.preventDefault()
	checkIfCorrect(email)
})
