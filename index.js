// Write your solution in this file!
// Example employee object
let employee = {
  name: "John Doe",
  role: "Engineer",
  salary: 50000
};

// 1. Non-destructive function
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Use object spread syntax to create a new object (a clone) and add/update the key-value pair
  return {
      ...employee,  // This creates a new object with all the original key-value pairs
      [key]: value  // Adds or updates the key-value pair
  };
}
// 1. Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;  // Modify the original employee object
  return employee;        // Return the updated employee
}

// 2. Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };  // Create a clone of the employee object
  delete newEmployee[key];  // Remove the specified key from the cloned object
  return newEmployee;       // Return the new employee object without the key
}

// 3. Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];  // Delete the key from the original employee object
  return employee;       // Return the modified employee object
}


// Example usage

// Non-destructive update
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "department", "HR");

// Output the new updated employee (it has the new key-value pair)
console.log("Updated Employee:", updatedEmployee);  // { name: 'John Doe', role: 'Engineer', salary: 50000, department: 'HR' }

// Ensure that the original employee object is unchanged
console.log("Original Employee:", employee);  // { name: 'John Doe', role: 'Engineer', salary: 50000 }

// Destructive update
console.log("Original Employee:", employee);  // { name: 'John Doe', role: 'Engineer', salary: 50000 }
destructivelyUpdateEmployeeWithKeyAndValue(employee, "department", "Finance");
console.log("After Destructive Update:", employee);  // { name: 'John Doe', role: 'Engineer', salary: 50000, department: 'Finance' }

// Non-destructive delete
let newEmployee = deleteFromEmployeeByKey(employee, "salary");
console.log("New Employee after Non-Destructive Delete:", newEmployee);  // { name: 'John Doe', role: 'Engineer', department: 'Finance' }
console.log("Original Employee after Non-Destructive Delete:", employee);  // Original remains the same

// Destructive delete
destructivelyDeleteFromEmployeeByKey(employee, "department");
console.log("After Destructive Delete:", employee);  // { name: 'John Doe', role: 'Engineer', salary: 50000 }
