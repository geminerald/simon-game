const game = () => {

    // Colour Selectors
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const myTurn = document.getElementById('my-turn');

    const beginBtn = document.getElementById('begin');

    // Game array and score button

    const gameArray = [];
    const playerArray = [];
    let playerScore = playerArray.length;

    // Click events

    function beClicked(colour) {
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

    //  iterate through Array automatically

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
                    console.log(`running iterateThroughArray and the index is ${i} and the game array is ${gameArray}`);
                    checkColour(gameArray, i);
                    i++
                };
            }, 1500);
    };

    // User Entry - match to array - get gameArray[i] - user has to select correct option - if so then gameArray[i] ++ , else Error Fail! - restart
    const playerTurn = () => {
        if (playerArray.length < gameArray.length) {
            console.log("running playerTurn");

            blue.addEventListener('click', (() => {
                playerArray.push("blue")
            }));
            red.addEventListener('click', (() => {
                playerArray.push("red")
            }));
            yellow.addEventListener('click', (() => {
                playerArray.push("yellow")
            }));
            green.addEventListener('click', (() => {
                playerArray.push("green")
            }));
        } else {
            computerSelection();
            iterateThroughArray();
            console.log("This is the second iteration");
            
            console.log(playerArray);
        }
    };

    // Game Order

    // Start game

    function startGame() {
        beginBtn.classList.add('fadeOut');
        computerSelection();
        iterateThroughArray();
        console.log(`I am running startGame and the game array is ${gameArray}`)
    };

    beginBtn.addEventListener('click', startGame);
    myTurn.addEventListener('click', playerTurn);
};
game();