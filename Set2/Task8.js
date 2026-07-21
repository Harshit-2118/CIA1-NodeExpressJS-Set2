// Task 8: Hospital Patient System — Add & Find
let patients = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 55 },
    { name: "Diana", age: 30 }
];

// Add a new patient using push()
let newPatient = { name: "Eve", age: 70 };
patients.push(newPatient);
console.log("After push:", patients.map(p => p.name));

// Find the patient with the highest age
let maxAge = -1;
let oldestPatient = null;

for (let i = 0; i < patients.length; i++) {
    if (patients[i].age > maxAge) {
        maxAge = patients[i].age;
        oldestPatient = patients[i];
    }
}

console.log("Oldest Patient:", oldestPatient.name, "| Age:", oldestPatient.age);
