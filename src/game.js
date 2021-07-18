Game = {
    map: {
        width: 24,
        height: 16,
        tile: {
            width: 16,
            height: 16
        }
    },

    width: function() {
        return this.map.width * this.map.tile.width;
    },

    height: function() {
        return this.map.height * this.map.tile.height;
    },

    isEdgeOfMap: function(x, y) {
        return x === 0 ||
            x === this.map.width - 1 ||
            y === 0 ||
            y === this.map.height - 1;
    },

    addTree: function(x, y) {
        Crafty.e('Tree').at(x, y);
    },

    addBush: function(x, y) {
        Crafty.e('Bush').at(x, y);
    },

    addVillage: function(x, y) {
        Crafty.e('Village').at(x, y);
    },

    addObstacles: function() {
        for (let x = 0; x < this.map.width; x++) {
            for (let y = 0; y < this.map.height; y++) {
                if (this.isEdgeOfMap(x, y)) {
                    this.addTree(x, y);
                } else {
                    if (Math.random() < random.bushFrequency) {
                        this.addBush(x, y);
                    }
                }
            }
        }
    },

    addVillages: function() {
        for (let x = 0; x < this.map.width; x++) {
            for (let y = 0; y < this.map.height; y++) {
                if (Math.random() < random.villageFrequency) {
                    this.addVillage(x, y);

                    if (Crafty('Village').length >= objectives.maxVillages) {
                        return;
                    }
                }
            }
        }
    },

    addPlayer: function() {
        Crafty.e('Player').at(5, 5);
    },

    start: function() {
        Crafty.init(Game.width(), Game.height());
        Crafty.background(colours.background);

        Game.addObstacles();
        Game.addVillages();
        Game.addPlayer();
    }
};
