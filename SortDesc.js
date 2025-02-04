// write a function to sort the elements of the array in decreasing order

function sortDesc(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDesc([9, 3, 10, 2, 15]));
