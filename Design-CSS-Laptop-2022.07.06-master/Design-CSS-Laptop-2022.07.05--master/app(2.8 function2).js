function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("Jeseok", 25);
sayHello("Minchae", 25)
sayHello("lynn", 21)

//

function plus(a, b) {
    console.log(a + b);
}
plus(8, 60);

//

function divide(a, b) {
    console.log(a / b);
}
divide(60, 4);

//

const player = {
    name : "Jeseok",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("lynn");
