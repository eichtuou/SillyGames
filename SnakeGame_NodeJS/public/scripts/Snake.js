class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.size = 1;
        this.bodyVector = 1;
    }

    show() {
        fill(255);
        rect(this.x, this.y, pixelSize, pixelSize);
    }

    direction(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    update() {
        this.x = this.x + this.xSpeed * pixelSize;
        this.y = this.y + this.ySpeed * pixelSize;
        this.x = constrain(this.x, 0, width - pixelSize);
        this.y = constrain(this.y, 0, height - pixelSize);
    }

    ateFood(food) {
        var distance = dist(this.x, this.y, food.x, food.y);
        if (distance < 1) {
            this.size++;
            return true;
        } else {
            return false;
        }
    }

}

