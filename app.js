const game = () => {

// Colour Selectors
const btn = document.querySelectorAll(".button");

const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const readout = document.getElementById("readout");

const beginBtn = document.querySelector('.begin');

// Game array and score button

let playerScore = 0;
const gameArray = [];

// Click events

function beClicked(colour){
    readout.innerHTML = (`${colour.id} button is clicked`);
    colour.classList.add(`light-${colour.id}`);
    colour.classList.remove(`${colour.id}`);
    setTimeout(() => {
        colour.classList.add(`${colour.id}`);
        colour.classList.remove(`light-${colour.id}`);
    },1000)
};
    
red.addEventListener('click',()=>{
    beClicked(red);
}); 

yellow.addEventListener('click',()=>{
    beClicked(yellow);
}); 

green.addEventListener('click',()=>{
    beClicked(green);
}); 

blue.addEventListener('click',()=>{
    beClicked(blue);
}); 


// For loop from 0 to 20 - begin by intro button, then start functions. 


// Random Number Generator and push to array

    function computerSelection(){
        const computerOptions = ["red", "blue", "yellow" , "green"];
        const computerNumber = Math.floor(Math.random() * 4)
        const computerChoice = computerOptions[computerNumber]; 
        gameArray.push(computerChoice);
    };


// for loop to iterate through game Array automatically

    const iterateThroughArray = () => {
        for(let i = 0 ; i < gameArray.length; i++){

            var toBeChecked = gameArray[i];

            const checkColour = (entry) => {
                if(entry === "blue"){
                    blue.click();
                }
                else if(entry === "red"){
                    red.click();
                }
                else if(entry === "yellow"){
                    yellow.click();
                }
                else if(entry === "green"){
                    green.click();
                }
                else{
                    console.log("Ya done messed up son");
                }
            };
            
            setTimeout(checkColour(toBeChecked),2000);
        };
    };

    // Game Order

    function startGame(){
        computerSelection();
        iterateThroughArray();
        console.log(gameArray);
    };
    
    beginBtn.addEventListener('click', startGame);
};
game();