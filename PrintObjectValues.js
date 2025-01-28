//Write a function to print all the values of a given object

function printObjectValues() {
  const employee = {
    Name: "Manikanta",
    Age: 24,
    Designation: "Web-developer",
    Experience: 3,
  };

  //extracting the object values using "for in" loop method.

  for (let key in employee) {
    console.log(employee[key]);
  }
}

printObjectValues();
