const prompt = require('prompt-sync')();

let temperature = prompt("enter the temperature: ");
if (temperature > 20) {
    console.log("it's warm outside");
} else {
    console.log("it's cool outside");
}