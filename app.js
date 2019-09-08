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
    readout.innerHTML = (`${colour.id} button is clicked`);

    var color = getComputedStyle(colour).backgroundColor;
    
    var rgbToHex = function (rgb) { 
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };
    
    var fullColorHex = function(r,g,b) {   
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red+green+blue;
      };

     // colour.style.backgroundColor = fullColorHex(color) + 500;
      var testColour = (250, 150, 05);
      console.log(fullColorHex(testColour));

   // colour.style.backgroundColor = `${getComputedStyle(colour).backgroundColor} + 100`



    //console.log(getComputedStyle(colour).backgroundColor);
   // console.log(colour.id);
    
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

// Random Number Generator and push to array






