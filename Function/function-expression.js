//its a way  to define function inside an expression &assign it to a variable
//key characters
//1.anonymous or naamed
//2.not hoisted
//3.can be used as argument
//4.can be assigned to vaariable/object
const sayHello = function(){
    console.log("Hello");
}
sayHello();
//------example for object-----//
const math = {
    add: function(a,b){  //parameter
        return a + b;
    }

}
console.log(math.add(5,3)); //argument
