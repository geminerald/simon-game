// Colour Selectors
const btn = document.getElementsByTagName("button");

const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const readout = document.getElementById("readout");

// Arrays

const gameArray = [];
const userArray = [];

// Change Colour Function

function beClicked(colour){
    readout.innerHTML = (`${colour} button is clicked`);
};

red.addEventListener('click',()=>{
    beClicked("red");
}); 

yellow.addEventListener('click',()=>{
    beClicked("yellow");
}); 

green.addEventListener('click',()=>{
    beClicked("green");
}); 

blue.addEventListener('click',()=>{
    beClicked("blue");
}); 

// Random Number Generator and push to array

