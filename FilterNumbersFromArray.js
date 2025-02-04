// write a function that returns all the numbers in the given array
// input array can have any type of values

function filterNumbers(arr) {
  const output = [];
  arr.filter((el) => {
    typeof el === "number" ? output.push(el) : "Nan";
  });

  return output;
}

let arr = [1, 4, "Mani", true, { name: "Aditya" }, 2, 3, 5];

console.log(filterNumbers(arr));
