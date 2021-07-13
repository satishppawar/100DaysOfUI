var global_student = {
    firstName: "Satish",
    lastName: "Pawar",
    age: 25,
    enrollmentNumber: 4332434,
    address: "Pune"
}
function showLocalStudent() {
    document.write(" <br/>Student global_student::firstName name is " + global_student.firstName);
    var local_student = {
        firstName: "Mahesh",
        lastName: "Patil",
        age: 20,
        enrollmentNumber: 11111111,
        address: "Solapur"
    }

    document.write(" <br/> Demo of local_student ");
    document.write(" <br/> Student local_student::lastName name is " + local_student.lastName);
  
}

function printGlobalStudent() {

    document.write(" <br/> Demo of global_student ");
    document.write(" <br/> Student global_student::lastName name is " + global_student.lastName);
    //document.write(" <br/> Student in show() is "+local_student.firstName);
}

showLocalStudent();
printGlobalStudent();