// write a function that accepts an array and returns string with given delimeter

function arrToString(arr, delimeter) {
  return arr.join(delimeter);
}

console.log(arrToString([1, 2, 3, 4, 5], "%"));
