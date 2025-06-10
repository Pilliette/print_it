// Tableau d'images et de textes

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches, des images et des textes

const left = document.getElementById(`arrow_left`)
const right = document.getElementById(`arrow_right`)

function updateSlide() {
	const images = document.querySelector(".banner-img")
	const texts = document.querySelector(".banner__texte p")

	images.src = "./assets/images/slideshow/" + slides[changeDots].image
	texts.innerHTML = slides[changeDots].tagLine
}

// Fonctionnement de la flèche gauche

left.addEventListener(`click`, () => {
	console.log("Flèche gauche fonctionnelle")
	
	slidesTab[changeDots].classList.remove("dot_selected")

	changeDots--

	if (changeDots < 0) {
		changeDots = slidesTab.length - 1
	}
	slidesTab[changeDots].classList.add("dot_selected")

	updateSlide()
})

// Fonctionnement de la flèche droite

right.addEventListener(`click`, () => {
	console.log("Flèche droite fonctionnelle")

	slidesTab[changeDots].classList.remove("dot_selected")

	changeDots++

	if (changeDots >= slidesTab.length) {
		changeDots = 0
	}
	slidesTab[changeDots].classList.add("dot_selected")

	updateSlide()
})

// Initialisation des dots

const slidesTab = []
const parentDots = document.querySelector(".dots")
let changeDots = 0

// Création des dots

slides.forEach(image => {
	const divDot = document.createElement("div")
	divDot.classList.add("dot")
	parentDots.appendChild(divDot)

	slidesTab.push(divDot)
})

slidesTab[changeDots].classList.add("dot_selected")

// Défilement infini

setInterval(() => {
	slidesTab[changeDots].classList.remove("dot_selected")

	changeDots++

	if (changeDots >= slidesTab.length) {
		changeDots = 0
	}
	slidesTab[changeDots].classList.add("dot_selected")

	updateSlide()
}, 2000)

// Initialisation des images et des textes

updateSlide()
