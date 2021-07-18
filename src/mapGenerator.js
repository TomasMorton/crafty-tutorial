const objects = Object.freeze({
    empty: '_',
    bush: 'B',
    player: 'P',
    tree: 'T',
    village: 'V',
});

const getWidth = (map) => map.length;
const getHeight = (map) => map[0].length;

const isEdgeOfMap = function(map, x, y) {
    return x === 0 ||
        x === getWidth(map) - 1 ||
        y === 0 ||
        y === getHeight(map) - 1;
};

const generateEmptyMap = function(width, height) {
    const map = new Array(width);

    for (let x = 0; x < width; x++) {
        map[x] = new Array(height);
        for (let y = 0; y < height; y++) {
            map[x][y] = objects.empty;
        }
    }

    return map;
};

const addToMap = function(map, x, y, object) {
    if (map[x][y] === objects.empty) {
        map[x][y] = object;
    }
};

const addObstacles = function(map) {
    for (let x = 0; x < getWidth(map); x++) {
        for (let y = 0; y < getHeight(map); y++) {
            if (isEdgeOfMap(map, x, y)) {
                addToMap(map, x, y, objects.tree);
            } else {
                if (Math.random() < random.bushFrequency) {
                    addToMap(map, x, y, objects.bush);
                }
            }
        }
    }
};

const addVillages = function(map) {
    let numberOfVillages = 0;
    for (let x = 0; x < getWidth(map); x++) {
        for (let y = 0; y < getHeight(map); y++) {
            if (Math.random() < random.villageFrequency) {
                addToMap(map, x, y, objects.village);
                numberOfVillages++;

                if (numberOfVillages >= objectives.maxVillages) {
                    return;
                }
            }
        }
    }
};

const addPlayer = function(map) {
    addToMap(map, 5, 5, objects.player);
};

const generateMap = function(width, height) {
    const map = generateEmptyMap(width, height);

    addPlayer(map);
    addObstacles(map);
    addVillages(map);

    return map;
};
