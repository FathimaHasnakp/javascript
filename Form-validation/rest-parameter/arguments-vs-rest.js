//compare argument vs rest parameters

function showArgs(){
    console.log(arguments);//not an array
    
}

showArgs(1,2,3);

function showRest(...arg){
    console.log(arg);//real array
    
}
showRest(1,2,3);