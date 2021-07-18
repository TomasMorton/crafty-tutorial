Crafty.scene('Loading',
    function() {
        const displayLoadingMessage = function() {
            Crafty.e('2D, DOM, Text')
                .text('Loading...')
                .attr({ x: 0, y: Game.height() / 2 - 24, w: Game.width() })
                .css($text_css);
        };

        displayLoadingMessage();
        // Load our sprite map image
        Crafty.load(['assets/16x16_forest_1.gif', 'assets/hunter.png'],
            function() {
                Crafty.sprite(16, 'assets/16x16_forest_1.gif', {
                    spr_tree: [0, 0],
                    spr_bush: [1, 0],
                    spr_village: [0, 1],
                });
                Crafty.sprite(16, 'assets/hunter.png', {
                    spr_player: [0, 2],
                }, 0, 2);

                Crafty.scene('Game');
            });
    });
