
//take button and child in all js 

const button = document.querySelector('#submit');
const todolist = document.querySelector('#todolist');
const todoNr = document.querySelector('.todo-nr b');
const mainTitle = document.querySelector('#main-title');
const items = todolist.children;
const nameInput = document.querySelector('.input-but');

// add event listner

button.addEventListener('click', function(e){
    e.preventDefault();
    //Creating the element
    const newitem = document.createElement('li');
    //Adding the element to the class
    newitem.classList.add('item');
    //Adding the text
    newitem.innerText = nameInput.value;

    todolist.appendChild(newitem);
    todoNr.innerText = items.length;
    // Create the element and attaching the listner 
    newitem.addEventListener('click', deleteItem);
});

for (item of items){
    item.addEventListener('click', deleteItem);
};

function deleteItem(event){
    event.stopPro
    event.target.remove();
 };

 todolist.addEventListener('click', function(){
    mainTitle.classList.toggle('fade');
 });

 nameInput.value = '';

 
// button.addEventListener('click', function(){
//     mainTitle.classList.add('color');
//     mainTitle
// });

