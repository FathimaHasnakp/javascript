// same as reduce but start from end of the array //

let nums = [10, 20];
let result = nums.reduceRight((acc, curr) => acc - curr, 10);
console.log(result);
