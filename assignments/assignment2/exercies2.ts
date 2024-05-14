/*
Exercise 2: String Manipulation
Write a promise chain that takes a string, converts it to uppercase, then reverses it, and finally appends the string "-finished" at the end. Log the final result.
Use `then` for every phase
*/
const convertToUppercase = (str) => {
    return new Promise((resolve, reject) => {
        resolve(str.toUpperCase());
    });
};

const reverseString = (str) => {
    return new Promise((resolve, reject) => {
        resolve(str.split('').reverse().join(''));
    });
};

const appendFinished = (str) => {
    return new Promise((resolve, reject) => {
        resolve(str + "-finished");
    });
};

convertToUppercase("hello")
    .then(reverseString)
    .then(appendFinished)
    .then(result => {
        console.log("Final Result:", result);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });