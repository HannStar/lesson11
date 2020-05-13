let form = document.forms.container;
let formElem = form.elements;

let modalWindowCreateTask = document.querySelector('.overlay');

function openModalCreateTask() {
	modalWindowCreateTask.style.display = 'flex';
};

function closeModalCreateTask() {
	modalWindowCreateTask.style.display = 'none';
}

let listTasksTodo = [];
let listTasksInProgress = [];
let listTasksDone = [];

function acceptCreateTask() {
	let newTask = formElem.createTask.value;
	let newDate = formElem.createDate.value;
	let createTask = {
		task: newTask,
		date: newDate
	};

	if(newTask === '') {
		alert("Пустое поле");
	} else if(newDate === '') {
		alert('Укажите дату');
	} else {
		modalWindowCreateTask.style.display = 'none';
		let ul = document.querySelector('.list-todo');
		let addTask = document.createElement('li');
		addTask.className = "task";
		addTask.innerHTML = `	<p class="string-text">${createTask.task}<span>date: ${createTask.date}</span></p>
						<div class="icons">
							<p class="remove-button">✘</p>
							<p class="sell-button">➙</p>
						</div>`
		ul.append(addTask);

		listTasksTodo.push(createTask);

		let howMuchTasks = document.createElement('p');
		howMuchTasks.innerHTML = `${listTasksTodo.length}`;
		let blockHowMuchTasks = document.querySelector('.window-header p:last-child');
		blockHowMuchTasks.replaceWith(howMuchTasks);
	}
	console.log(listTasksTodo);
};

todoList.onclick = function(event) {
	if (event.target.className != 'remove-button') return;
  let pane = event.target.closest('.task');
  pane.remove();
	
	console.log(listTasksTodo);
};
