const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result =0
let currentTime = timeLeft.textContent
function randomSquare(){
	square.forEach( sq=> { sq.classList.remove('mole')})
	let pos = Math.floor(Math.random()*9)
	console.log(pos)
	let randomPos = square[pos]
	randomPos.classList.add('mole')
	hitPosition = randomPos.id
}
square.forEach(s => {
	s.addEventListener('click', ()=> {
		if(s.id===hitPosition){
			result+=1
			score.textContent = result
		}
	})
})

function moveMole(){
	let timerId = setInterval(randomSquare, 1000)
}
moveMole()

function countDown(){
	currentTime--
	timeLeft.textContent = currentTime
	if(currentTime==0)alert('Jig is up Bitches!!! Your score = '+ result)
}
let timerId = setInterval(countDown, 1000)
