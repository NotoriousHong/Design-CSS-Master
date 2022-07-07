const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    console.log("Please write a real postive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age === 100) { // <- in here, === opposite is !==
    console.log("wow you are wise");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise and then drink little bit");
} else {
    console.log("Drinking alcohol would be really critical problme at your age");
}

