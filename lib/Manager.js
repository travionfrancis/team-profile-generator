// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// requires the Employee.js file
const Employee = require("./Employee.js");

// Going to help me with understanding the Syntax from the preview I looked at
// Using both W3Schools, even though I know that MDN is superior 
// https://www.w3schools.com/jsref/jsref_class_extends.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
// https://www.w3schools.com/jsref/jsref_class_super.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

class Manager extends Employee {
    //samething with Intern and the others but with OfficeNumber instead of School
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    // same as the previous ones
    getOfficeNumber() {
        return this.officeNumber;
    }
    //to differentiate between the employee roles
    getRole() {
        return "Manager";
    }
};

// Just like the last part of the README Gen, these have to go at the end of every js file with the file name
module.exports = Manager;