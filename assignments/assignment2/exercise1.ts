/*
Exercise 1: Basic Arithmetic Operations
Create a chain of promises to perform and log the result of three arithmetic operations in sequence. 
Start with a number, then add 5, multiply by 3, and finally subtract 2.
*/


const addFive = (startValue) => { 
    return new Promise((resolve, reject) => {
    startValue += 5;
    resolve(startValue);
});
}

const multiplyByThree = (result) => {
    return new Promise((resolve, reject) => {
        result *= 3;
        resolve(result);
    });
};

const subtractTwo = (result) => {
    return new Promise((resolve, reject) => {
        result -= 2;
        resolve(result);
    });
};

// Chain the promises
addFive(10)
    .then(multiplyByThree)
    .then(subtractTwo)
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });