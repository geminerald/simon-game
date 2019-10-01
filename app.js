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

    const computerOptions = ["red", "blue", "yellow", "green"];

    // Game array and score button

    let gameArray = [];
    let playerArray = [];
    let playerScore = 0;
    let difficultyLevel = 4;

    readout.innerHTML = playerScore;

    function setDifficulty() {

        switch (difficultyLevel) {
            case 2:
                computerOptions.splice(2, 2);
                purple.classList.add(".disappeared");
                yellow.classList.add(".disappeared");
                green.classList.add(".disappeared");
                orange.classList.add(".disappeared");
                break;

            case 3:
                computerOptions.pop();
                purple.classList.add(".disappeared");
                green.classList.add(".disappeared");
                orange.classList.add("disappeared");
                break;

            case 4:
                purple.classList.add(".disappeared");
                orange.classList.add("disappeared");

                break;

            case 5:
                computerOptions.push("orange");
                purple.classList.add(".disappeared");
                break;

            case 6:
                computerOptions.push("yellow", "green", "orange", "purple");
                break;
        }

    }
    // Sounds
    /*
            "https://www.pacdv.com/sounds/interface_sound_effects/beep-1.wav"
            "https://www.pacdv.com/sounds/interface_sound_effects/beep-2.wav"
            "https://www.pacdv.com/sounds/interface_sound_effects/beep-3.wav"
            "https://www.pacdv.com/sounds/interface_sound_effects/beep-4.wav"
            "https://www.pacdv.com/sounds/interface_sound_effects/beep-5.wav"
            "https://www.pacdv.com/sounds/interface_sound_effects/beep-6.wav"
    */

    // Click events

    function beClicked(colour) {
        colour.classList.add(`light-${colour.id}`);
        colour.classList.remove(`${colour.id}`);
        if (colour === blue) {
            const sound = new Audio("https://www.pacdv.com/sounds/interface_sound_effects/beep-1.wav");
            sound.play();
            sound.volume = 0.2;
        };
        if (colour === yellow) {
            const sound = new Audio("https://www.pacdv.com/sounds/interface_sound_effects/beep-3.wav");
            sound.play();
            sound.volume = 0.2;
        };
        if (colour === green) {
            const sound = new Audio("https://www.pacdv.com/sounds/interface_sound_effects/beep-4.wav");
            sound.play();
            sound.volume = 0.2;
        };
        if (colour === red) {
            const sound = new Audio("https://www.pacdv.com/sounds/interface_sound_effects/beep-2.wav");
            sound.play();
            sound.volume = 0.2;
        };
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

    function startGame() {
        beginBtn.classList.add('fadeOut');
        computerSelection();
        iterateThroughArray();
        console.log(`I am running startGame and the game array is ${gameArray}`)
    };

    beginBtn.addEventListener('click', startGame);
};
game();