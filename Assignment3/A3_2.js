// 2. Class Inheritance:
//  Create a Student class that inherits from the Person class.
//  Add an additional property studentID and a method study that returns a string
// stating the student is studying.
//  Instantiate an object of the Student class and demonstrate the inherited and
// new properties/methods.

class person {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    getdetails(){
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }
}
class student extends person{
    constructor(name,age,gender,studentID){
        super(name,age,gender);
        this.studentID=studentID;

    }
    study(){
        return `StudentID: ${this.studentID} the student is studying.`
    }

}

const s1=new student("Dipta",22,"Male","st01");

console.log(s1.getdetails())
console.log(s1.study())