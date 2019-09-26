const game = () => {

    // Colour Selectors
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const beginBtn = document.getElementById('begin');
    const readout = document.getElementById("readout");

    // Game array and score button

    let gameArray = [];
    let playerArray = [];
    let playerScore = 0;

    readout.innerHTML = playerScore;

    // Sounds

    const sounds = [
        "https://www.pacdv.com/sounds/interface_sound_effects/beep-1.wav",
        "https://www.pacdv.com/sounds/interface_sound_effects/beep-2.wav",
        "https://www.pacdv.com/sounds/interface_sound_effects/beep-3.wav",
        "https://www.pacdv.com/sounds/interface_sound_effects/beep-4.wav",
        "https://www.pacdv.com/sounds/interface_sound_effects/beep-5.wav",
        "https://www.pacdv.com/sounds/interface_sound_effects/beep-6.wav",
    ];

    // Click events

    function beClicked(colour) {
        colour.classList.add(`light-${colour.id}`);
        colour.classList.remove(`${colour.id}`);
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
            var sound = new Audio("https://www.pacdv.com/sounds/interface_sound_effects/beep-1.wav");
            sound.play();

        } else if (entry === "red") {
            beClicked(red);
            var sound = new Audio("https://www.pacdv.com/sounds/interface_sound_effects/beep-2.wav");
            sound.play();
        } else if (entry === "yellow") {
            beClicked(yellow);
            var sound = new Audio("https://www.pacdv.com/sounds/interface_sound_effects/beep-3.wav");
            sound.play();
        } else if (entry === "green") {
            beClicked(green);
            var sound = new Audio("https://www.pacdv.com/sounds/interface_sound_effects/beep-4.wav");
            sound.play();
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