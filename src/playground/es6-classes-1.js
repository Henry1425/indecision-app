
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); {/*super() refers to the parent class calling the parent constructor function*/}
        this.major = major;

    }
     hasMajor() {
         return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` His major is ${this.major}.`;
        }
        return description;
    }
}
class Traveler extends Person {
    constructor(name, age,location) {
        super(name, age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += ` I'm visiting from ${this.location}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Henry Acosta', 52, 'Virginia');
console.log(me.getGreeting());

const otherName = new Traveler(undefined, undefined, 'Nowhere');
console.log(otherName.getGreeting());