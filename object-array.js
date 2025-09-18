const students = [
    {name: 'hasna', age: 20, grade:'A'},
    {name: 'anu', age:18, grade: 'B'},
    {name: 'afi', age:15, grade: 'C'}
]
console.log(students[0].name);
console.log(students[1].grade);


//lopping through object array//

students.forEach(stdnt=> {
    console.log(`${stdnt.name} is ${stdnt.age} years old `);
    
})
