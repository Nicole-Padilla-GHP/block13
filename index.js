// First define a variable for each if statement
const IAmAString = "I am a string";

// Use If... else statement to print expected value into console
if (IAmAString) {
    console.log(true);
}

// Repeat for each value being tested 
const boolean = "false";
if (boolean) {
    console.log("The boolean value false is falsy")
}

const nul = "The null value is falsy"
if (nul) {
    console.log("The null value is falsy")
}

const a = "undefined";
    if (a) {
        console.log("undefined is falsy")
    }

    const zero = 0;
    if (zero) {
        console.log("The number 0 is falsy (the only falsy number)")
    }

    const str = " "
        if (str) {
            console.log("The empty string is falsy (the only falsy string)")
        }


// Number Line

// Define the variables for each value that is being tested 
let num1 = 50
let num2 = 51
let sum = num1 + num2;

// Use if statement and comparison operators to test each variable 
if (sum > 100) {
    console.log(sum + " " + "is greater than 100")
}

// Repeat

let num3 = 99
let num4 = -2
let sum1 = num3 + num4
if (sum > 0) {
    console.log(sum + " " + "is greater than 0")
}

let num5 = 0
let num6 = 101
let sum2 = num5 + num6
if (sum2 > 100) {
    console.log(sum + " " + "is greater than 100")
}

let num7 = 500
let num8 = -500
let sum3 = num7 + num8
if (sum3 == 0) {
    console.log(sum3 + " " + "is equal to 0")
}

let num9 = -1000
let num10 = 0
let sum4 = num9 + num10
if (sum4 < 0) {
    console.log(sum4 + " " + "is a negative number")
}

let num11 = -5
let num12 = 0
let sum5 = num11 + num12
if (sum5 < 0) {
    console.log(sum5 + " " + "is a negative number")
}

// Greater than or equal to 5

// Only one condition to test:  If both number are greater than or equal to 5 print true

if (num13 >= 5 && num14 >=5) {
    console.log(true)
} else {
    cosnoloe.log(false)
}

// Test each value to test numbers 
let num13 = 5
let num14 = 6


