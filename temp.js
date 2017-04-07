var stone,
    scissors,
    paper,
    lizard,
    spock,
    set = [];

stone = {
    name: 'stone',
    strong: ['spock', 'paper'],
    weak: ['lizard', 'scissors']
};

scissors = {
    name: 'scissors',
    strong: ['spock', 'stone'],
    weak: ['lizard', 'paper']
};

paper = {
    name: 'paper',
    strong: ['scissors', 'lizard'],
    weak: ['stone', 'spock']
};

lizard = {
    name: 'lizard',
    strong: ['stone', 'scissors'],
    weak: ['spock', 'paper']
};

spock = {
    name: 'spock',
    strong: ['lizard', 'paper'],
    weak: ['scissors', 'stone']
};


set.push(stone, scissors, paper, lizard, spock);

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function start(a) {

    if (a) {

        enemy = set[rand(0, set.length - 1)];

        if (a !== enemy.name) {

            if (enemy.strong.indexOf(a) > -1) {

                console.log(enemy.name, 'lose', ', You ', a, ' won!');

            } else if (enemy.weak.indexOf(a) > -1) {

                console.log('You ', a, ' lose', enemy.name, 'Won');

            } else {
                console.log('Bug your:' + a +'\n Enemy:' + enemy.name);
            }
            
        } else {

            console.log('Draw (' + enemy.name + ' & ' + a + ')');

        }

    }

}
