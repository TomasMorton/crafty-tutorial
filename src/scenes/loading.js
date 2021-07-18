const assets = [
    'assets/16x16_forest_2.gif',
    'assets/hunter.png',
    'assets/door_knock_3x.mp3',
    'assets/door_knock_3x.ogg',
    'assets/door_knock_3x.aac',
    'assets/board_room_applause.mp3',
    'assets/board_room_applause.ogg',
    'assets/board_room_applause.aac',
    'assets/candy_dish_lid.mp3',
    'assets/candy_dish_lid.ogg',
    'assets/candy_dish_lid.aac'
];

Crafty.scene('Loading',
    function() {
        const displayLoadingMessage = function() {
            Crafty.e('2D, DOM, Text')
                .text('Loading, please wait...')
                .attr({ x: 0, y: Game.height() / 2 - 24, w: Game.width() })
                .css($text_css);
        };

        const addSprites = function() {
            Crafty.sprite(16, 'assets/16x16_forest_2.gif', {
                spr_tree: [0, 0],
                spr_bush: [1, 0],
                spr_village: [0, 1],
                spr_rock: [1, 1],
            });
            Crafty.sprite(16, 'assets/hunter.png', {
                spr_player: [0, 2],
            }, 0, 2);
        };

        const addAudio = function() {
            Crafty.audio.add({
                knock: ['assets/door_knock_3x.mp3',
                    'assets/door_knock_3x.ogg',
                    'assets/door_knock_3x.aac'],
                applause: ['assets/board_room_applause.mp3',
                    'assets/board_room_applause.ogg',
                    'assets/board_room_applause.aac'],
                ring: ['assets/candy_dish_lid.mp3',
                    'assets/candy_dish_lid.ogg',
                    'assets/candy_dish_lid.aac']
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
