const age = parseInt(prompt("How old are you?"));


// isNaN, boolean -> number : false, string : true

if(isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age");
}
