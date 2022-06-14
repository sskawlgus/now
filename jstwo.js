const headerTag = document.querySelector("header");

document.addEventListener("scroll", function(){

	const pixels = window.scrollY;

	if(pixels > headerTag.getBoundingClientRect().height){
		headerTag.classList.add("scrolled");
	}else{
		headerTag.classList.remove("scrolled")
	}
})

const leftButton = document.querySelector("div.btn div.up");
const rightButton = document.querySelector("div.btn div.down");

const productImg = document.querySelector("div.picture img");

let currentNumber = 1;

leftButton.addEventListener("click",function(){
	console.log(currentNumber);

	currentNumber--;
	if(currentNumber < 1){
		currentNumber = 3;
	}

	productImg.src = `product${currentNumber}.png`;

});

rightButton.addEventListener("click",function(){
	console.log(currentNumber);

	currentNumber++;
	if(currentNumber > 3){
		currentNumber = 1;
	}
	productImg.src = `product${currentNumber}.png`;

});


