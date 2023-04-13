const nav = document.querySelector('.nav-items')
const toggleMenu = document.querySelector('#toggle-btn')

function onToggle() {
	nav.classList.toggle('-right-100')
	toggleMenu.src = nav.classList.contains('-right-100')
		? './images/menu.svg'
		: './images/close.svg'
	document.querySelectorAll('.nav-items  a').forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.add('-right-100')
			toggleMenu.src = './images/menu.svg'
		})
	})
}

const sr = ScrollReveal({
	distance: '80px',
	origin: 'left',
	duration: 2500,
	opacity: 0,
	delay: 400,
})
sr.reveal('.home-left')
sr.reveal('.home-right', { delay: 800, origin: 'right' })
sr.reveal('.nav-items', { delay: 100, origin: 'top' })
sr.reveal('#logo', { delay: 100, origin: 'bottom' })
