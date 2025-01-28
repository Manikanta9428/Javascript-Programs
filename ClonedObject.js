//Program: Create a function that accepts object and returns the clone of it.

function clonedObject(obj) {
  let clone = {};

  for (let key in obj) {
    clone[key] = obj[key];
  }

  return clone;
}

const obj = { name: "Mani", age: 24 };

console.log(clonedObject(obj));
