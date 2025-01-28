//Program: Write a function is exists to check given property is in object or not.

function existanceCheck() {
  const obj = { name: "Mani", age: 24 };
  return "name" in obj;
}

console.log(existanceCheck());
