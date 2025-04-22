// const hello = {
//     name: "bhim",
//     age: 30,

// };

// console.log(hello);

// sayHi();

// function sayHi () {
//     console.log("hi");
// }

// const user = {
//     name: "Vivek", 
// };

// const admin = {
//     name: "admin",
// }; 

// function sayHi() {
//     console.log(this);
// }

// user.name = sayHi;
// admin.name = sayHi;

// user.sayHi();
// admin.sayHi();

//Funtions -> Speacial OBJECT
//Bind Call Apply

const person = {
    name: "Vivek",
    last: " Desale",
    getName() {
        console.log(this.name + this.last);
    }
};

function registerUser(){
    console.log(this);
}

// const register = person.getName.bind(person);    
// register(); // Vivek Desale

//Call or Invoke

function registerUser(country, lang) {
    this.getName();

    console.log(`My country is ${country}, and my lang us ${lang}.`);
}

registerUser.call(person, "India", "En"); // My name is Vivek, My country is India, and my lang us Hindi.