// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}. I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }

  //stretch
  gradeStudent(student) {
    let grade = (Math.floor(Math.random() * 100) + 1) * 
    (Math.random() < 0.5 ? -1 : 1);
    console.log(`${student.name} earns ${grade} points.`);
    student.getGraded(grade);
  }
}

class Student extends Person {
  constructor(attributes){
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = Math.floor(Math.random() * 100) + 1;
  }

  listSubjects() {
    favSubjects.forEach(subject => console.log(subject));
  }

  PRAddignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }

  // stretch
  getGraded(grade) {
   this.grade += grade;
  }

  graduate() {
    if(this.grade > 70) console.log(`${this.name} graduates!`);
    else console.log(`Sorry ${this.name}, keep trying.`);
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

// test stretch
const joe = new Instructor({
  name: "Joe",
  age: 42,
  location: "France",
  specialty: "Python",
  favLanguage: "Python",
  catchPhrase: "C'est la vie"
});

const becca = new Student({
  name: "Becca",
  age: 35,
  location: "Ohio",
  previousBackground: "Medical Assistant",
  className: "FSW14",
  favSubjects: ["React", "UI"]
})

console.log(joe);
console.log(becca);

// stretch testings
joe.gradeStudent(becca);
console.log(becca);
console.log(becca.graduate());
