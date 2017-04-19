/**
 * Game class, represents the whole game
 * @param {Object} element - DOM element for the game
 * @returns {Game}
 */
Game = function(element) {
    this.element = element;
    this.width = 4;
    this.height = 4;
    this.fields = [];
    
    // Generate fields
    for (var i = 0; i < this.width; i++) {
        this.fields[i] = [];
        for (var j = 0; j < this.height; j++) {
            this.fields[i][j] = new Field(this.element, i, j);
        }
    }
    
    // Add initial bricks
    this.addRandomBrick();
    this.addRandomBrick();
};

/**
 * Adds a brick with value 2 to a random free field
 * TODO: handle the situation, when all fields are occupied
 * @returns {undefined}
 */
Game.prototype.addRandomBrick = function() {
    var tryBrick = function(i, j) {
        if (this.fields[i][j].value === 0) {
            this.fields[i][j].setValue(2);
            return true;
        } else {
            return false;
        }
    }.bind(this);
    
    var success = false;
    do {
        success = tryBrick(Math.floor(Math.random() * 4), Math.floor(Math.random() * 4));
    } while (!success);
};

/**
 * Field class, represents one field in the game
 * @param {Object} parent - parent DOM element (the game element)
 * @param {Number} i - horizontal coordinate
 * @param {Number} j - vertical coordinate
 * @returns {Field}
 */
Field = function(parent, i, j) {
    this.x = i;
    this.y = j;
    this.element = document.createElement("div");
    this.element.className = "field";
    this.element.style.top = j * 125;
    this.element.style.left = i * 125;
    this.setValue(0);
    parent.appendChild(this.element);
};

/**
 * Set a value to the brick and displays it: 0 means empty field
 * @param {type} val
 * @returns {Field.value} previous brick value
 */
Field.prototype.setValue = function(val) {
    var lastVal = this.value;
    this.value = val;
    if (val === 0)
        this.element.innerHTML = "";
    else
        this.element.innerHTML = val;
    return lastVal;
};

/**
 * Handler for "left" user action
 * TODO: implement the function
 * @returns {undefined}
 */
Game.prototype.left = function() {
    this.addRandomBrick();
};

/**
 * Handler for "right" user action
 * TODO: implement the function
 * @returns {undefined}
 */
Game.prototype.right = function() {
    this.addRandomBrick();
};

/**
 * Handler for "top" user action
 * TODO: implement the function
 * @returns {undefined}
 */
Game.prototype.top = function() {
    this.addRandomBrick();
};

/**
 * Handler for "bottom" user action
 * TODO: implement the function
 * @returns {undefined}
 */
Game.prototype.bottom = function() {
    this.addRandomBrick();
};
