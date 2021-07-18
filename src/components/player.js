Crafty.c('Player', {
    init: function() {
        this.requires('Actor, Fourway, Collision, SpriteAnimation, spr_player')
            .fourway(4)
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
        this.animate('PlayerMovingUp', 0, 0, 2)
            .animate('PlayerMovingRight', 0, 1, 2)
            .animate('PlayerMovingDown', 0, 2, 2)
            .animate('PlayerMovingLeft', 0, 3, 2);

        this.bind('NewDirection', function(data) {
            if (data.x > 0) {
                this.animate('PlayerMovingRight', animation.playerSpeed, -1);
            } else if (data.x < 0) {
                this.animate('PlayerMovingLeft', animation.playerSpeed, -1);
            } else if (data.y > 0) {
                this.animate('PlayerMovingDown', animation.playerSpeed, -1);
            } else if (data.y < 0) {
                this.animate('PlayerMovingUp', animation.playerSpeed, -1);
            } else {
                this.stop();
            }
        });
        return this;
    }
});
