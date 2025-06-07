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

// Flèches directionnelles à l'écoute au clic

const left = document.getElementById(`arrow_left`)
const right = document.getElementById(`arrow_right`)

left.addEventListener(`click`, () => {
	console.log("Flèche gauche fonctionnelle")
})

right.addEventListener(`click`, () => {
	console.log("Flèche droite fonctionnelle")
})

// Création des bullet points

slides.forEach(image => {
	const divDot = document.createElement("div")
	divDot.classList.add("dot", "dot_selected")

	const parentDots = document.querySelector(".dots")
	parentDots.appendChild(divDot)

	
})
