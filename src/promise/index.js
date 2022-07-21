const promise = new Promise((resolve, reject) => {
    resolve("todo está OK");
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} in the farm.`);
    } else {
        reject("There aren't any cows in the farm.");
    }
});

countCows.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("Finally");
});