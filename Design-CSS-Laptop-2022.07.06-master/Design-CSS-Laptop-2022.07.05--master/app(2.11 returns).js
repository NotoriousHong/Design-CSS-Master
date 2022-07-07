const calcultor = {
    add: function(a, b) {
        return a + b;
    },
    divide: function(a, b) {
        return a / b;
    },
    square: function(a, b) {
        return a ** b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiple: function(a, b) {
        return a * b;
    },
};

const plusResult = calcultor.add(3, 4);

console.log(plusResult);

// under code shows difference is what between 'return' and 'console' when you are using function

const addResult = calcultor.add(2, 3)
const minusResult = calcultor.minus(addResult, 10)
const squareResult = calcultor.square(10, minusResult)
const divideResult = calcultor.divide(squareResult, addResult)
const multipleResult = calcultor.multiple(divideResult, minusResult)

// under code has no realtionship with above code, just look at how code going through

const age = 97;
function calculateKrAge(ageOfForeigner) {
   return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

