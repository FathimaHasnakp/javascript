// const promise = new promise((resolve, reject)) => {
//     //asynchronous operation 
// }

//resolve called when the function is successful//
//reject called when the function is failure

//.then = execute the promise is resolve
//.catch = execute the promis is rejected
//.fainaly = execute if the promis is resolved or rejected


let myPromise = new Promise((resolve, reject) => { //create promise object//
    let success = true;


    setTimeout(() => {
        if (success) {
            resolve('Promise resolved successfully!')
        } else {
            reject('promise rejected!')
        }
    }, 2000)
})

myPromise 
    .then(result => console.log(result)) // then if the promise is resolved//
    .catch(error => console.log(error)) //then if the promise is rejected//
    .finally(()=> console.log("Promise execution finished!")) //always executed//