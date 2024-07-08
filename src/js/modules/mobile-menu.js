function mobileMenu() {
	const menuOpnBtn = document.querySelector('#hamburger')
	const menuClsBtn = document.querySelector('#closeBtn')
	const menuList = document.querySelector('.mobile-menu')
	const menuFade = document.querySelector('.mobile-menu-fade')

	function openMobileMenu() {
		menuList.classList.add('mobile-menu_open')
		document.body.classList.add('no-scroll')
		menuFade.classList.add('mobile-menu-fade_open')
	}

	function closeMobileMenu() {
		menuList.classList.remove('mobile-menu_open')
		document.body.classList.remove('no-scroll')
		menuFade.classList.remove('mobile-menu-fade_open')
	}

	menuOpnBtn.onclick = openMobileMenu
	menuFade.onclick = closeMobileMenu
	menuClsBtn.onclick = closeMobileMenu
}
export default mobileMenu
