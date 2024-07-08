function timer() {
	const endDate = new Date('June 29, 2024, 17:56:30')

	const daysElement = document.querySelector('#days')
	const hoursElement = document.querySelector('#hours')
	const minutesElement = document.querySelector('#minutes')
	const secondsElement = document.querySelector('#seconds')

	let timerInterval

	function updateTimer() {
		const now = new Date()

		let timeDifference = endDate - now
		if (timeDifference < 0) {
			daysElement.innerHTML = '00'
			hoursElement.innerHTML = '00'
			minutesElement.innerHTML = '00'
			secondsElement.innerHTML = '00'
			clearInterval(timerInterval)
			return
		}
		let days = Math.floor(timeDifference / 1000 / 3600 / 24)
		timeDifference -= days * 1000 * 3600 * 24
		const hours = Math.floor(timeDifference / 1000 / 3600)
		timeDifference -= hours * 1000 * 3600
		const minutes = Math.floor(timeDifference / 1000 / 60)
		timeDifference -= minutes * 1000 * 60
		const seconds = Math.floor(timeDifference / 1000)

		daysElement.innerHTML = days.toString().padStart(2, '0')
		hoursElement.innerHTML = hours.toString().padStart(2, '0')
		minutesElement.innerHTML = minutes.toString().padStart(2, '0')
		secondsElement.innerHTML = seconds.toString().padStart(2, '0')
	}
	updateTimer()
	timerInterval = setInterval(updateTimer, 1000)
}

export default timer
