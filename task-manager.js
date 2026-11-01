
const tasks = [
  {
    title: "Complete JavaScript practice",
    category: "Rootwork",
    completed: true,
    priority: "high"
  },
  {
    title: "Read geology lecture notes",
    category: "School",
    completed: false,
    priority: "high"
  },
  {
    title: "Update GitHub repository",
    category: "Rootwork",
    completed: false,
    priority: "medium"
  },
  {
    title: "Prepare for geology test",
    category: "School",
    completed: false,
    priority: "high"
  },
  {
    title: "Organise study materials",
    category: "Personal",
    completed: true,
    priority: "low"
  },
  {
    title: "Practise JavaScript loops",
    category: "Rootwork",
    completed: false,
    priority: "medium"
  }
];

// Part 1: Display every task
function displayTasks() {
  console.log("\n--- ALL TASKS ---");

  for (let i = 0; i < tasks.length; i++) {
    console.log("Title:", tasks[i].title);
    console.log("Category:", tasks[i].category);
    console.log("Priority:", tasks[i].priority);
    if (tasks[i].completed === true) {
  console.log("Status:", "Completed");
} else {
  console.log("Status:", "Pending");
};
    console.log("--------------------");
  }
}

// Part 2: Display task statistics
function displayStatistics() {
  let completedCount = 0;
  let pendingCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
      completedCount++;
    } else {
      pendingCount++;
    }
  }

  console.log("\n--- TASK STATISTICS ---");
  console.log("Total tasks:", tasks.length);
  console.log("Completed tasks:", completedCount);
  console.log("Pending tasks:", pendingCount);
}

// Part 3: Find high-priority pending tasks
function findHighPriorityPendingTasks() {
  let foundTask = false;

  console.log("\n--- HIGH-PRIORITY PENDING TASKS ---");

  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].priority === "high" &&
      tasks[i].completed === false
    ) {
      console.log(tasks[i].title);
      foundTask = false;
    }
  }

  if (foundTask === true) {
    console.log("There are no high-priority pending tasks.");
  }
}

// Part 4: Count tasks in a category
function countCategory(categoryName) {
  let categoryCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].category === categoryName) {
      categoryCount++;
    }
  }

  return categoryCount;
}

function displayCategorySummary() {
  console.log("\n--- CATEGORY SUMMARY ---");
  console.log("Rootwork tasks:", countCategory("Rootwork"));
  console.log("School tasks:", countCategory("School"));
}

// Part 6: Add a new task
function addTask(title, category, completed, priority) {
  const newTask = {
    title: title,
    category: category,
    completed: completed,
    priority: priority
  };

  tasks.push(newTask);
  console.log("\nNew task added:", title);
}

// Run the program
displayTasks();
displayStatistics();
findHighPriorityPendingTasks();
displayCategorySummary();

// Add a task and prove it exists
addTask(
  "Review task manager code",
  "Rootwork",
  false,
  "high"
);

console.log("\nUpdated task count:", tasks.length);
displayTasks();
displayStatistics();
displayCategorySummary();
