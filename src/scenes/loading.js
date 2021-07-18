const assets = [
    'assets/16x16_forest_1.gif',
    'assets/hunter.png',
    'door_knock_3x.mp3',
    'door_knock_3x.ogg',
    'door_knock_3x.aac'
];

Crafty.scene('Loading',
    function() {
        const displayLoadingMessage = function() {
            Crafty.e('2D, DOM, Text')
                .text('Loading...')
                .attr({ x: 0, y: Game.height() / 2 - 24, w: Game.width() })
                .css($text_css);
        };

        const addSprites = function() {
            Crafty.sprite(16, 'assets/16x16_forest_1.gif', {
                spr_tree: [0, 0],
                spr_bush: [1, 0],
                spr_village: [0, 1],
            });
            Crafty.sprite(16, 'assets/hunter.png', {
                spr_player: [0, 2],
            }, 0, 2);
        };

        const addAudio = function() {
            Crafty.audio.add({
                knock: ['assets/door_knock_3x.mp3',
                    'assets/door_knock_3x.ogg',
                    'assets/door_knock_3x.aac']
            });
        };

        displayLoadingMessage();
        Crafty.load(assets,
            function() {
                addSprites();
                addAudio();
                Crafty.scene('Game');
            });
    });
