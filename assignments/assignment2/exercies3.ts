/*
Exercise 3: Array Filtering and Mapping
Write a function compareToNum that takes a number as an argument and returns a Promise
that tests if the value is less than or greater than the value 10 (reject otherwise)

compareToNum({num:10,isAboveNum:5}) //will reject
.then(result => console.log(result))
.catch(error => console.log(error))
compareToNum({num:10,isAboveNum:12}) //will resolve
.then(result => console.log(result))
.catch(error => console.log(error))
*/

function compareToNum({ num, isAboveNum }) {
    return new Promise((resolve, reject) => {
        if (isAboveNum <= 10) {
            reject(`${isAboveNum} is less or equal than 10`);
        } else if (isAboveNum > 10) {
            resolve(`${isAboveNum} is greater than 10`);
        }
    });
}

// Test cases
compareToNum({ num: 10, isAboveNum: 5 })
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToNum({ num: 10, isAboveNum: 12 })
    .then(result => console.log(result))
    .catch(error => console.log(error));