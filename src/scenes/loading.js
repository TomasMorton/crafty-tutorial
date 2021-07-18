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
        Crafty.load(['assets/16x16_forest_1.gif'], function() {
            // Once the image is loaded...

            // Define the individual sprites in the image
            // Each one (spr_tree, etc.) becomes a component
            // These components' names are prefixed with "spr_"
            //  to remind us that they simply cause the entity
            //  to be drawn with a certain sprite
            Crafty.sprite(16, 'assets/16x16_forest_1.gif', {
                spr_tree: [0, 0],
                spr_bush: [1, 0],
                spr_village: [0, 1],
                spr_player: [1, 1]
            });

            // Now that our sprites are ready to draw, start the game
            Crafty.scene('Game');
        });
    });
