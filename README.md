# Custom To-Do List App

## Project Overview

This project is a *Custom To-Do List App*, created as part of an assignment. The goal was to build a functional to-do list application that allows users to add, edit, complete, and delete tasks. The app also ensures tasks remain saved even after refreshing the page by using `localStorage`.

---

## Process and Approach

1. Following the Assignment Instructions
I followed the step-by-step instructions provided in the assignment, which included:
- A basic HTML template to start the project.
- Guidelines for styling the app using CSS.
- Directions for adding functionality with JavaScript.

---

2. Provided HTML Code
The initial HTML code served as the foundation for the project. It included:
- A `<ul>` element with an `id` of `taskList` to display the tasks.
- An input field (`<input>`) for users to type new tasks.
- A button (`<button>`) to add tasks to the list.

Here’s the starting HTML structure:
'''html
<body>
  <h1>To-Do List - Practice</h1>
  <input type="text" id="taskInput" placeholder="Enter a task">
  <button id="addTaskButton">Add Task</button>
  <ul id="taskList"></ul>
</body>

---

3. Adding JavaScript Functionality
After setting up the HTML, I added JavaScript to make the app functional. Here are the key features I implemented:

Rendering Tasks:
I created a renderTasks function to display tasks dynamically in the <ul>. Each task is shown as an <li> element with buttons for completing, editing, and deleting tasks.

Adding Tasks:
I added an event listener to the "Add Task" button. When clicked, it takes the input from the text field, adds it to the task list, and updates the display.

Editing Tasks:
I implemented an edit function that allows users to modify the text of a task. The updated text is then reflected in the task list.

Completing Tasks:
I created a function to mark tasks as "completed" by toggling a CSS class that strikes through the text.

Deleting Tasks:
I added functionality to remove a task from the list and refresh the display.

Saving Tasks:
To ensure tasks persist after a page refresh, I used localStorage to save tasks as a JSON string. When the page loads, the tasks are retrieved and displayed again.

---

4. CSS Styling
I styled the app to make it visually appealing and easy to use. Key styling elements include:

Using Flexbox to align tasks and buttons horizontally.
Adding a line-through effect for completed tasks to indicate their status.

---

5. Challenges and Solutions
Here are some challenges I faced and how I solved them:

Challenge: Ensuring tasks persist after refreshing the page.
Solution: I used localStorage to save tasks and reloaded them when the page initializes.

Challenge: Fixing invalid HTML elements, such as <itemlist>.
Solution: I replaced invalid elements with proper semantic HTML tags like <ul>, <li>, and <span>, which improved the app’s structure and accessibility.

---
### Final Thoughts
This project was a great learning experience. While I made good progress, I realized I need more practice to fully understand all the concepts. I sought help when needed, and as I worked through the project, my understanding improved. I now feel more confident in building simple applications, but I’m excited to continue learning and improving my skills.