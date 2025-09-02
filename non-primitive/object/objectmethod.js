//you can store function inside objects -these are called//

const car = {
    brand :"Toyota",
    start: function(){
        console.log("Car start");
        
    }
}
car.start();

// "thisi keyword =its refers the object its self.(used to acces properties)//

const person = {
    name:"hsna",
    age:20,
    greet: function(){
        console.log(`hello,my name is ${this.name}`)
        
        
    }
}
person.greet();