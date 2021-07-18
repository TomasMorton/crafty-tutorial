// A village is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Village', {
    init: function() {
        this.requires('Actor, Color')
            .color(colours.village);
    },

    collect: function() {
        this.destroy();
    }
});
