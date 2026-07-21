// Task 9: Hospital Patient System — Remove & Sort
let patients = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 55 },
    { name: "Diana", age: 30 },
    { name: "Eve", age: 70 }
];

// Remove last patient using pop()
let removed = patients.pop();
console.log("Removed patient:", removed.name);
console.log("After pop:", patients.map(p => p.name));

// Sort patients by age (ascending)
patients.sort((a, b) => a.age - b.age);
console.log("After sorting by age:");
for (let p of patients) {
    console.log(p.name, "-", p.age);
}
