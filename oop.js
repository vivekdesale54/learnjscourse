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


function User(name, completed) {
    this.name = name;
    (this.completed = completed),
    (this.gettodoName = function(){
        console.log(this.name);
    });
}

const todo = new User("Buy eggs", false);
const todo2 = new User("Buy milk", false);

todo.gettodoName();
todo2.gettodoName();

//Prototype

User.prototype.gettodoName = function() {
    console.log(this.name);
}

todo.gettodoName();


//Prototype using another logic

function Name (Vivek, Yash) {
    this.Vivek = Vivek;
    (this.Yash = Yash),
    (this.gaMe = function() {
        console.log(this.Vivek);
        console.log(this.Yash);
    });
}

const games = new Name("Valorant", "Bgmi");
const games2 = new Name("Cricket", "Football");

games.gaMe();
games2.gaMe();  

//Creating a game 

function Enemy(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level; 
}

Enemy.prototype.getInfo = function() {
    console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack  = function() {
    console.log(`${this.name} is attacking`);
};

Enemy.prototype.block = function() {
    console.log(`${this.name} is blocking`); 
};

function Dragon(life, name, level, color, spell) {
    // Keyword this is as reference to the Dragon object
    Enemy.call(this, life, name, level);
    //Other properties as normal 
    this.color = color;
    this.spell = spell;
}

//Inherit from Enemy
Dragon.prototype = Object.create(Enemy.prototype);


Dragon.prototype.FireBreath = function() {
    console.log('Fire Breath');
}

//Inherit from Enemy
const newDragon = new Dragon(100, "Fire Dragon", 5, "Green", "Fire");
console.log(newDragon);



//Using claass keyword

class Death {
    constructor(life, name, level) {
        this.life = life;
        this.name = name; 
        this.level = level;
    }
    getInfo() {
        console.log(this.life, this.name, this.level);
    }
}

const newDeath = new Death(100, "turtle", 5);
console.log(newDeath);