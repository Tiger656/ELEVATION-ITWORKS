
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

delay(2000)
    .then(() => {
        console.log("Hello");
        return delay(1000);
    })
    .then(() => {
        console.log("World!");
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });