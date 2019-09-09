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

beginBtn.addEventListener('click', () =>{
    beClicked(beginBtn);
})




// For loop from 0 to 20 - begin by intro button, then start functions. 
    const gameArray = ["blue", "red"];


    /*for (j = 0; j < 20; j++) {

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

*/

// for loop to iterate through game Array automatically

const iterateThroughArray = () => {

    for(var i = 0 ; i < gameArray.length; i++){
        
            console.log(gameArray[i]);
            //console.log(`we are at ${gameArray[i]} and the array is ${gameArray.length} long`);
            //document.querySelector(`${gameArray[i]}`).click();
            if(gameArray[i] === "blue"){
                blue.click();
            }else if(gameArray[i] === "red"){
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

iterateBtn.addEventListener('click', iterateThroughArray);

};


game();