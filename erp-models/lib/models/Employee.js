module.exports = (function () {

  function Employee(options) {
    this._id = options._id;
    this._rev = options._rev;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.dateOfHire = options.dateOfHire;
  }

  Employee.prototype.getFullName = function () {
    return this.lastName + ", " + this.firstName;
  }

  return Employee;

})();
