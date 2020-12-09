// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, GitHubUser) {
    super(name, id, email);
    this.github = GitHubUser;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

const testValue = 'GitHubUser';
const e = new Engineer('Foo', 1, 'test@test.com', testValue);

module.exports = Engineer;
