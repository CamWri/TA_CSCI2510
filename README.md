The repo contains several examples of simple games that use a basic game loop.

GameLoopGame0.html explores the basics of movement and switching scenes in a game loop format. This is done by going between the playable state and the end of game state.
Concepts:
    -Movement Restrictions (Cannot move the circle to the X cordinate of less than Zero)
    -Concepts of multiple scenes and transitioning between the scenes (This is critical to show differing scenes in a game)


GameLoopGame1.html explores multiple character movements and a very basic idea of circle-circle collision.
Concepts:
    -Keeping track of multiple objects locations and their movement
    -Very basic idea of circle-circle collision/overlap
        -Keep track of their cordinates and see if the difference is less than some factor (in this game its 5)
        -Need a factor because movement causes instantces that may look perfectly overlap but is  technically not which maybe frustering


GameLoopGame2.html explores the idea of firing an object to gain points as well the core idea of a time restriction by using a timer
Concepts:
    -Uses user input to create, display, and not display objects depending on the user input
    -An example of doing a basic idea of circle-rectangle collision based on the x cordinates


GameLoopGame3.html explores the idea of mouse inputs to make a clicker game. 
Concepts:
    -Keeps track of mouse related variable like location and if the mouse was clicked in general and in this frame
    -Contains the code infrastructure to allow to keep track of mouse movements and clicking functionality
