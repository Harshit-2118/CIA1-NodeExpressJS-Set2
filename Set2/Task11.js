// Task 11: Hospital Patient System — Calculate a Derived Value
function checkPatientStatus(name, age) {
    if (age < 18) {
        return name + " is a Minor.";
    } else {
        return name + " is an Adult.";
    }
}

// Call the function
let result = checkPatientStatus("John Doe", 45);
console.log(result);

// Call with another patient
console.log(checkPatientStatus("Tommy", 12));
