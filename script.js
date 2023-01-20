const distance = document.querySelector('#distance')
const fuel = document.querySelector('#fuel')
const firstFuelPrice = document.querySelector('#firstFuelPrice')
const countBtn = document.querySelector('.count')
const consumption = document.querySelector('.consumption')
const consumptionInfo = document.querySelector('.consumption-info')
const moneyConsumption = document.querySelector('.money-consumption')
const moneyConsumptionInfo = document.querySelector('.money-consumption-info')

const travelDistance = document.querySelector('#travelDistance')
const averageFuelConsumption = document.querySelector('#averageFuelConsumption')
const fuelPrice = document.querySelector('#fuelPrice')
const people = document.querySelector('#people')
const weight = document.querySelector('#weight')
const countPriceBtn = document.querySelector('.count-price')
const priceInfo = document.querySelector('.price-info')
const price = document.querySelector('.price')
const fullPriceInfo = document.querySelector('.full-price-info')
const fullPrice = document.querySelector('.full-price')
const personPriceInfo = document.querySelector('.person-price-info')
const personPrice = document.querySelector('.person-price')

const toggleSwitch = document.querySelector('.theme')

toggleSwitch.addEventListener('click', () => {
	const currentTheme = localStorage.getItem('theme')

	const typeTheme = currentTheme === 'dark' ? 'light' : 'dark'
	document.body.setAttribute('data-theme', typeTheme)

	localStorage.setItem('theme', typeTheme)
})

const showConsumption = () => {
	if (distance.value == '' || fuel.value == '') {
		alert('Uzupełnij wszystkie pola!')
	} else {
		countConsumption()
	}
}

const countConsumption = () => {
	const averageConsumption = (fuel.value / distance.value) * 100
	consumptionInfo.style.display = 'block'
	consumption.textContent = averageConsumption.toFixed(1) + ' l/100km'

	if (firstFuelPrice.value != '') {
		const averageMoneyConsumption = averageConsumption * firstFuelPrice.value
		moneyConsumptionInfo.style.display = 'block'
		moneyConsumption.textContent = averageMoneyConsumption.toFixed(2) + ' zł/100km'
	}
}

const showPrice = () => {
	if (
		travelDistance.value == '' ||
		averageFuelConsumption.value == '' ||
		fuelPrice.value == '' ||
		people.value == '' ||
		weight.value == ''
	) {
		alert('Uzupełnij wszystkie pola!')
	} else {
		countPrice()
	}
}

const countPrice = () => {
	const travelPrice = ((travelDistance.value * averageFuelConsumption.value) / 100) * fuelPrice.value
	const additionalConsumption = (weight.value * people.value * 0.6) / 100
	const additionalTravelPrice = travelPrice + additionalConsumption * fuelPrice.value
	const perPersonPrice = additionalTravelPrice / people.value
	priceInfo.style.display = 'block'
	price.textContent = travelPrice.toFixed(2) + ' zł'
	fullPriceInfo.style.display = 'block'
	fullPrice.textContent = additionalTravelPrice.toFixed(2) + ' zł'
	personPriceInfo.style.display = 'block'
	personPrice.textContent = perPersonPrice.toFixed(2) + ' zł'
}

countBtn.addEventListener('click', showConsumption)
countPriceBtn.addEventListener('click', showPrice)
