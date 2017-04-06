var stone,
    scissors,
    paper,
    lizard,
    spock,
    set = [];

stone = {
    name: 'stone',
    strong: [spock, paper],
    weak: [lizard, scissors]
};

scissors = {
    name: 'scissors',
    strong: [spock, stone],
    weak: [lizard, paper]
};

paper = {
    name: 'paper',
    strong: [stone, spock],
    weak: [scissors, lizard]
};

lizard = {
    name: 'lizard',
    strong: [stone, scissors],
    weak: [spock, paper]
};

spock = {
    name: 'spock',
    strong: [lizard, paper],
    weak: [scissors, stone]
};


set.push(stone, scissors, paper, lizard, spock);

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function start(a) {
    if (a) {
        enemy = set[rand(0, set.length - 1)];
        if (enemy.strong[0].name === a || enemy.strong[1].name === a) {
            console.log(enemy.name, 'lose', ', You ', a, ' won!');
        } else if (enemy.weak[0].name === a || enemy.weak[1].name === a) {
            console.log('You ', a, ' lose', enemy.name, 'Won');
        } else {
            console.log('bug.');
        }
    }
}
