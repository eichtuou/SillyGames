class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xDirection = 1;
        this.yDirection = 0;
        this.size = 1;
        this.body = [];
    }

    show() {
        fill(255);
        rect(this.x, this.y, pixelSize, pixelSize);
    }

    direction(x, y) {
        this.xDirection = x;
        this.yDirection = y;
    }

    update() {
        this.x = this.x + this.xDirection * pixelSize;
        this.y = this.y + this.yDirection * pixelSize;
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

