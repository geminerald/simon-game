Rainbow Simon 
================

My take on the classic Simon game - upated for the 21st Century. Featuring modernised, mobile-friendly User Interface, simple tutorials and additional challenges offered by the variable difficulty level which increments the number of potential options and the target score - ensuring more replayability than the classic. 

UX
------------------------

The game is designed to be straightforward to grasp and engaging. Simplicity is built into the design - there are very few controls and little room for confusion.

* The tutorial is a single page with only three simple instructions to grasp.
* On the tutorial page there is also a selector which will allow them to select a difficulty level. By default this is set to Standard which will have four different colours (like the classic game) but it can be any number between 2 and 6. 
* The difficulty level also affects the target score the user is trying to achieve. From 5 on Very Easy difficulty to 30 on Very Hard difficulty this ensures that the challenge is variable.
* After the tutorial and difficulty selector there is a large simple button which will remove the Tutorial page and launch the game. As soon as this button is clicked it will start by selecting from the available colours and clicking on it. It will then await the users input.
* The users input is to click on the colourful buttons, there are no other controls. 
* The game repeats as such until the user either achieves the target score or makes an error, at which point a pop-up will appear to let them know and invite them to try again.

As part of this design process I used [Balsamiq]https://balsamiq.com/) to structure the layout of the game.

User Stories
------------------

* As a User I expect to have simple instructions.
* As a User I expect to be able to launch the game quickly.
* As a User I expect to be able to see the sequence I have to follow.
* As a User I expect to be able to follow the sequence.
* As a User I expect to be able to know if I have won or lost the game.
* As a User I expect to be able to restart the game afterwards.

Features
------------------

### Current Features

* Functional Game which is instantly recognisable to fans of the classic.
* Variable difficulty level allowing for all levels of player.
* From 2 - 6 different colours which could be added to the session.
* Target scores from 5 - 25 to ensure that casual and competitive gamers are engaged.


### Potential Features

* Allowing for separate selection for each of "Number of Colours" and "Target Score"
* "Legendary Difficulty level which would speed up the iteration or alter the colours to make it exceptionally challenging.
* Multiplayer support allowing people to play the game remotely - where one player will take half the colours and the other the other half, further increasing difficulty and engagement. 

Technologies Used
------------

* HTML
* CSS
* jQuery
* JavaScript
* Balsamiq
* Affinity Photo
* GitHub


Testing
--------------

### Bugs

* A bug was found where the player could click on elements while the game was iterating through it's own array, this would restart the process while not interrupting the function so the function would run multiple times simultaneously. This was resolved by disabling all buttons on the page for the duration of the function and then eneabling them again when it was finished.

* A bug was found where on mobile devices the user would have to scroll down to click on the button to start the game, this would then start the game but the player would not be able to see the top of the screen. This was resolved by adding a function to the functions that ran when this button was clicked which moved the user to the top of the page.

* Due to an oversight in design the X to close the modal which popped up when the user lost the game would not restart the game or do anything, essentially the user would have to reload the page to continue to play. This was resolved by changing the X to a link to the home page.




Deployment
-------------------

This project was developed using the [Visual Studio Code](https://code.visualstudio.com), committed to git and pushed to GitHub by downloading git and pushing via the terminal in Visual Studio Code.

To deploy Rainbow Simon to GitHub Pages from its [GitHub repository](https://github.com/geminerald/simon-game), the following steps were taken: 
1. Log into GitHub. 
2. From the list of repos, choose **geminerald/simon-game**.
3. From the menu at the top of the page, choose **Settings**.
4. Scroll down to **GitHub Pages**.
5. Under **Source** click the drop-down menu with **None** selected and change it to **Master Branch**
6. On selecting Master Branch the page is refreshed, Rainbow Simon is then deployed. 
7. Scroll back down to **GitHub Pages** to retrieve the link to the deployed site.

---------------------------

#### Content

*  I used W3 Schools extensively, including their validators for both HTML and CSS.


#### Media

*  The colour scheme was taken from [Astelles Colors](https://www.astellescolors.com/2017/08/01/color-inspiration-color-play/)
*  The Image used was taken from [Pexels](https://www.pexels.com)

#### Acknowledgements

* I would like to thank Simen Daehlin for his help and feedback throughout.
* I would also like to thank the Code Institute Tutor Support team for their help and patience.
* Special thanks to Shane Quinn for his thorough testing and advice on how they can be fixed.