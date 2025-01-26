//Function to check if given property exists in the passed object or not

function checkingObjectExists() {
  const user = { Name: "Manikanta", Age: 24, access: "Granted" };

  //chekcing whether the property exists by using “in” operator

  //if it exists it returns true otherwise false
  console.log("Name" in user);
}

checkingObjectExists();
