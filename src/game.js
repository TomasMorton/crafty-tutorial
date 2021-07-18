Game = {
    map: {
        width: 24,
        height: 16,
        tile: {
            width: 16,
            height: 16
        }
    },

    width: function() {
        return this.map.width * this.map.tile.width;
    },

    height: function() {
        return this.map.height * this.map.tile.height;
    },

    start: function() {
        Crafty.init(Game.width(), Game.height());
        Crafty.background(colours.background);
        Crafty.scene('Loading');
    }
};

$text_css = {
    'font-size': '24px',
    'font-family': 'Arial',
    'color': 'red',
    'text-align': 'center'
};
