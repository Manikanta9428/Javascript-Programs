//write a function to calculate product of all the elements in the array

function calProduct(arr) {
  return arr.reduce((acc, el) => {
    return acc * el;
  });
}

console.log(calProduct([1, 2, 3, 4, 5]));
