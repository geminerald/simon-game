const game = () => {

// Colour Selectors
const btn = document.querySelectorAll(".button");

const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const readout = document.getElementById("readout");

const iterateBtn = document.querySelector('.iterate');

const gameArray = [1,2,3,4];


function beClicked(colour){
    readout.innerHTML = (`${colour.id} button is clicked`);
       
};
    

red.addEventListener('click',()=>{
    beClicked(red);
    red.classList.add('light-red');
    red.classList.remove('red');
}); 

yellow.addEventListener('click',()=>{
    beClicked(yellow);
    yellow.classList.add('light-yellow');
    yellow.classList.remove('yellow');
}); 

green.addEventListener('click',()=>{
    beClicked(green);
    green.classList.add('light-green');
    green.classList.remove('green');
}); 

blue.addEventListener('click',()=>{
    beClicked(blue);
    blue.classList.add('light-blue');
    blue.classList.remove('blue')
}); 

// Random Number Generator and push to array

const computerSelection = () => {
    const computerOptions = ["red", "blue", "yellow" , "green"];
    const computerNumber = Math.floor(Math.random() * 4)
    const computerChoice = computerOptions[computerNumber]; 
    gameArray.push(computerChoice);
    console.log(computerChoice);
};

computerSelection();
console.log(gameArray); 

// for loop to iterate through game Array

const iterateThroughArray = () => {

    for(i = 0 ; i < gameArray.length; i++){
        console.log(gameArray[i]);
    };
};

iterateBtn.addEventListener('click', iterateThroughArray);

};

game();