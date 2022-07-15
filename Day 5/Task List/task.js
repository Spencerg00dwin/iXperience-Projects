class Task {
  constructor(taskDisplay) {
    this.task = taskDisplay;
  }
}

class UserInterface {
  constructor() {
    this.taskInput = document.getElementById("task-input");
    this.button = document.getElementById("button");
    this.tableBody = document.getElementById("table-body");

    this.tasks = [];
  }

  bindEventListeners() {
    this.button.addEventListener("click", (event) => {
      this.handleButtonClick(event);
    });
  }

  handleButtonClick(event) {
    const todo = new Task(this.taskInput.value);

    this.tasks.push(todo);

    this.taskInput.value = "";

    this.populateTable();
  }

  populateTable() {
    this.tableBody.innerHTML = "";

    for (let todo of this.tasks) {
      const row = document.createElement("tr");
      const taskCell = document.createElement("td");
      const actionCell = document.createElement("td");
      const completedCell = document.createElement("td");

      row.append(taskCell);
      row.append(completedCell);
      row.append(actionCell);

      const actionButton = document.createElement("input");
      actionButton.type = "button";
      actionButton.className = "btn btn-secondary";

      this.tableBody.append(row);

      taskCell.innerHTML = todo.task;
      completedCell.innerHTML = "NO";
      actionCell.append("Click When Done: ");
      actionCell.append(actionButton);

      actionButton.addEventListener("click", (event) => {
        actionButton.style.background = "green";
        completedCell.innerHTML = "YES";
      });
    }
  }
}

const ui = new UserInterface();
ui.bindEventListeners();
