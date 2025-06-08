// Tableau d'images

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

// Sélection des flèches

const left = document.getElementById(`arrow_left`)
const right = document.getElementById(`arrow_right`)

// Fonctionnement de la flèche gauche

left.addEventListener(`click`, () => {
	console.log("Flèche gauche fonctionnelle")
	
	slidesDots[changeDots].classList.remove("dot_selected")

	changeDots--

	if (changeDots < 0) {
		changeDots = slidesDots.length - 1
	}
	slidesDots[changeDots].classList.add("dot_selected")
})

// Fonctionnement de la flèche droite

right.addEventListener(`click`, () => {
	console.log("Flèche droite fonctionnelle")

	slidesDots[changeDots].classList.remove("dot_selected")

	changeDots++

	if (changeDots >= slidesDots.length) {
		changeDots = 0
	}
	slidesDots[changeDots].classList.add("dot_selected")
})

// Initialisation des dots

const slidesDots = []
const parentDots = document.querySelector(".dots")
let changeDots = 0

// Création des dots

slides.forEach(image => {
	const divDot = document.createElement("div")
	divDot.classList.add("dot")
	parentDots.appendChild(divDot)

	slidesDots.push(divDot)
})

slidesDots[changeDots].classList.add("dot_selected")