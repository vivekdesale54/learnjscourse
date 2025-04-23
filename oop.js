//Constructor function 

// function Todo(name, completed) {
//     this.name = name;
//     this.completed = completed;
// }

// const todo = new Todo("Leanr JS ", false);
// console.log(todo);

// //Constructor Function

// function Todo(Name, completed) {
//     this.name = Name;
//     this.completed = completed;
// }

// Todo.prototype.getTodoName = function() {
//     console.log(this.name);
// };

// const todo1 = new Todo("Learn JS", true);


// function User(name, completed) {
//     this.name = name;
//     (this.completed = completed),
//     (this.gettodoName = function(){
//         console.log(this.name);
//     });
// }

// const todo = new User("Buy eggs", false);
// const todo2 = new User("Buy milk", false);

// todo.gettodoName();
// todo2.gettodoName();

// //Prototype

// User.prototype.gettodoName = function() {
//     console.log(this.name);
// }

// todo.gettodoName();


// //Prototype using another logic

// function Name (Vivek, Yash) {
//     this.Vivek = Vivek;
//     (this.Yash = Yash),
//     (this.gaMe = function() {
//         console.log(this.Vivek);
//         console.log(this.Yash);
//     });
// }

// const games = new Name("Valorant", "Bgmi");
// const games2 = new Name("Cricket", "Football");

// games.gaMe();
// games2.gaMe();  

// //Creating a game 

// function Enemy(life, name, level) {
//     this.life = life;
//     this.name = name;
//     this.level = level; 
// }

// Enemy.prototype.getInfo = function() {
//     console.log(this.life, this.name, this.level);
// };

// Enemy.prototype.attack  = function() {
//     console.log(`${this.name} is attacking`);
// };

// Enemy.prototype.block = function() {
//     console.log(`${this.name} is blocking`); 
// };

// function Dragon(life, name, level, color, spell) {
//     // Keyword this is as reference to the Dragon object
//     Enemy.call(this, life, name, level);
//     //Other properties as normal 
//     this.color = color;
//     this.spell = spell;
// }

// //Inherit from Enemy
// Dragon.prototype = Object.create(Enemy.prototype);


// Dragon.prototype.FireBreath = function() {
//     console.log('Fire Breath');
// }

// //Inherit from Enemy
// const newDragon = new Dragon(100, "Fire Dragon", 5, "Green", "Fire");
// console.log(newDragon);



//Using claass keyword

// class Death {
//     constructor(life, name, level) {
//         this.life = life;
//         this.name = name; 
//         this.level = level;
//     }
//     getInfo() {
//         console.log(this.life, this.name, this.level);
//     }
// }

// const newDeath = new Death(100, "turtle", 5);
// console.log(newDeath);

// //Create a new enemy 

// class Bug extends Enemy {
//     constructor(life, name, level, color, dmg) {
//         super(life, name, level);
//         //
//         this.color = color;
//         this.dmg = dmg;
//     }
// }


// const john = new Bug(10, "buggy", 6, "red", 5);
// console.log(john);
// john.getInfo();


// class Animator{
//     constructor(selector) {
//         this.selector = document.querySelector(selector);
//     }
//         move(time, toggle = false, { x = 0, y = 0  }) {
//         if (toggle && this.selector.classList.contains('fadeOut-active')) {
//             this.selector.style.transform = "translate(0px, 0px)"; 
//             this.selector.classList.remove('move-active');

//         } else {
//             this.selector.style.transition = `all ${time}s ease`;
//             this.selector.style.transform  = `translate (${x}px, ${y} px)`;
//             this.selector.classList.add('move-active');
//     } 
    
//     }
// }

// const intro = new Animator('h1');

// const button = document.querySelector("button");


// button.addEventListener('click', () => {
//     intro.move(1, true, { x: 100 });
// });


class Animator{
    constructor(selector) {
        this.selector = document.querySelector(selector);
    }
    fadeOut(time, toggle = false) {
        if(toggle && this.selector.classList.contains("fadeOut-active")){
            this.selector.style.opacity = 1;
            this.selector.classList.remove("fadeOut-active");


        }else {
        this.selector.style.transition = `all ${time}s  ease`;
        this.selector.style.opacity = 0;
        this.selector.classList.add("fadeOut-active");
        }
    }
    Move(time, toggle = false, { x = 0, y = 0  }) {
        if(toggle && this.selector.classList.contains("move-active")){
            this.selector.style.transform = "translate(0px, 0px)";
            this.selector.classList.remove("move-active");


        }else {
        this.selector.style.transition = `all ${time}s  ease`;
        this.selector.style.transform = `translate(${x}px, ${y}px)`;
        this.selector.classList.add("move-active");
        }
    }
}

const intro = new Animator("h1");
const btnAnime = new Animator("button") 

const button = document.querySelector("button");

button.addEventListener('click', () => {
    intro.Move(1, true, { x : 100, y: 200 });
    intro.fadeOut(2, true);
    intro.fadeOut(2, true);

});



 