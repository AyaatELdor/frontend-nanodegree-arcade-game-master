#simple acrade game
- we start to describe our game:
  - we can start by identefy enemy 
    - using intial value on _ x _ 
    - intial value on _ y _
    - and speed
- The image for sprite this uses ` this.sprite = 'images/enemy-bug.png';`
- the position of enemy can be **update** my method of games
- game can run on all computer in the same speed[guide](file:///F:/ayat/udacity/project%203/frontend-nanodegree-arcade-game-master/index.html)
- identefy the position of enemy 
  1. left 
  2. right
  3. up
  4. bottom
- enemy move with random motion by using ` Math.random() * 5 + 1; `
- we have one player have many classes
  - have intial value to move on x and y
  - check postion that can move on top and down and left and right by using ` if ` statement
  - Place all enemy objects in an array called allEnemies ` var allEnemies = [];
for (var i = 0; i < 3; i++) {
    var tempSpeed = Math.floor(Math.random() * 5 + 1) * 70;
    allEnemies.push(new Enemy(-60, 60 + 80 * i, tempSpeed));
} `
- Place the player object in a variable called player ` var player = new Player(); `
- using keyboard to play game by press on up,down,left,right keypress
#our gide
this form front-end web developer.
for mor information [guide](https://classroom.udacity.com/nanodegrees/nd001/parts/3692bea4-2632-4ce2-a693-32eafb84dd98/modules/269645859775463/lessons/2696458597239847/concepts/26849785360923).
#linces
@Udacity #simple acrade game
- we start to describe our game:
  - we can start by identefy enemy 
    - using intial value on _ x _ 
    - intial value on _ y _
    - and speed
- The image for sprite this uses ` this.sprite = 'images/enemy-bug.png';`
- the position of enemy can be **update** my method of games
- game can run on all computer in the same speed
- identefy the position of enemy 
  1. left 
  2. right
  3. up
  4. bottom
- enemy move with random motion by using ` Math.random() * 5 + 1; `
- we have one player have many classes
  - have intial value to move on x and y
  - check postion that can move on top and down and left and right by using ` if ` statement
  - Place all enemy objects in an array called allEnemies ` var allEnemies = [];
for (var i = 0; i < 3; i++) {
    var tempSpeed = Math.floor(Math.random() * 5 + 1) * 70;
    allEnemies.push(new Enemy(-60, 60 + 80 * i, tempSpeed));
} `
- Place the player object in a variable called player ` var player = new Player(); `
- using keyboard to play game by press on up,down,left,right keypress
#our gide
this form front-end web developer.
for mor information [guide](https://classroom.udacity.com/nanodegrees/nd001/parts/3692bea4-2632-4ce2-a693-32eafb84dd98/modules/269645859775463/lessons/2696458597239847/concepts/26849785360923).
#linces
@Udacity 