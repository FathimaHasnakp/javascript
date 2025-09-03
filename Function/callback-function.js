// function that are  passed as arguments to other function//
//asynchronous operation
//avoid blocking code execution

function greetUser(name){
    console.log(`hello, ${name}`);
    
}

//this function takes another function (callback)
function getUserInput(callback){
    const name = "Hasna";
    callback(name);

}
//getuserinput pass greetUser as a callback
getUserInput(greetUser);