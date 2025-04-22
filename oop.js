//Constructor function 

function Todo(name, completed) {
    this.name = name;
    this.completed = completed;
}

const todo = new Todo("Leanr JS ", false);
console.log(todo);

//Constructor Function

function Todo(Name, completed) {
    this.name = Name;
    this.completed = completed;
}

Todo.prototype.getTodoName = function() {
    console.log(this.name);
};

const todo1 = new Todo("Learn JS", true);



