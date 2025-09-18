const person = {
    name: "abi",age : 20 ,city : "chennai"
};
//basic destructuring
const {name,age} = person;
console.log(name);
console.log(age);

//rename variables
const {city : location} = person;
console.log("location: " , location);

//default values
const {gender = 'female'} = person;
console.log(gender);

console.log("person..", person);