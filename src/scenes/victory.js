Crafty.scene('Victory',
    function() {
        Crafty.e('2D, DOM, Text')
            .attr({ x: 0, y: 0 })
            .text('Victory!');

        Crafty.audio.play('applause');

        let delay = true;
        setTimeout(function() {
            delay = false;
        }, 5000);
        this.restart_game = Crafty.bind('KeyDown', function() {
            if (!delay) {
                Crafty.scene('Game');
            }
        });
    },
    function() {
        // Remove our event binding from above so that we don't
        //  end up having multiple redundant event watchers after
        //  multiple restarts of the game
        this.unbind('KeyDown', this.restart_game);
    }
);

