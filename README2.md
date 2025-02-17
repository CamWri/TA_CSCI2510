The repo contains several examples of game concepts that use a basic game loop. Each header links to the respective code.

## [GameLoopGame0.html](https://github.com/CS2510/Game-Loop-Minimum-Example/blob/main/GameLoopGame0.html)  
Explores the basics of movement and switching scenes in a game loop format.  
- Movement and Movement Restrictions (Cannot move the circle to the X coordinate of less than Zero)
- Concepts of multiple scenes and transitioning between the scenes (This is critical to show differing scenes in a game)

## [GameLoopGame1.html](https://github.com/CS2510/Game-Loop-Minimum-Example/blob/main/GameLoopGame1.html)  
Explores multiple character movements and a very basic idea of circle-circle collision.  
- Keeping track of multiple object's locations and their movement
- A temporary idea of circle-circle collision/overlap
  - Keep track of their coordinates and see if the difference is less than some factor (in this game it's 5)
  - Need a factor because movement causes instances that may look perfectly overlap but are technically not

## [GameLoopGame2.html](https://github.com/CS2510/Game-Loop-Minimum-Example/blob/main/GameLoopGame2.html)  
Explores the idea of firing an object to gain points as a time restriction by using a timer.  
- User input to create, display, and not display objects depending on the user input
- Countdown timer to show when the game ends
- A temporary idea of circle-rectangle collision based on the coordinates

## [GameLoopGame3.html](https://github.com/CS2510/Game-Loop-Minimum-Example/blob/main/GameLoopGame3.html)  
Explores the idea of mouse inputs to make a clicker game.  
- Keeps track of mouse-related variables like location and if the mouse was clicked in general and in this frame
- Contains the code infrastructure to allow to keep track of mouse movements and clicking functionality
- Mouse movement and clicking are printed in the javascript console for user assistance and understanding
