Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map.tile.width,
            h: Game.map.tile.height
        });
    },

    // Locate this entity at the given position on the grid
    at: function(x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x / Game.map.tile.width, y: this.y / Game.map.tile.height };
        } else {
            this.attr({ x: x * Game.map.tile.width, y: y * Game.map.tile.height });
            return this;
        }
    }
});
