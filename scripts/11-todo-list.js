const todoList = [];

function addTodo(){
    const name = document.querySelector('.js-name-input').value;
    const date = document.querySelector('.js-date-input').value;
    todoList.push({'name': name, 'date': date});
    console.log(todoList);
    document.querySelector('.js-name-input').value = '';
    renderTodoList();
}

function renderTodoList(){
    let html = '';
    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name, date} = todoObject;
        html += `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        ">Delete</button>
        `;
    }
    document.querySelector('.js-todo-list').innerHTML = html;
}

renderTodoList();