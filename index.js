// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, desription) {
  const task = {
    title: title,
    desription: desription,
    complete: false,

  logState: function() {
    console.log(`${task.title} has${task.complete ? " " : ' not '}been completed`);
  },
  markCompleted: function() {
    this.complete = true;
  },
  marNotCompleted: function() {
    this.complete = false;
  }
};
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
task1.markCompleted();
task1.logState();



