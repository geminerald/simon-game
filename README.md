Rainbow Simon 
================

My take on the classic Simon game - upated for the 21st Century. Featuring modernised, mobile-friendly User Interface, simple tutorials and additional challenges offered by the variable difficulty level which increments the number of potential options and the target score - ensuring more replayability than the classic. 

[Play Rainbow Simon](https://geminerald.github.io/simon-game/)

Goals
------------------------

This project is designed to be:
* a simple game
* with high replayability
* which is equally accessible to all ages 

UX
------------------------

The game is designed to be straightforward to grasp and engaging. Simplicity is built into the design - there are very few controls and little room for confusion.

* The tutorial is a single page with only three simple instructions to grasp.
* On the tutorial page there is also a selector which will allow them to select a difficulty level. By default this is set to Standard which will have four different colours (like the classic game) but it can be any number between 2 and 6. 
* The difficulty level also affects the target score the user is trying to achieve. From 5 on Very Easy difficulty to 30 on Very Hard difficulty this ensures that the challenge is variable.
* After the tutorial and difficulty selector there is a large simple button which will remove the Tutorial page and launch the game. As soon as this button is clicked it will start by selecting from the available colours and clicking on it. It will then await the users input.
* The users input is to click on the colourful buttons, there are no other controls. 
* The game repeats as such until the user either achieves the target score or makes an error, at which point a pop-up will appear to let them know and invite them to try again.

As part of this design process I used [Balsamiq](https://balsamiq.com/) to structure the layout of the game.

The mockups can be located in the mockups folder of this project.

User Stories
------------------

As a User I expect to :
* have simple instructions.
* be presented with a simple and intuitive User Interface.
* be able to engage with the game regardless of my age or tech experience.
* launch the game quickly.
* see the sequence I have to follow.
* follow the sequence by tapping on the coloured buttons.
* know when I have won or lost the game.
* restart the game afterwards.
* be able to alter the difficulty after each game.

Features
------------------

### Current Features

* Functional Game which is instantly recognisable to fans of the classic while being engaging to new players.
* Variable difficulty level allowing for all levels of player.
* Any option from 2 - 6 buttons per game.
* Target scores from 5 - 25 to ensure that both casual and competitive gamers are engaged.


### Potential Features

* Allowing for separate selection for each of "Number of Colours" and "Target Score"
* "Legendary Difficulty level which would speed up the iteration or alter the colours to make it exceptionally challenging.
* Multiplayer support allowing people to play the game remotely - where one player will take half the colours and the other the other half, further increasing difficulty and engagement. 
* An Unending mode where there is no target score -  the user is simply trying to hit a new "High Score" for getting the largest sequence they can. 


Design
-------------------

### Colours
* The colours were a key component of this game as the game is based on a rainbow. From the conception of the project I decided to take the classic Simon game with four colours and give the player a wider variety. As such there are six colours in the game with four being the default. 
* The colours represent the rainbow with six basic colours being represented. Initially more generic colours were used, however when the project was close to completion these were updated with more vibrant colours while still keeping the sense of a rainbow alive. 

### Fonts

* Poppins is the font used throughout - as a simplistic and modern sans-serif font it is in keeping with the style of the game and is very simple to read for any user. 

### Style

* Elements were given rounder corners to soften the look of the project and ensure that it kept the feeling of being a simlpe "app style" game.

* The focus of the game is intended to be the buttons at the centre so efforts were taken to minimise distraction from this. The Tutorial screen and Modals were created in a neutral blue colour and the background was kept to an off- white colour to ensure that they did not distract from the focus of the game beig on the buttons.

### Audio

* The audio files used are a series of notes played on a xylophone. These were taken from [Freesound](www.freesound.org).

* Initially placeholder sounds were used but after receiving feedback that they were very detrimental to the overall experience they were upgraded as a priority.


Technologies Used
------------

* HTML
* CSS
* JavaScript
* Git
* [jQuery](https://jquery.com)
* [Balsamiq](https://balsamiq.com)
* [Affinity Photo](https://affinity.serif.com/en-us/)
* [Google Fonts](https://fonts.google.com)



Testing
--------------

### User Testing

* Games were played by the developer at each stage of the development process.
* Testing was undertaken on a variety of devices and browsers.
* Testing was performed by a variety of other users from various ages.
* Testing was also performed by friends of the developer, including one who works in the field.

#### To test against the user goals:

As a User I expect to :
* have simple instructions.
    - The instructions for the game were initially on two pages but were condensed into one for the sake of simplification.
* be presented with a simple and intuitive User Interface.
    - The User Interface was kept to very simple buttons and throughout testing no user experienced confusion in relation to the User Interface.
* be able to engage with the game regardless of my age or tech experience.
    - The test audience ranged from 15 years to 70 years and from users who had lower than average experience to technology professionals.
* launch the game quickly.
    - Every effort has been made to keep code concise throughout which helps it load quickly. From the design perspective the introduction and tutorial was kept to a single page to assist in this process.
* see the sequence I have to follow.
    - The game sequence was tested extensively throughout and is currently working as designed. 
* follow the sequence by tapping on the coloured buttons.
    - When the game sequence has completed the user can repeat it simply and in an obvious way.
* know when I have won or lost the game.
    -  Modals appear on all devices and browsers which alert the user when they have won or lost the game and give them the option to try again.
* restart the game afterwards.
    - Upon winning or losing the user is given the option to Play Again and select a new difficulty level.
* be able to alter the difficulty after each game.
    - The user has the option to alter the difficulty after a win or loss. This feature was implemented relatively late in the development after user testing from a subject matter expert. 


### Bugs

* A bug was preventing the Iterate Through Array function from working correctly as it was originally created using a Set Timeout function. As such it would not iterate correctly and would click all elements in the array simultaneaously. This was resolved by changing the function to a Set Interval function with a nested Set Tiemout one. 

* A bug was found where the player could click on elements while the game was iterating through it's own array, this would restart the process while not interrupting the function so the function would run multiple times simultaneously. This was resolved by disabling all buttons on the page for the duration of the function and then eneabling them again when it was finished.

* A bug was found where on mobile devices the user would have to scroll down to click on the button to start the game, this would then start the game but the player would not be able to see the top of the screen. This was resolved by adding a function to the functions that ran when this button was clicked which moved the user to the top of the page.

* Due to an oversight in design the X to close the modal which popped up when the user lost the game would not restart the game or do anything, essentially the user would have to reload the page to continue to play. This was resolved by changing the X to a function that reset the game.



Deployment
-------------------

This project was developed using [Visual Studio Code](https://code.visualstudio.com), committed to git and pushed to GitHub by downloading git and pushing via the terminal within Visual Studio Code.

To deploy Rainbow Simon to GitHub Pages from its [GitHub repository](https://github.com/geminerald/simon-game), the following steps were taken: 
1. Log into GitHub. 
2. From the list of repos, choose **geminerald/simon-game**.
3. From the menu at the top of the page, choose **Settings**.
4. Scroll down to **GitHub Pages**.
5. Under **Source** click the drop-down menu with **None** selected and change it to **Master Branch**
6. On selecting Master Branch the page is refreshed, Rainbow Simon is then deployed. 
7. Scroll back down to **GitHub Pages** to retrieve the link to the deployed site.

The game can also be played [here](geminerald.github.io/simon-game)

#### Content

* All code written by the Author. 

*  I used W3 Schools extensively, including their validators for both HTML and CSS.


#### Media

*  The colour scheme was taken from [Astelles Colors](https://www.astellescolors.com/2017/08/01/color-inspiration-color-play/)
*  The Image used was taken from [Pexels](https://www.pexels.com)

* The audio files were taken from [Freesound](www.freesound.org)

#### Acknowledgements

* I would like to thank [Simen Daehlin](https://www.github.com/Eventyret) for his help and extensive and honest feedback throughout.
* I would also like to thank the Code Institute Tutor Support team for their help and patience.
* Thanks to my friends and family who tested the game to the point of frustration.
* Special thanks to [Shane Quinn](https://www.linkedin.com/in/shanequinn/) for his especially thorough testing and advice, support and encouragement. 