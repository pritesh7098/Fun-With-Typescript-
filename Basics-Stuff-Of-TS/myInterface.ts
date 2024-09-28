// interface is just like a type aliases but with some features addon
// adding to it interfaces are mostly depend on usecases in most of the projects we can use it and sometime we use the types as well
// so we can say that interfaces are just like defining a schema type and make the code simpler.
interface User {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];
  greet(): string; // this is a function which should be implemented in the class
}

const userPritesh: User = {
  name: "Pritesh",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
  },
  hobbies: ["Reading", "Coding"],

  greet() {
    return `Hello, my name is ${this.name}!`;
  },
};

// extend user interface

interface Employee extends User {
  department: string;
  salary: number;
}

const employeeJohn: Employee = {
  name: "John Doe",
  age: 30,
  address: {
    street: "456 Elm St",
    city: "Los Angeles",
  },
  hobbies: ["Painting", "Cooking"],
  department: "IT",
  salary: 50000,
  greet() {
    return `Hello, my name is ${this.name}! I work in ${this.department}.`;
  },
};
