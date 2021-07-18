Crafty.scene('Game',
    function() {
        const addTree = function(x, y) {
            Crafty.e('Tree').at(x, y);
        };

        const addBush = function(x, y) {
            Crafty.e('Bush').at(x, y);
        };

        const addPlayer = function() {
            Crafty.e('Player').at(5, 5);
        };

        const addVillage = function(x, y) {
            Crafty.e('Village').at(x, y);
        };

        const renderObject = function(x, y, object) {
            switch (object) {
                case objects.empty:
                    return;
                case objects.bush:
                    addBush(x, y);
                    break;
                case objects.player:
                    addPlayer(x, y);
                    break;
                case objects.tree:
                    addTree(x, y);
                    break;
                case objects.village:
                    addVillage(x, y);
                    break;
                default:
                    throw `The rendering of object ${object} has not been implemented`;
            }
        };

        const renderMap = function(map) {
            for (let x = 0; x < map.length; x++) {
                for (let y = 0; y < map[x].length; y++) {
                    const object = map[x][y];
                    renderObject(x, y, object);
                }
            }
        };

        const map = generateMap(Game.map.width, Game.map.height);
        renderMap(map);

        this.show_victory = this.bind('VillageVisited', function() {
            if (Crafty('Village').length === 0) {
                Crafty.scene('Victory');
            }
        });
    },
    function() {
        this.unbind('VillageVisited', this.show_victory);
    });
