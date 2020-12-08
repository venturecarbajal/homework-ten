// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// create new class using extend from Employee class
class Manager extends Employee {
  constructor(name, officeNumber) {
    super(name, 1, 'manager@mail.com');
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

console.log(Manager);
module.exports = Manager;
