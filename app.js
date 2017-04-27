// Employe A Object with liter notation.
var empA = {
  name: 'Rajendhar M',
  age : 30,
  salary: 11000,
  address: {
    city: 'Mumbai1',
    state: 'Maharashtra1',
    pincode: '400708',
  }
}

// Employe B Object with liter notation.
var empB = {
  name: 'Rajendhar Ma',
  age : 31,
  salary: 12000,
  address: {
    city: 'Mumbai2',
    state: 'Maharashtra2',
    pincode: '400704',
  }
}

// Employe C Object with liter notation.
var empC = {
  name: 'Rajendhar Mam',
  age : 32,
  salary: 13000,
  address: {
    city: 'Mumbai3',
    state: 'Maharashtra3',
    pincode: '400703',
  }
}

// Employe D Object with liter notation.
var empD = {
  name: 'Rajendhar Mami',
  age : 33,
  salary: 14000,
  address: {
    city: 'Mumbai4',
    state: 'Maharashtra4',
    pincode: '400702',
  }
}

// Employe E Object with liter notation.
var empE = {
  name: 'Rajendhar Mamid',
  age : 34,
  salary: 15000,
  address: {
    city: 'Mumbai5',
    state: 'Maharashtra5',
    pincode: '400701',
  }
}

// Array to store employee objects.
var empArray = [empA, empB, empC, empD, empE];

// Print empC properties in console,
console.log(empArray[2].name);
console.log(empArray[2].age);
console.log(empArray[2].salary);
console.log(empArray[2].address.state);
console.log(empArray[2].address.city);
console.log(empArray[2].address.pincode);

