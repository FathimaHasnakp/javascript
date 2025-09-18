//one class can inherit propertice and methods from another class
//base 
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){  //method
         console.log(`${this.name} makes a sound`);
         
    }
}

//derived class inherits from animal
class Dog extends Animal{  //extend -keyword in inherit
    constructor(name, breed){
        super(name);//call the parentclass constructure
        this.breed = breed;
    }
//override speak method(polymorphysm) forms
    speak(){
        console.log(`${this.name} ${this.breed} barks`);
        
    }

}

const dog = new Dog("Rex", "Germen shepherd")
dog.speak();