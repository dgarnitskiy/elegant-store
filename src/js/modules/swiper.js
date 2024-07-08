import Swiper from 'swiper/bundle'

function swiper() {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		// Optional parameters
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},

		breakpoints: {
			821: {
				spaceBetween: 24,
			},
		},
		// Navigation arrows
		// navigation: {
		//   nextEl: '.swiper-button-next',
		//   prevEl: '.swiper-button-prev',
		// },
	})
}

export default swiper
