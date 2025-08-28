//useful when  comparing a single value against multiple value //
const prompt = require('prompt-sync')();
let day = prompt ("enter the day :");
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;

    case "friday":
        console.log("End of work week");
        break;

    case "sunday":
        console.log("Weekend");
        break;
    
    default:
        console.log("Regular day");
        
}