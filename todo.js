fetch('./todo.json')
.then((res) => res.json())
.then((data) => {
    displayTodo(data.errands)
})

let tasksEl = document.getElementById('task')

function displayTodo(data) {
    let todoHTML = ''

    console.log(data)
    console.log(data[2])

    displayFeaturedTodo(data[2])

        for (let todo of data) {
            todoHTML += `
            <div class="card mb-3">
                <div class="card-body">
                    <h2 class="card-text">${todo.title}</h2>
                    <p class="card-text">${todo.description}</p>
                </div>
            </div>
            `
        }
}

        tasksEl.innerHTML = todoHTML

        let tasksEls = document.querySelectorAll('#todo .card')

        for (let i = 0; i < tasksEls.length; i++) {
            tasksEls[i].addEventListener('click', (event) => {
                let tasksInfo = data[i]
                displayFeaturedTodo(tasksInfo)
            })
        }

function displayFeaturedTodo(todo) {
    let featuredTasksEl = document.getElementById('tasks-todo')

    let skillsHTML = ''

    for (let task in task.taskList) {
        taskListHTML += `
        <li>${task}: ${task.taskList[task]}</li>
        `
    }

    let todoHTML = `
    <h2>${task.title}</h2>
    <p>description: ${task.Description}</p>
    <h3>taskList:</h3>
    <ul>
        ${todoHTML}
    <ul>
    `
    featuredTasksEl.innerHTML = todoHTML
}