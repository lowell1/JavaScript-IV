class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

/*
Now we need some students!
Student uses the same attributes that have been set up by Person
Student has the following unique props:
previousBackground i.e. what the Student used to do before Lambda School
className i.e. CS132
favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
Student has the following methods:
listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
*/

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.previousBackground;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(ele) {
            console.log(ele);
        })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

//Instructor
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

/*
Project Manager
Now that we have instructors and students, we'd be nowhere without our PM's
ProjectManagers are extensions of Instructors
ProjectManagers have the following unique props:
gradClassName: i.e. CS1
favInstructor: i.e. Sean
ProjectManagers have the following Methods:
standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
*/

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



const person1 = new Person({
    name: "aaaaaa",
    location: "mars",
    age: 4,
})

const person2 = new Person({
    name: "yeeeehawwww",
    location: "texas",
    age: 87
})

console.log("----------------lambda-classes.js----------------");

person1.speak();
person2.speak();

const instructor1 = new Instructor({
    name: "instructor1",
    location: "vl;jihqq",
    age: 0
})

const instructor2 = new Instructor({
    name: "instructor2",
    location: "vl;jihqq",
    age: 0
})

instructor1.demo("javascript");
instructor2.demo("potato peelin");

const student1 = new Student({
    name: "student1",
    previousBackground: "video games",
    className: "web23",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const student2 = new Student({
    name: "student2",
    previousBackground: "criminal",
    className: "cs101",
    favSubjects: ['Html', 'tattoos', 'breaking the law'],
});

student1.listsSubjects();
student1.PRAssignment("lambda-classes");
student1.sprintChallenge("github");

student2.listsSubjects();
student2.PRAssignment("lambda-classes");
student2.sprintChallenge("maths");

const pr1 = new ProjectManager({
    name: "pr1",
    gradClassName: "cs1",
    favInstructor: "sean"
})

const pr2 = new ProjectManager({
    name: "pr2",
    gradClassName: "cs2",
    favInstructor: "Mr T"
})

pr1.standUp("the best channel");
pr1.debugsCode(student1, "a debugger");



/*
Stretch Problem
Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
Add a graduate method to a student.
This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

Student.prototype.grade = Math.ceil(Math.random() * 100);

Student.prototype.graduate = function() {
    if(this.grade >= 70){
        console.log("I graduated, hooray!");
        return true;
    }
    else
        return false;
}

Instructor.prototype.gradeStudent = function(student) {
    console.log(`student.grade = ${student.grade}`);
    student.grade += Math.ceil(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1);

    if(student.grade < 0)
        student.grade = 0;
    else if(student.grade > 100)
        student.grade = 100;
}

while(!student1.graduate())
    instructor1.gradeStudent(student1);