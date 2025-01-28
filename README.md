The repo contains several examples of simple games that use a basic game loop.<br>

GameLoopGame0.html explores the basics of movement and switching scenes in a game loop format. This is done by going between the playable state and the end of game state. <br>
Concepts: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Movement and Movement Restrictions (Cannot move the circle to the X cordinate of less than Zero) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Concepts of multiple scenes and transitioning between the scenes (This is critical to show differing scenes in a game) <br><br><br>


GameLoopGame1.html explores multiple character movements and a very basic idea of circle-circle collision. <br>
Concepts: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Keeping track of multiple objects locations and their movement <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Very basic idea of circle-circle collision/overlap <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Keep track of their cordinates and see if the difference is less than some factor (in this game its 5) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Need a factor because movement causes instantces that may look perfectly overlap but is technically not<br><br><br>


GameLoopGame2.html explores the idea of firing an object to gain points as well the core idea of a time restriction by using a timer<br>
Concepts:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Uses user input to create, display, and not display objects depending on the user input <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-An example of doing a basic idea of circle-rectangle collision based on the x cordinates <br><br><br>


GameLoopGame3.html explores the idea of mouse inputs to make a clicker game. <br>
Concepts:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Keeps track of mouse related variable like location and if the mouse was clicked in general and in this frame<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Contains the code infrastructure to allow to keep track of mouse movements and clicking functionality<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Mouse movement and clicking is printed in javascript console for user assistance and understanding
