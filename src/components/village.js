// A village is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Village', {
    init: function() {
        this.requires('Actor, spr_village');
    },

    collect: function() {
        this.destroy();
        Crafty.trigger('VillageVisited', this);
    }
});
