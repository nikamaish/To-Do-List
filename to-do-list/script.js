function addTask(){
    var taskInput = document.getElementById('to-input');
    // it helps to get the value of the input entered by the user
    var taskText = taskInput.value.trim();
    // it helps to remove the white spaces from the input entered by the user

    if (taskText !== '') { // it checks whether the input is empty or not, it may happen that user may enter the empty input

      var todoList = document.getElementById('todo-list');
// it helps to get the ul element where the tasks will be added
// why ul element is used to add the tasks?
// because ul element is used to create the list of items, but by callling element what will happen?
// it will create the list of items in the ul element

      var li = document.createElement('li');
    //   it helps to create the li element
    // This line creates a new list item (<li>) element using the document.createElement method. This element is later used to represent an individual task in the to-do list. The reference to this newly created list item is stored in the variable li.

      li.innerHTML = 
      ` <span>${taskText}</span>
      <button onclick="editTask(this)">Edit</button> 
        <button onclick="removeTask(this)">Remove</button>`;
        // here i write code for the remove button
        //$ is used so that user entered values will be displayed in the list

      todoList.appendChild(li);
        // so each li will be added to todoList element

      taskInput.value = '';
    //   after adding the task, the input will be empty again
    }
}


function removeTask(button) {
    // This parameter is crucial because it allows the function to identify the specific task (list item) associated with the clicked button and remove it from the DOM.
    // 
    var li = button.parentElement;
    // The parentElement property is used to retrieve the parent element of the clicked button, which is the list item (<li>) containing the task to be removed. This reference is stored in the variable li.

    li.remove();
    // The remove method is called on the list item to remove it from the DOM. This method is used to remove the selected element from the DOM, and it is called directly on the element to be removed.
}

// The addTask function doesn't need a parameter because it is retrieving the task text from the input field directly (var taskText = taskInput.value.trim();). It's a self-contained action that takes the input from the user, creates a new task element based on that input, and adds it to the to-do list.

function editTask(button) {
    var li = button.parentElement;

    var span = li.querySelector('span');
    // The querySelector method is used to retrieve the first span element within the list item. This reference is stored in the variable span.

    var newTaskText = prompt('Edit task', span.textContent);
    // textContent property is used to get the text of the span element
// innerText property is used to set the text of the span element

    if (newTaskText !== null && newTaskText !== '') {
      span.innerText = newTaskText;
  }
}