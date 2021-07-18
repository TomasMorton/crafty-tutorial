Crafty.c('Player', {
    init: function() {
        this.requires('Actor, Fourway, Color')
            .fourway(4)
            .color(colours.player);
    },
});
