const game = () => {

    // Colour Selectors
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const purple = document.getElementById("purple");
    const orange = document.getElementById("orange");


    // Other Element Selectors
    const winModal = document.getElementById("win-modal");
    const loseModal = document.getElementById("lose-modal");
    const tutBtn = document.getElementById("tutorial-button");
    const difficultySelector = document.getElementById("difficulty");
    const closeWinModal = document.getElementById("close-win-modal");
    const closeLoseModal = document.getElementById("close-lose-modal");

    // Game arrays and score items

    let gameArray = [];
    let playerArray = [];
    let computerOptions = [];
    let playerScore = 0;
    let targetScore = 0;

    function setDifficulty(level) {
        if (level == 2) {
            computerOptions.push("red", "blue");
            purple.classList.add("disappeared");
            yellow.classList.add("disappeared");
            green.classList.add("disappeared");
            orange.classList.add("disappeared");
            targetScore = 1;
        };
        if (level == 3) {
            computerOptions.push("red", "blue", "yellow");
            purple.classList.add("disappeared");
            green.classList.add("disappeared");
            orange.classList.add("disappeared");
            targetScore = 10;
        };
        if (level == 4) {
            computerOptions.push("red", "blue", "yellow", "green");
            purple.classList.add("disappeared");
            orange.classList.add("disappeared");
            targetScore = 15;
        };
        if (level == 5) {
            computerOptions.push("red", "blue", "yellow", "green", "orange");
            purple.classList.add("disappeared");
            targetScore = 20;
        };
        if (level == 6) {
            computerOptions.push("red", "blue", "yellow", "green", "purple", "orange");
            targetScore = 25;
        };

        /*
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
        playerArray.push(id);

        if (!arrayValidator()) {
            loseModal.style.display = "block";
            gameArray = [];
            playerArray = [];
            playerScore = 0;
            return
        }
        if (playerArray.length == gameArray.length) {
            playerScore++;
            if (playerScore == targetScore) {
                winModal.style.display = "block";
                gameArray = [];
                playerArray = [];
                return
            }
            computerSelection();
            iterateThroughArray();
            playerArray = [];

        }
        
    });


    // Random Number Generator and push to array

    function computerSelection() {
        const computerNumber = Math.floor(Math.random() * computerOptions.length)
        const computerChoice = computerOptions[computerNumber];
        gameArray.push(computerChoice);
    };

    //  iterate through Array automatically

    function checkColour(array, index) {

        let entry = array[index];
        /*
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

        } else if (entry === "orange") {
            beClicked(orange);

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
                } else {
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


    tutBtn.addEventListener('click', () => {
        document.querySelector('.tutorial-container').classList.add('fadeOut');
        let difficultyLevel = difficultySelector.value;
        setDifficulty(difficultyLevel);
        computerSelection();
        iterateThroughArray();

    });

    //Modal Listeners
    closeWinModal.addEventListener('click', () => {
        winModal.style.display = "none";
    });
    closeLoseModal.addEventListener('click', () => {
        loseModal.style.display = "none";
    });

};
game();