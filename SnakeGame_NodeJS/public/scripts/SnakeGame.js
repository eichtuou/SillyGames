/// <reference path="../../node_modules/@types/p5/global.d.ts" />

const pxSize = 12;
var cols;
var rows;
var snake;
var food;
var gameOver;

function setup() {
    background(0);
    frameRate(8);
    createCanvas(400, 400);
    cols = floor(width / pxSize);
    rows = floor(height / pxSize);
    gameOver = false;
    restartGame();
}

function draw() {
    scale(pxSize);
    noStroke();
    gameOver = snake.isItGameOver();

    if (gameOver == false) {
        background(0);
        food.render();
        snake.render();

        if (snake.ateFood(food)) {
            food.newFood(snake);
        }
        snake.update();

    } else {
        restartGame();
    }
}

function keyPressed() {
    // arrows or WASD
    if (keyCode == UP_ARROW || keyCode == 87) {
        snake.setDir(0, -1);
    } else if (keyCode == DOWN_ARROW || keyCode == 83) {
        snake.setDir(0, 1);
    } else if (keyCode == LEFT_ARROW || keyCode == 65) {
        snake.setDir(-1, 0);
    } else if (keyCode == RIGHT_ARROW || keyCode == 68) {
        snake.setDir(1, 0);
    } else if (keyCode == ENTER) {
        gameOver = false;
    }
}

function restartGame() {
    if (gameOver == true) {
        background(255, 0, 0);
        strokeWeight(1);
        textSize(4);
        textAlign(CENTER, CENTER);
        fill(0);
        text("GAME OVER", cols / 2, rows / 2.25);
        textSize(1.25);
        text("Press ENTER to try again...", cols / 2, rows / 1.75);
        keyPressed();
        redraw();
    }

    if (gameOver == false) {
        background(0);
        snake = new Snake;
        food = new Food(snake);
        redraw();
    }
}

