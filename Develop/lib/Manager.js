// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// create new class using extend from Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = 100;
  }

  getRole() {
    return 'Manager';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

const testValue = 100;
const e = new Manager('Foo', 1, 'test@test.com', testValue);

// console.log(Manager);
module.exports = Manager;
