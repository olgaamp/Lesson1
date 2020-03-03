let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

localStorageTodoListKey = 'todo-list';
let todoList = JSON.parse(localStorage.getItem(localStorageTodoListKey));

if (todoList != null) {
    for (let i = 0; i < todoList.length; i++) {
        addValueToHtml(todoList[i]);
    }
} else {
    todoList = [];
}

priority.onclick = function () {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
        priority.textContent = 'Is important';
    } else {
        priority.textContent = 'Is common';
    }
};

function addValueToHtml(newValue) {
    let newList = document.createElement('li');
    list.append(newList);

    newList.textContent = newValue;
    if (priority.classList.contains('is-important')) {
        newList.classList.add('is-important');
    }
    input.value = '';
}

form.onsubmit = function (evt) {
    evt.preventDefault();

    todoList.push(input.value);
    localStorage.setItem(localStorageTodoListKey, JSON.stringify(todoList));

    addValueToHtml(input.value);
};