// A Bush is just an Actor with a certain color
Crafty.c('Bush', {
    init: function() {
        this.requires('Actor, Solid, spr_bush');
    },
});
