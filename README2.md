The repo contains several examples of common game snippets by using the STAG game engine. The first thing to note is the file structure of a STAG game engine. In this architecture, you should have 2 main folders, one for the game and one for the individual games.


# Engine
The game engine is split up into 4 categories: classes, components, static, and the engine itself. 

### Classes
Classes in the game engine are the building bricks that make up the game.

- Scenes : encompouse everything in regards to the current game objects being displayed or in use and the background
- Game Objects : entities in a game that represent something, and the things that need to be tracked and displayed
- Components : puzzles pieces that give unqiue behaviors, aspects, and functionality to game objects

### Components
Components in the game engine are universal game object components that can be used between different games. 

Examples
- Aspects that need to be drawn like circles, rectangles, lines and text
- The x and y corrdinates of each object 

### Static
- Globals : variables to be stored between scenes
- Input : handles all the logic to track and record mouse and keyboard inputs
- Time :  keeps track of the ms you want to run and your fps. 

### Engine
Engine.js is used as seperate file to establish the game loop of update and draw and the setUp functions wich establishes the infrastructure.

# Games
In these files, you store game specific aspects like scenes, game objects, components, and the main files(in this it will be called STAGGame#.html)

### Main Files
The main files is the centralized area to import and establishing engine and game js files. 
**NOTE**: The imports in the main file maybe different per system due to file structures. Ensure your file structure matches your imports.

### Game Snippet Examples
- Button Game
    - Explores the idea of button interactions
- Circles
    - Circle-Circle collision and resolution
    - Keeping track of Score as a global variable
    - Displaying Score across multiple scenese
- Enemy Movement
    - Show the logic behind a preestablished path for an enemey movement
    - Show the logic behind a "roaming" enemey when given specific cordinates
- Mouse Movement
    - Shows the logic behind a game object following the mouse at all times
    - Shows the logic behind a point-and-click movement schematic


