console.log("typescript is available");

// classes and objects in the typescript

// creating a class
/* class Person {
  // one way to write a modifiers

  // private name: string;
  // age: number;
  //readonly city: string = "";

  // another way to write a modifiers for cleaner syntax.

  constructor(private name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

// creating an instance of the class

const myName = new Person("pritesh", 22);
myName.age = 24;
//myName.city = "Kopargaon"; */

// getters and setters in typescript

class Person {
  constructor(private _name: string, protected _age: number) {}

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(value: string) {
    if (value.length > 5) {
      this._name = value;
    } else {
      throw new Error("Name should be at least 6 characters long");
    }
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value >= 18) {
      this._age = value;
    } else {
      throw new Error("Age should be at least 18");
    }
  }
}

// you can use getter for get some private values from class and setter for setting it , also its not neccesary to use both at a time.

// inheritance stuff

class Employee extends Person {
  isEmloyeed: boolean = true;

  //as soon as i do age as protected it gives me acces as this class is inherited from above class so this is a speciality of the protected constructor.
  isAgeAccess() {
    this._age = 25;
  }
}
