function checkOddEven(...numbers) {
  numbers.forEach(num => {
    if (num % 2 === 0) {
      console.log(`${num} is Even`);
    } else {
      console.log(`${num} is Odd`);
    }
  });
}

// Example usage
checkOddEven(1, 2, 3, 4, 5, 6);