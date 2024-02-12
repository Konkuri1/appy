// alert('We are Beta');
console.log('We are Beta');

var firstname = 'Evarest';
var age = 3;

let lastname = 'Konkuri';
const boilingWaterTemperature = 100;

console.log(firstname, age, lastname, boilingWaterTemperature)

//let Konkuri = 'Maalma';
//const.log = (Konkuri)

var firstname = 'BaLLLoW';
console.log(firstname)

let bottle = {
    color: "blue",
    volume: 580,
    canStoreWater: true,
    storeWater: null,
}

// conditional Statements (If/Else)
if(age>=18) {
    console.log('You are eligible.');
} else {
    console.log('wait till you are 18.');
}

//Loops (For): Used when an action needs to be done multiple times, instead of repeating the code
for(let i = 1; i != 18; i++) {
console.log('I am at index:', i);
}
//where i stands for index. The above means, start at i until it's less than 18, that is 17.
// '++' or '--' for increment and decrement respectively. '!' means not.
//it can also be written as console.log( 'The value if i is', i)

// Function : (Defining) It's used to recall a code multiple times.
function isEligible() {
    if (age >= 18) {
        return ('You are eligible.');
    } else {
        return ('wait till you are 18.');
    }
}
   
    // Function - Invoking
    // let the output - isEligible
    console.log( isEligible()); // calling the function and printing the returned value.
    alert(isEligible()); // displaying the alert box with the returened value
    document.body.innerHTML = isEligible(); // Adding the returned value to the HTML page
