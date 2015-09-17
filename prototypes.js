var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

function Student(firstName, lastName, subject) {
  Person.call(this, firstName, lastName); //  + 's'
  //this.lastName = lastName;

  this.subject = subject;
};

Student.prototype = Object.create(Person.prototype); // See note below
Student.prototype.constructor = Student;


Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + " " + this.lastName + ". I'm studying "
              + this.subject + ".");
};

Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

var student1 = new Student("Janet", "Jones", "Applied Physics");
var student2 = new Student("gj", "ggh", "Applied Physics");
var person1 = new Person("dfgd","dfgvfd");
console.log(person1);
student1.sayHello();
student2.sayHello();// "Hello, I'm Janet. I'm studying Applied Physics."
//student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"


console.log(student1 instanceof Person);  // true
console.log(student1 instanceof Student); // true