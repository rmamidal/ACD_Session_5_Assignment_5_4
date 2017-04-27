// Declare and define Object with nested Object in literal notation and create.
var employee = {
  name: 'Rajendhar Mamidala',
  age : 31,
  salary: 10000,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400708',
  }
}

// Print object properties and nested Object properties in console.
console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.address.city);
console.log(employee.address.state);
console.log(employee.address.pincode);