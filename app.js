const game = () => {

    // Colour Selectors
    const btn = document.querySelectorAll(".colour");

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

    function beClicked(colour) {
        readout.innerHTML = (`${colour.id} button is clicked`);
        colour.classList.add(`light-${colour.id}`);
        colour.classList.remove(`${colour.id}`);
        setTimeout(() => {
            colour.classList.add(`${colour.id}`);
            colour.classList.remove(`light-${colour.id}`);
        }, 1000)
    };

    // Come back to this and see if can get it to work - much more efficient

    /*
    btn.addEventListener('click',function(){
        beClicked(this.id);
    })

    */

    red.addEventListener('click', () => {
        beClicked(red);
    });

    yellow.addEventListener('click', () => {
        beClicked(yellow);
    });

    green.addEventListener('click', () => {
        beClicked(green);
    });

    blue.addEventListener('click', () => {
        beClicked(blue);
    });
    // Random Number Generator and push to array

    function computerSelection() {
        const computerOptions = ["red", "blue", "yellow", "green"];
        const computerNumber = Math.floor(Math.random() * computerOptions.length)
        const computerChoice = computerOptions[computerNumber];
        gameArray.push(computerChoice);
    };

    // for loop to iterate through game Array automatically

    function checkColour(array, index) {
        let entry = array[index];
        //function checkColour(entry){
        if (entry === "blue") {
            blue.click();
        } else if (entry === "red") {
            red.click();
        } else if (entry === "yellow") {
            yellow.click();
        } else if (entry === "green") {
            green.click();
        } else {
            console.log("Ya done messed up son");
        }
    };

    // Iterate through array
    const iterateThroughArray = () => {
        var i = 0;
        var iteration =
            setInterval(function () {
                if (i === gameArray.length) {
                    clearInterval(iteration);
                    console.log("for the love of God - stop!");
                } else {
                    console.log(`the index is ${i}`);
                    console.log(`the colour is ${gameArray[i]}`);
                    checkColour(gameArray, i);
                    i++
                };
            }, 1500);
    };


    // User Entry - match to array - get gameArray[i] - user has to select correct option - if so then gameArray[i] ++ , else Error Fail! - restart
    const playerTurn = () => {
        for (j = 0; j < gameArray.length; j++) {
            let playerIndex = gameArray[j];
            if (playerIndex.beClicked()) {

                console.log(gameArray);
            } else {
                alert("Fail!");
            }
        };
    };


    // Game Order

    function startGame() {
        beginBtn.classList.add('fadeOut');
        computerSelection();
        iterateThroughArray();
        console.log(gameArray);
    };



    beginBtn.addEventListener('click', startGame);
};
game();