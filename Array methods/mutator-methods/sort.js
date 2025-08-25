// sort () - sorts elments of an aaray in ascending and descending order //

let num = [10,1,20,2]
num.sort();
console.log(num);


//numeric sort ascending order //

let numbers = [4,2,5,1,3]
numbers.sort((a,b) => a - b);
console.log(numbers);

// numeric sort descending order //

let numbers1 = [4,3,2,1,5]
numbers1.sort((a,b) => b - a);
console.log(numbers1);

let fruits = ['dates', 'orange', 'apple', 'banana'];
fruits.sort();
console.log(fruits);

let fruits1 = ['banana', 'orange', 'apple', 'dates'];
fruits1.sort((a,b) => b.localeCompare(a));
console.log(fruits1);



