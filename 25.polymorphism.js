// Class is the Blueprint or Design or Template
class Person{
    // Data Member
    // Constructor 
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
    // Member Function or methods
    details(){
        console.log(`==== Students ${this.fullName} Details ====== `);
        console.log(`City: ${this.city}`);  
    }
}

class Student extends Person{
    constructor(fullName, city, profession, age){
        super(fullName, city);
        this.profession = profession;
        this.age = age;
    }
    studentDetails(){
        console.log(`Student Details: ${this.fullName}, ${this.city}, ${this.age}, ${this.profession}`);
    }
}
const stdElon = new Student("Elon Musk", "LA", "student", 22);
stdElon.studentDetails();
stdElon.details();
const stdLarry = new Student("Larry Page", "Silicon Vally", "CEO", 56);
stdLarry.studentDetails();


// Class is the Blueprint or Design or Template
class Person{
    // Data Member
    // Constructor 
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
    // Member Function or methods
    details(){
        console.log(`==== Base class details() ===> Students ${this.fullName} Details ====== `);
    }
}

class Student extends Person{
    constructor(fullName, city, profession, age){
        super(fullName, city);
        this.profession = profession;
        this.age = age;
    }
    studentDetails(){
        console.log(`Student Details: ${this.fullName}, ${this.city}, ${this.age}, ${this.profession}`);
    }
    // Method overriding to achieve RT poly 
    details(){
        console.log("==== Child class details()method ===> ");
        console.log(`Hello My details are: ${this.fullName}, ${this.city}, ${this.age}, ${this.profession} `);  
    }
}

var stdElon = new Student("Elon Musk", "LA", "student", 22);
stdElon.studentDetails();
stdElon.details();