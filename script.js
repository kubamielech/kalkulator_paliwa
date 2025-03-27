const distance = document.querySelector('#distance')
const fuel = document.querySelector('#fuel')
const firstFuelPrice = document.querySelector('#firstFuelPrice')
const countBtn = document.querySelector('.count')
const consumption = document.querySelector('.consumption')
const consumptionInfo = document.querySelector('.consumption-info')
const moneyConsumption = document.querySelector('.money-consumption')
const moneyConsumptionInfo = document.querySelector('.money-consumption-info')
const answerOne = document.querySelector('.answer-one')

const travelDistance = document.querySelector('#travelDistance')
const averageFuelConsumption = document.querySelector('#averageFuelConsumption')
const fuelPrice = document.querySelector('#fuelPrice')
const people = document.querySelector('#people')
const countPriceBtn = document.querySelector('.count-price')
const priceInfo = document.querySelector('.price-info')
const price = document.querySelector('.price')
const personPriceInfo = document.querySelector('.person-price-info')
const personPrice = document.querySelector('.person-price')
const answerTwo = document.querySelector('.answer-two')

const toggleSwitch = document.querySelector('.theme')

document.querySelectorAll('.fuel-price-btn').forEach(button => {
    button.addEventListener('click', () => {
        const price = button.getAttribute('data-price');
        document.getElementById('fuelPrice').value = price;
    });
});

toggleSwitch.addEventListener('click', () => {
	const currentTheme = localStorage.getItem('theme')

	const typeTheme = currentTheme === 'dark' ? 'light' : 'dark'
	document.body.setAttribute('data-theme', typeTheme)

	localStorage.setItem('theme', typeTheme)
})

const showConsumption = () => {
	if (distance.value == '' || fuel.value == '') {
		consumptionInfo.style.display = 'none'
		moneyConsumptionInfo.style.display = 'none'
		answerOne.style.display = "block"
		alert('Uzupełnij wymagane pola!')
	} else {
		countConsumption()
	}
}

const countConsumption = () => {
	const averageConsumption = (fuel.value / distance.value) * 100
	answerOne.style.display = "none"
	consumptionInfo.style.display = 'block'
	consumption.textContent = averageConsumption.toFixed(1) + ' l/100km'

	if (firstFuelPrice.value != '') {
		const averageMoneyConsumption = averageConsumption * firstFuelPrice.value
		moneyConsumptionInfo.style.display = 'block'
		moneyConsumption.textContent = averageMoneyConsumption.toFixed(2) + ' zł/100km'
	} else {
		moneyConsumptionInfo.style.display = 'none'
	}
}

const showPrice = () => {
	if (
		travelDistance.value == '' ||
		averageFuelConsumption.value == '' ||
		fuelPrice.value == '' ||
		people.value == ''
	) {
		priceInfo.style.display = 'none'
		personPriceInfo.style.display = 'none'
		answerTwo.style.display = "block"
		alert('Uzupełnij wszystkie pola!')
	} else {
		countPrice()
	}
}

const countPrice = () => {
	const travelPrice = ((travelDistance.value * averageFuelConsumption.value) / 100) * fuelPrice.value
	const perPersonPrice = travelPrice / people.value
	answerTwo.style.display = "none"
	priceInfo.style.display = 'block'
	price.textContent = travelPrice.toFixed(2) + ' zł'
	personPriceInfo.style.display = 'block'
	personPrice.textContent = perPersonPrice.toFixed(2) + ' zł'
}

countBtn.addEventListener('click', showConsumption)
countPriceBtn.addEventListener('click', showPrice)
