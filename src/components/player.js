Crafty.c('Player', {
    init: function() {
        this.requires('Actor, Fourway, Collision, spr_player')
            .fourway(4)
            .stopOnSolids()
            .onHit('Village', this.visitVillage);

    },

    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
        return this;
    },

    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },

    visitVillage: function(data) {
        const village = data[0].obj;
        village.collect();
    }
});
