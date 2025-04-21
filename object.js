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

person.getName(); // Vivek Desale