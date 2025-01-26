//Write a function to print all the values of a given object

//Created the employee object using the const keyword and assigned the values for it. 
const employee ={
    Name : "Manikanta",
    Age : 24,
    Designation: "Web-developer",
    Experience: 3
};

//extracting the object values using "for in" loop method.

for (let key in employee){
    console.log(employee[key]);
}

