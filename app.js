const game = () => {

// Colour Selectors
const btn = document.querySelectorAll(".button");

const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const readout = document.getElementById("readout");

const iterateBtn = document.querySelector('.iterate');
const beginBtn = document.querySelector('.begin');

let playerScore = 0;

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

beginBtn.addEventListener('click', () =>{
    beClicked(beginBtn);
})

iterateBtn.addEventListener('click', () => { iterateThroughArray})

// For loop from 0 to 20 - begin by intro button, then start functions. 
const gameArray = [];

for (j = 0; j < 20; j++) {

// Random Number Generator and push to array

    const computerSelection = () => {
        const computerOptions = ["red", "blue", "yellow" , "green"];
        const computerNumber = Math.floor(Math.random() * 4)
        const computerChoice = computerOptions[computerNumber]; 
        gameArray.push(computerChoice);
    };

    computerSelection();
    console.log(gameArray);
    
};

// for loop to iterate through game Array automatically

    const iterateThroughArray = () => {
        for(let i = 0 ; i < gameArray.length; i++){
        
                
            if(gameArray[i] === "blue"){
                blue.click();
            }
            else if(gameArray[i] === "red"){
                red.click();
            }
            else if(gameArray[i] === "yellow"){
                yellow.click();
            }
            else{
                green.click();
            }    
        };
    };
};

game();