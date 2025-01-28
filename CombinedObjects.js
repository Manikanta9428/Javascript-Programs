//Program: Function that takes one or more objects and returns combined properties from all

function combinedObjects(employee, student) {
  const returnedObject = Object.assign({}, employee, student);
  return returnedObject;
}

const employee = { Name: "Aditya", Designation: "developer", salary: "30000" };
const student = { Age: 15 };

console.log(combinedObjects(employee, student));
