// Task 13: Hospital Patient System — Format Output with Template Literals
let patient = {
    name: "John Doe",
    age: 45,
    disease: "Hypertension",
    roomNumber: 101,
    doctor: "Dr. Smith"
};

// Use template literals for formatted output
let summary = `
========== PATIENT SUMMARY ==========
Name       : ${patient.name}
Age        : ${patient.age} years
Disease    : ${patient.disease}
Room No.   : ${patient.roomNumber}
Doctor     : ${patient.doctor}
=====================================
`;

console.log(summary);
