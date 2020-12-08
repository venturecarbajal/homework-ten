// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, githubUserName) {
    super(name, 2, 'engineer@mail.com');
    this.githubUserName = githubUserName;
  }

  getGithub() {
    return this.githubUserName;
  }

  getRole() {
    return 'Engineer';
  }
}

module.export = Engineer;
