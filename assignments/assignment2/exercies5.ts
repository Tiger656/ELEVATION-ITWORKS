/*
Exercise 5: Error Handling
Create a promise chain that attempts to parse JSON data. Use a try/catch block within a 
.then() method to handle JSON parsing errors. If successful, log the parsed object; if an error occurs, log "Invalid JSON".
*/

const parseJSONData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const parsedData = JSON.parse(data);
            resolve(parsedData);
        } catch (error) {
            reject("Invalid JSON");
        }
    });
};

const jsonData = '{"name": "John", "age": 30}';

parseJSONData(jsonData)
    .then(parsedData => {
        console.log("Parsed JSON:", parsedData);
    })
    .catch(error => {
        console.log(error);
    });