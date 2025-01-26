//Write a function to print all the keys of a given object

function printObjectKeys() {
  const employee = {
    Name: "Manikanta",
    Age: 24,
    Designation: "Web-developer",
    Experience: 3,
  };

  //extracting the object keys using "for in" loop method.

  for (let key in employee) {
    console.log(key);
  }
}

printObjectKeys();
