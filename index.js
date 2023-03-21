'use strict'
// Реалізуйте наступну систему на прототипному успадкуванні:

// 1. чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)

// 2. у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)

// 3. у кожного класу має бути своя унікальна властивість

// 4. у двох класів має бути спільний предок та спільний метод характерний тільки для них

// 5. у всіх чотирьох класів має бути один (крім проміжних) клас-предок

function People (gender) {
        this.gender = gender;
    }

People.prototype.showGender = function() {
    if (this.gender === 'woman') {
        console.log(`It's a woman!`)
    } else if (this.gender === 'man'){
        console.log(`It's a man!`)
    } else if (this.gender === 'girl'){
        console.log(`It's a girl!`)
    } else {
        console.log(`It's a boy!`)
    }
}

function Person(name, weight, gender) {
    People.call(this, gender)
    this.name = name; 
    this.weight = weight;
    this.part = 'Person';
} 

Person.prototype = Object.create(People.prototype);

Person.prototype.showQuestion = function() {
    alert (`${this.name} do you have a dream?`);   
}

Person.prototype.getName = function() {
    console.log(this.name);
}
Person.prototype.phrase = function() {
    alert (`${this.name} weighs ${this.weight} kg.`);   
}

// const dmytro = new Person('Dmytro', '70', 'man')
// console.log(dmytro)
// dmytro.phrase()
// dmytro.showGender()


function Kids(name, weight, gender, age, nationality) {
    Person.call(this, name, weight, gender);
    this.nationality = nationality;
    this.age = age;
    this.part = 'Child';
}
Kids.prototype = Object.create(Person.prototype);
Kids.prototype.showAge = function( ) {
    if (this.age <= 2) {
        console.log(`It's a Baby.`)
    }
    if (this.age > 2 && this.age <= 5 ) {
        console.log(`It's a Toddler.`)
    } if (this.age > 5) {
        console.log(`It's a Kid`)
    }
    }; 
Kids.prototype.whoYouAre = function( ) {
    console.log(this.nationality);
};
Kids.prototype.showQuestion = function( ) {
    alert (`${this.name} do you have a dream?`);
}

// const yana = new Kids ('Yana', '50', 'girl', '10', 'ukrainian')
// console.log(yana);
// yana.showAge();

function Workers(name, weight, gender, profession, height) {
    Person.call(this, name, weight, gender);
    this.profession = profession;
    this.height = +prompt('Please enter your height');
    this.part = 'Worker';
}
Workers.prototype = Object.create(Person.prototype);
Workers.prototype.showHeight = function(){
    if (this.height > 180) { 
        alert('You are tall worker.')
    } if (this.height <= 180 && this.height > 150) {
        alert('You are of average height.')
    } if (this.height <= 150) {
        this.showMessage ()
    }
} 
Workers.prototype.showMessage = function() {
    alert(`Sorry, You can't work a flight attendant.`)   
}   
Workers.prototype.showQuestion = function() {
    alert (`${this.name} do you have a dream?`);
}

// const emma = new Workers ('Emma', '50', 'woman', 'teatcher' );
// console.log(emma)
// emma.showHeight ()
// emma.showQuestion ()
// emma.phrase()
// emma.showGender()

function Students(name, weight, gender, specialty) {
    People.call(this, gender);
    this.name = name;
    this.weight = weight;
    this.specialty = specialty;
    this.part = 'Students';
}

Students.prototype = Object.create(People.prototype);
Students.prototype.whoYouAre = function() {
    console.log(this.part);
}
Students.prototype.asking = function() {
    console.log(`Do you like your specialty - ${this.specialty}?`);
};
Students.prototype.showQuestion = function() {
    alert (`${this.name} do you have a dream?`);
}

// const dmytro = new Students('Dmytro', '70', 'man', 'engineer');
// console.log (dmytro);
// dmytro.showQuestion();

function Retired(name, weight, gender, age) {
    People.call(this, gender);
    this.age = age;
    this.part = 'Retired'; 
    this.name = name;
    this.weight = weight;  

}
Retired.prototype = Object.create(People.prototype);
Retired.prototype.whoYouAre = function() {
    console.log(this.part);   
}
Retired.prototype.asking = function() {
    console.log(`How many years have you worked?`)  
}
Retired.prototype.getAge = function() {
    console.log(this.age);  
}

// const dmytro = new Retired ('Dmytro', '70', 'man', '80');
// console.log (dmytro);
// dmytro.showGender()

