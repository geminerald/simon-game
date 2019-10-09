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
    const winModalBtn = document.getElementById("win-modal-button");
    const winDifficulty = document.getElementById("win-difficulty");

    // Game arrays and score items

    let gameArray = [];
    let playerArray = [];
    let computerOptions = [];
    let playerScore = 0;
    let targetScore = 0;
    /**
     * Sets the difficulty level based off the users selection
     * @param {*} level 
     */
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
    };

    // Click events
    /**
     * Mades audio and visual changes when a colour element is clicked
     * @param {*} colour 
     */
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

    /**
     * Main Game Function:
     * Function adds a listener to all colours buttons which when clicked will
     * light them up and push the colour to the player array which is 
     * simultaneously compared to the computer/ game array. Also checks
     * if the user has won the game at each click. Will then add a new 
     * element to the game array.
     */

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
        };
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
        };
    });

    /**
     * Random Number Generator and push to array
     * adds a random selection to the game array. 
     */
    function computerSelection() {
        const computerNumber = Math.floor(Math.random() * computerOptions.length)
        const computerChoice = computerOptions[computerNumber];
        gameArray.push(computerChoice);
    };

    /**
     * Helper function which will check the game array and click
     * the buttons in order. 
     * @param {*} array 
     * @param {*} index 
     */

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

        } else if (entry === "orange") {
            beClicked(orange);

        }

    };

    /**
     * helper function to iterate through the game array and
     * uses the Check Colour function (above) to click on the 
     * correct elements.
     */
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


    /**
     * Function to check if the manually created player array 
     * matches the game array. returns true by default, will return
     * false if user makes an error. 
     */

    function arrayValidator() {
        for (i = 0; i < playerArray.length; i++) {
            if (playerArray[i] != gameArray[i]) {
                return false;
            };
        };
        return true;
    };
    // Game Order

    /**
     *  Start game
     * Event listener on tutorial page button which starts a new game
     * when the button is clicked. 
     * */


    tutBtn.addEventListener('click', () => {
        document.querySelector('.tutorial-container').classList.add('fadeOut');
        $('html, body').animate({
            scrollTop: 0
        }, 'fast');
        let difficultyLevel = difficultySelector.value;
        setDifficulty(difficultyLevel);
        computerSelection();
        iterateThroughArray();

    });

    /**
     * Modal Listeners
     * Listeners applied to modals to remove them when 
     * user clicks on them
     */
    closeWinModal.addEventListener('click', () => {
        winModal.style.display = "none";
    });
    closeLoseModal.addEventListener('click', () => {
        loseModal.style.display = "none";
    });

    winModalBtn.addEventListener('click',()=>{
        winModal.style.display = "none";
        let winDiff = winDifficulty.value;
        red.classList.remove("disappeared");
        orange.classList.remove("disappeared");
        yellow.classList.remove("disappeared");
        green.classList.remove("disappeared");
        blue.classList.remove("disappeared");
        purple.classList.remove("disappeared");
        setDifficulty(winDiff);
        computerSelection();
        iterateThroughArray();
    });

};
game();