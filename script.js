let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
        priority.textContent = 'Is important';
    } else {
        priority.textContent = 'Is common';
    }
};

form.onsubmit = function (evt) {
    evt.preventDefault();
    let newList = document.createElement('li');
    newList.textContent = 'Новый!!!';
    /*newList.classList.add('Some-text');*/
    list.append(newList);
    newList.textContent = input.value;
    if (priority.classList.contains('is-important')) {
        newList.classList.add('is-important');
        /*input.value='';*/
    }
    input.value = '';
};
