//Program: function to calculate average of two numbers and also the product and return as an Object

function numberCalculation(n1, n2) {
  let average = (n1 + n2) / 2;
  let product = n1 * n2;

  let returnedObject = Object.assign(
    {},
    { Average: average, Product: product }
  );
  return returnedObject;
}

console.log(numberCalculation(5, 2));
