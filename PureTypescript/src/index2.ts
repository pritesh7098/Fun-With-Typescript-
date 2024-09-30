// interfaces and real world implementations with oops concepts.
// implements meaning : it implements the interface nd can only be use with the interface.

// defining an interface for a user

interface User {
  name: string;
  age: number;
  email: string;
  address: string;
}

// implementing the user interface

class RealUser implements User {
  name: string;
  age: number;
  email: string;
  address: string;

  constructor(name: string, age: number, email: string, address: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }
}

class FinalDetails implements User, RealUser {
  // implementing all properties and methods from the User interface and RealUser class

  name: string;
  age: number;
  email: string;
  address: string;

  constructor(name: string, age: number, email: string, address: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }

  // implementing a method specific to FinalDetails class

  printUserDetails() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Address: ${this.address}`
    );
  }
}

