document.addEventListener('DOMContentLoaded', ()=>{
	const cardArray = [
		{name: 'birthday-cake' ,img:"images/birthday-cake.png"},
		{name: 'champagne-glass', img:"images/champagne-glass.png"},
		{name: 'coffee-cup', img:"images/coffee-cup.png"},
		{name: 'delivery-man', img:"images/delivery-man.png"},
		{name: 'dish', img:"images/dish.png"},
		{name: 'fork', img:"images/fork.png"},
		{name: 'birthday-cake' ,img:"images/birthday-cake.png"},
                {name: 'champagne-glass', img:"images/champagne-glass.png"},
                {name: 'coffee-cup', img:"images/coffee-cup.png"},
                {name: 'delivery-man', img:"images/delivery-man.png"},
                {name: 'dish', img:"images/dish.png"},
                {name: 'fork', img:"images/fork.png"}
	];
	cardArray.sort(()=>{0.5-Math.random()});
	//Dont know what this means
	const grid =document.querySelector(".grid");
	const resultDisplay= document.querySelector("#result");

	var cardsChosen = [];
	var cardsChosenId =[];
	var cardsWon=[];

	//create board
	function createBoard(){
		for(let i=0;i<cardArray.length;i++){
			var card = document.createElement('img');
			card.setAttribute('src', 'images/broccoli.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}
	//check for matches
	function checkForMatch(){
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];

		if(optionOneId==optionTwoId){
			cards[optionOneId].setAttribute('src','images/broccoli.png');
			cards[optionTwoId].setAttribute('src','images/broccoli.png');
			alert('Stop clicking on same card dumbass!!');
		}else if(cardsChosen[0]==cardsChosen[1]){
			alert('You found a match');
			cards[optionOneId].setAttribute('src', 'images/blank.png');
                        cards[optionTwoId].setAttribute('src', 'images/blank.png');
			cards[optionOneId].removeEventListener('click', flipCard);
			cards[optionTwoId].removeEventListener('click', flipCard);
			cardsWon.push(cardsChosen);
		}else{
			cards[optionOneId].setAttribute('src','images/broccoli.png');
                        cards[optionTwoId].setAttribute('src','images/broccoli.png');
                        alert('Sorry, Try again');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent = 'Congratulations, you have found them all';
		}
	}

	//flip card function
	function flipCard(){
		var cardId = this.getAttribute("data-id");
		cardsChosenId.push(cardId);
		cardsChosen.push(cardArray[cardId].name);
		this.setAttribute('src', cardArray[cardId].img);
		if(cardsChosen.length==2){setTimeout(checkForMatch,500)}
	}
	createBoard();
})
