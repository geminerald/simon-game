const game = () => {

    // Colour Selectors
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const myTurn = document.getElementById('my-turn');

    const beginBtn = document.getElementById('begin');

    // Game array and score button

    let gameArray = [];
    let playerArray = [];
    let playerScore = 0;

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


    $(".colour").click(function () {

        id = $(this).attr("id");
        console.log(id);
        playerArray.push(id);
        console.log(`the player array is ${playerArray}`);
        if (!arrayValidator()){
            alert("WHoops!");
            gameArray = [];
            computerSelection();
            iterateThroughArray();
        }
        if (playerArray.length == gameArray.length) {
            console.log("computers turn");
            computerSelection();
            iterateThroughArray();
            playerArray = [];
            console.log(`the player array is ${playerArray}`);
        }
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

        if (entry === "blue") {
            beClicked(blue);
        } else if (entry === "red") {
            beClicked(red);
        } else if (entry === "yellow") {
            beClicked(yellow);
        } else if (entry === "green") {
            beClicked(green);
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


    // check if player array matches with computer array

    function arrayValidator() {
        for (i = 0; i < playerArray.length; i++) {
            if (playerArray[i] != gameArray[i]) {
                return false;
            }
        }
        return true;
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
};
game();