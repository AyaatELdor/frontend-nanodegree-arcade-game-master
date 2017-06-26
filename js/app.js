var Enemy = function(startX, startY, speed) {
	"use strict";
    this.x = startX;
    this.y = startY;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
	"use strict";
    this.x = this.x + this.speed * dt;
    if (this.x > 500) {
        this.x = -60;
        this.randomSpeed();
    }
    var moveXLeft = this.x - 50;
    var moveXRight = this.x + 50;
    var moveYTop = this.y - 50;
    var moveYBottom = this.y + 50;

    if (player.x > moveXLeft && player.x < moveXRight && player.y > moveYTop && player.y < moveYBottom) {
        player.resetPlayerPosition();
    }
};
Enemy.prototype.render = function() {
	"use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.randomSpeed = function() {
	"use strict";
    var speedMultiply = Math.random() * 5+2;
    this.speed = 75 * speedMultiply;
};
var playerStartX = 200,
    playerStartY = 400;

var Player = function() {
	"use strict";
    this.x = playerStartX;
    this.y = playerStartY;
    this.wallChecker = {
        leftWall: false,
        rightWall: false,
        bottomWall: true
    };
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function() {
	"use strict";

};

Player.prototype.render = function() {
	"use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.resetPlayerPosition = function() {
	"use strict";
    this.x = playerStartY;
    this.y = playerStartY;
    this.resetCheckPosition();
};

Player.prototype.handleInput = function(keyPressed) {
	"use strict";
    var horizontal = 100;
    var vertical = 90;
    this.checkPosition();

    if (keyPressed === 'left') {
        if (this.wallChecker.leftWall) {
            return null;
        }
        this.x -= horizontal;
    } else if (keyPressed === 'right') {
        if (this.wallChecker.rightWall) {
            return null;
        }
        this.x += horizontal;
    } else if (keyPressed === 'up') {
        if (this.y === 40) {
            this.resetPlayerPosition();
            return null;
        }
        this.y -= vertical;
    } else if (keyPressed === 'down') {
        if (this.wallChecker.bottomWall) {
            return null;
        }
        this.y += vertical;
    } else {
        console.log('Wrong Key');
        return null;
    }
};

Player.prototype.checkPosition = function() {
	"use strict";
    if (this.x === 0) {
        this.setHorizontalWallCheckerState(true, false);
    } else if (this.x === 400) {
        this.setHorizontalWallCheckerState(false, true);
    } else {
        this.setHorizontalWallCheckerState(false, false);
    }
    if (this.y === 400) {
        this.wallChecker.bottomWall=true;
    } else {
        this.wallChecker.bottomWall=false;
    }
};

Player.prototype.resetCheckPosition=function() {
	"use strict";
    this.setHorizontalWallCheckerState(false, false);
    this.wallChecker.bottomWall=true;
};

Player.prototype.setHorizontalWallCheckerState=function(leftWallState, rightWallState) {
	"use strict";
    this.wallChecker.leftWall = leftWallState;
    this.wallChecker.rightWall = rightWallState;
};
var allEnemies=[];
for (var i = 0; i < 3; i++) {
    var tempSpeed = ((Math.random() * 5 )+ 1) * 70;
    allEnemies.push(new Enemy(-60, 60 + 80 * i, tempSpeed));
}

var player = new Player();
document.addEventListener('keyup', function(e) {
	"use strict";
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

