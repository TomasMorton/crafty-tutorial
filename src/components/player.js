Crafty.c('Player', {
    init: function() {
        this.requires('Actor, Fourway, Collision, SpriteAnimation, spr_player')
            .fourway(2)
            .stopOnSolids()
            .addAnimations()
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
    },

    addAnimations: function() {
        this.reel('PlayerMovingUp', 600, 0, 0, 3)
            .reel('PlayerMovingRight', 600, 0, 1, 3)
            .reel('PlayerMovingDown', 600, 0, 2, 3)
            .reel('PlayerMovingLeft', 600, 0, 3, 3);

        this.bind('NewDirection', function(data) {
            if (data.x > 0) {
                this.animate('PlayerMovingRight', -1);
            } else if (data.x < 0) {
                this.animate('PlayerMovingLeft', -1);
            } else if (data.y > 0) {
                this.animate('PlayerMovingDown', -1);
            } else if (data.y < 0) {
                this.animate('PlayerMovingUp', -1);
            } else {
                this.pauseAnimation();
            }
        });
        return this;
    }
});
