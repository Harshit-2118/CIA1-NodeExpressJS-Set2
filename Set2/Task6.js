// Task 6: Hospital Patient System — Iterate Over Records
let patients = [
    { name: "Alice", age: 25, disease: "Fever" },
    { name: "Bob", age: 40, disease: "Diabetes" },
    { name: "Charlie", age: 55, disease: "Hypertension" },
    { name: "Diana", age: 30, disease: "Allergy" }
];

for (let i = 0; i < patients.length; i++) {
    console.log("Patient", (i + 1), ":", patients[i].name, 
                "| Age:", patients[i].age, 
                "| Disease:", patients[i].disease);
}
