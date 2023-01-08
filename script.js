const buttons = document.querySelectorAll('.rating-button')
const submit = document.querySelector('.submit-btn')
const ratedContent = document.querySelector('.selected-stars')
const rateUsCard = document.querySelector('.rate-us-container')
const thankYouCard = document.querySelector('.thank-you-container')
const error = document.querySelector('.error')

const rateUs = e => {
	ratedContent.textContent = e.target.textContent
}

const showThankYouCard = () => {
	if (ratedContent.textContent !== '') {
		rateUsCard.classList.add('hide')
		thankYouCard.classList.remove('hide')
	}else{
        error.textContent = 'Please select a rating'
    }
}

buttons.forEach(btn => btn.addEventListener('click', rateUs))

submit.addEventListener('click', showThankYouCard)
