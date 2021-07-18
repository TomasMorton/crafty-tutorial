Crafty.scene('Victory',
    function() {
        Crafty.e('2D, DOM, Text')
            .text('All villages visited!')
            .attr({ x: 0, y: Game.height() / 2 - 24, w: Game.width() })
            .textFont($text_css);

        Crafty.audio.play('applause');

        let delay = true;
        setTimeout(function() {
            delay = false;
        }, 5000);
        this.restart_game = function() {
            if (!delay) {
                Crafty.scene('Game');
            }
        };
        Crafty.bind('KeyDown', this.restart_game);
    }, function() {
        // Remove our event binding from above so that we don't
        //  end up having multiple redundant event watchers after
        //  multiple restarts of the game
        this.unbind('KeyDown', this.restart_game);
    }
);

