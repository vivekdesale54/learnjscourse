// // const hello = {
// //     name: "bhim",
// //     age: 30,

// // };

// // console.log(hello);

// // sayHi();

// // function sayHi () {
// //     console.log("hi");
// // }

// // const user = {
// //     name: "Vivek", 
// // };

// // const admin = {
// //     name: "admin",
// // }; 

// // function sayHi() {
// //     console.log(this);
// // }

// // user.name = sayHi;
// // admin.name = sayHi;

// // user.sayHi();
// // admin.sayHi();

// //Funtions -> Speacial OBJECT
// //Bind Call Apply

// const person = {
//     name: "Vivek",
//     last: " Desale",
//     getName() {
//         console.log(this.name + this.last);
//     }
// };

// function registerUser(){
//     console.log(this);
// }

// // const register = person.getName.bind(person);    
// // register(); // Vivek Desale

// //Call or Invoke

// function registerUser(country, lang) {
//     this.getName();

//     console.log(`My country is ${country}, and my lang us ${lang}.`);
// }

// registerUser.call(person, "India", "En"); // My name is Vivek, My country is India, and my lang us Hindi.


// const user = {
//     name: "bhim",
//     sayHi() {
//         console.log(user.name);
//     }
// };

// const admin = {
//     name: "ullu",
//     message: "ullu hai tu",
//     sayHi(){
//         console.log(admin.message);
//     }
// }

// function sayHi() {
//     console.log(admin.message);
// }

// user.hi = sayHi;   
// admin.hi = sayHi;

// user.sayHi();
// admin.sayHi();

const user = {
    name: "bhim ",
    message: "Tu chutiya ahes",
    gave () {
        console.log(this.name + this.message);
    }
};

function newUser(lang, country) {
    this.gave();
    console.log(`My country is ${country}, it is disgusting. It fights over different languages like ${lang}`);
}

const newuser = newUser.bind(user);

newuser("Hindi", "India");
 

// newUser.call(user);


function NewTodo(newname, completed) {
    this.newname = newname;
    this.completed = completed;
};

const newTodo = new NewTodo('mike', false);

console.log(newTodo);

function Enemy1(name, level, life){
    this.name = name;
    this.level = level;
    this.life = life;
};

Enemy1.prototype.getInfo = function () {
    console.log(this.name, this.level, this.life);
};

Enemy1.prototype.attack = function() {
    console.log(`This ${this.name} has attacked us.`);
};
Enemy1.prototype.block = function() {
    console.log(`This ${this.name} has blocked us.`);
};

function Dragon1(name, level, life, color, spell) {
    Enemy1.call(this, name, level, life );
    this.color = color;
    this.spell = spell;
};

Dragon1.prototype = Object.create(Enemy1.prototype);

Dragon1.prototype.Firebreath = function() {
    console.log("FIRE BREATHHH");
};

const Dragon2 = new Dragon1("Monster", 30, 5, "Red", "Beast");
console.log(Dragon2);

//Using classes

class DeadlyDragon {
    constructor(name, life, level) {
        this.name = name;
        this.life = life;
        this.level = level;
    }
    gaveInfo() {
       console.log(this.name, this.life, this.level) ;
    };
};

const newDragon = new DeadlyDragon("deadDragon", 25, 5);
const newBug  = new DeadlyDragon("BUGGY", 20, 6);
// console.log(newDragon);
// console.log(newBug);

newDragon.gaveInfo();
newBug.gaveInfo();

class deadlyBug extends DeadlyDragon {
    constructor(name, life, level, legs, dmg) {
        super(name, life, level);
        this.legs = legs;
        this.dmg = dmg;
    };
}

const bugMan = new deadlyBug("bugggy", 25, 23, 6, 50);
console.log(bugMan);


