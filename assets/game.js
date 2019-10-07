const game = () => {

    // Colour Selectors
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const purple = document.getElementById("purple");
    const orange = document.getElementById("orange");

    const beginBtn = document.getElementById('begin');
    const beginContainer = document.getElementById("begin-container");
    const readout = document.getElementById("readout");
    const tutBtn = document.getElementById("tutorial-button");
    const difficultySelector = document.getElementById("difficulty");

    let computerOptions = [];

    // Game array and score button

    let gameArray = [];
    let playerArray = [];
    let playerScore = 0;

    readout.innerHTML = playerScore;

    function setDifficulty(level) {
        console.log("running SEt difficulty");
        console.log(level);
        if (level == 2) {
            computerOptions.push("red", "blue");
            purple.classList.add("disappeared");
            yellow.classList.add("disappeared");
            green.classList.add("disappeared");
            orange.classList.add("disappeared");
        };
        if (level == 3) {
            computerOptions.push("red", "blue", "yellow");
            purple.classList.add("disappeared");
            green.classList.add("disappeared");
            orange.classList.add("disappeared");
        };
        if (level == 4) {
            computerOptions.push("red", "blue", "yellow", "green");
            purple.classList.add("disappeared");
            orange.classList.add("disappeared");
        };
        if (level == 5) {
            computerOptions.push("red", "blue", "yellow", "green", "orange");
            purple.classList.add("disappeared");
        }
        if (level == 6) {
            computerOptions.push("red", "blue", "yellow", "green", "purple", "orange");
        }

/**

        switch (level) {
            case 2:
                console.log("This is 2");
                computerOptions.push("red", "blue");
                purple.classList.add("disappeared");
                yellow.classList.add("disappeared");
                green.classList.add("disappeared");
                orange.classList.add("disappeared");
                break;

            case 3:
                computerOptions.push("red", "blue", "yellow");
                purple.classList.add("disappeared");
                green.classList.add("disappeared");
                orange.classList.add("disappeared");
                break;

            case 4:
                computerOptions.push("red", "blue", "yellow", "green");
                purple.classList.add("disappeared");
                orange.classList.add("disappeared");

                break;

            case 5:
                computerOptions.push("red", "blue", "yellow", "green", "purple");
                computerOptions.push("orange");
                purple.classList.add("disappeared");
                break;

            case 6:
                computerOptions.push("red", "blue", "yellow", "green", "purple", "orange");
                break;
        }; */

        console.log("finished set difficulty and the result is" + level);
    };


    // Click events

    function beClicked(colour) {
        colour.classList.add(`light-${colour.id}`);
        colour.classList.remove(`${colour.id}`);

        const sound = new Audio(`./assets/sounds/${colour.id}.mp3`);
        sound.play();
        sound.volume = 0.2;
        setTimeout(() => {
            colour.classList.add(`${colour.id}`);
            colour.classList.remove(`light-${colour.id}`);
        }, 1000)
    };
    // Main Game Function:

    $(".colour").click(function () {
        beClicked(this);
        id = $(this).attr("id");
        console.log(id);
        console.log(`this is ${this}`);
        console.log(this.id);
        playerArray.push(id);
        console.log(`the player array is ${playerArray}`);
        if (!arrayValidator()) {
            alert("WHoops!");
            gameArray = [];
            playerArray = [];
            playerScore = 0;
            computerSelection();
            iterateThroughArray();
            return
        }
        if (playerArray.length == gameArray.length) {
            console.log("computers turn");
            playerScore++
            computerSelection();
            iterateThroughArray();
            playerArray = [];
            console.log(`the player array is ${playerArray}`);
        }
    });


    // Random Number Generator and push to array

    function computerSelection() {
        console.log(computerOptions);
        const computerNumber = Math.floor(Math.random() * computerOptions.length)
        const computerChoice = computerOptions[computerNumber];
        gameArray.push(computerChoice);
    };

    //  iterate through Array automatically

    function checkColour(array, index) {

        let entry = array[index];
        /**
                switch (entry) {
                    case "blue":
                        beclicked(blue);
                        break
                    case "red":
                        beclicked(red);
                    case "orange":
                        beclicked(orange);
                        break
                    case "yellow":
                        beclicked(yellow);
                        break
                    case "green":
                        beclicked(green);
                        break
                    case "purple":
                        beclicked(purple);
                        break
                }*/


        if (entry === "blue") {
            beClicked(blue);
        } else if (entry === "red") {
            beClicked(red);

        } else if (entry === "yellow") {
            beClicked(yellow);

        } else if (entry === "green") {
            beClicked(green);

        } else if (entry === "purple") {
            beClicked(purple);
        } else {
            console.log("Ya done messed up son");
        }

    };

    // Iterate through array
    const iterateThroughArray = () => {
        let i = 0;
        let iteration =
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
            };
        };
        return true;
    };
    // Game Order

    // Start game

    beginBtn.addEventListener('click', () => {
        let difficultyLevel = difficultySelector.value;
        console.log(difficultyLevel);
        setDifficulty(difficultyLevel);
        beginContainer.classList.add('fadeOut');
        computerSelection();
        iterateThroughArray();
        console.log(`I am running startGame and the game array is ${gameArray}`)
    });
    tutBtn.addEventListener('click', () => {
        document.querySelector('.tutorial-container').classList.add('fadeOut');


    })
};
game();