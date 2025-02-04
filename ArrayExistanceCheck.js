// write a function to find if given element exists in array or not

function isExists(arr, elToFind) {
  return arr.includes(elToFind);
}

console.log(isExists([1, 2, 3, 4, 5], 3));
