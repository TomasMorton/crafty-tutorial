const colours = {
    background: 'rgb(249, 223, 125)',
    bush: 'rgb(20, 185, 40)',
    tree: 'rgb(20, 125, 40)',
};

Game = {
    // This defines our grid's size and the size of each of its tiles
    map: {
        width: 24,
        height: 16,
        tile: {
            width: 16,
            height: 16
        }
    },

    // The total width of the game screen. Since our grid takes up the entire screen
    //  this is just the width of a tile times the width of the grid
    width: function() {
        return this.map.width * this.map.tile.width;
    },

    // The total height of the game screen. Since our grid takes up the entire screen
    //  this is just the height of a tile times the height of the grid
    height: function() {
        return this.map.height * this.map.tile.height;
    },

    isEdgeOfMap: function(x, y) {
        return x === 0 ||
            x === Game.map.width - 1 ||
            y === 0 ||
            y === Game.map.height - 1;
    },

    addToTile: function(x, y, colour) {
        Crafty.e('2D, Canvas, Color')
            .attr({
                x: x * Game.map.tile.width,
                y: y * Game.map.tile.height,
                w: Game.map.tile.width,
                h: Game.map.tile.height
            })
            .color(colour);
    },

    addTree: function(x, y) {
        this.addToTile(x, y, colours.tree);
    },

    addBush: function(x, y) {
        this.addToTile(x, y, colours.bush);
    },

    populateTiles: function() {
        for (let x = 0; x < this.map.width; x++) {
            for (let y = 0; y < this.map.height; y++) {
                if (this.isEdgeOfMap(x, y)) {
                    this.addTree(x, y);
                } else {
                    this.addBush(x, y);
                }
            }
        }
    },

    // Initialize and start our game
    start: function() {
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height());
        Crafty.background(colours.background);

        Game.populateTiles();
    }
};

