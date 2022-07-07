const player = {
    name: "Jeseok",
    age: 97,
};

console.log(player);
player.name = "jhong"

console.log(player);
player.sexy = "soon"

console.log(player, console);

//

const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
};

calculator.add(5, 1);


// under line is task

const calcultor = {
    add: function(a, b) {
        console.log(a + b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    square: function(a, b) {
        console.log(a ** b)
    },
    minus: function(a, b) {
        console.log(a - b)
    },
    multiple: function(a, b) {
        console.log(a * b)
    },
};

calcultor.add(7, 8)
calcultor.square(8, 8)