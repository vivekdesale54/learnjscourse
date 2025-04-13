//variables that takes the value
// const button = document.querySelector('#submit');
// const todolist = document.querySelector('#todolist');
// const todoNr = document.querySelector('.todo-nr b');

// const items = todolist.children;

// //function which triggers action

// button.addEventListener('click', function(){
//     const newitem = document.createElement('li');
//     newitem.classList.add('item');
//     newitem.innerText = `item ${items.length + 1}`;
//     todolist.appendChild(newitem);
//     todoNr.innerText = items.length;
// });

//take button and child in all js 

const button = document.querySelector('#submit');
const todolist = document.querySelector('#todolist');
const todoNr = document.querySelector('.todo-nr b')
const items = todolist.children;

//add event listner

button.addEventListener('click', function(){
    const newitem = document.createElement('li');
    newitem.classList.add('item');
    newitem.innerText = `item ${ items.length + 1}`;
    todolist.appendChild(newitem);
    todoNr.innerText = items.length;
});
