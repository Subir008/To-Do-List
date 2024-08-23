# To-Do List Website Documentation

## Overview

The To-Do List website allows users to manage their tasks with functionalities to insert, update, and delete tasks. This documentation covers the architecture, components, and functionalities of the website.

### Technologies Used

* Frontend:

    * HTML5
    * CSS
    * JavaScript
    * Bootstrap Framework
    * jQuery Library

 * Backend:

    * PHP

* Database:

    * MySQL 

## Components


**1. Frontend**

   **HTML**

* index.php : The main page of the application where users interact with their task list.

 **CSS**

* styles.css: Custom styles for the website, overriding Bootstrap defaults if necessary.

**JavaScript**

* scripts.js: Custom JavaScript code to handle frontend interactions, such as form submissions and AJAX requests.

**Bootstrap**

* Used for responsive layout and styling of components such as buttons, forms, and modals.

**jQuery**

* Simplifies DOM manipulation and AJAX calls.

**Datatable**

* Used for creating dynamic table with different functionality.

**2. Backend**
    
**PHP**

* db.php: Contains database connection settings.

* form-submit.php: Handles Data Creation operations.

* fetch_task.php: Handles Data Fetching operations.

* delete_task.php: Handles Data Deletion operations.

**3. Database**

**MySQL**

**Database Name**: to_do_list

**Tables**:\
**manage_task**: Stores all the task data.


## Functionality


**1. Task Management**

Add Task: Users can create new tasks.\
Method: POST\
Fields: title, description

Fetch Tasks: Retrieve all tasks.

Update Task: Users can update existing tasks.\
Method: POST\
Fields: id, title, description

Delete Task: Users can delete tasks.\
Method: POST\
Fields: id

**2. Frontend Interaction**

**HTML Structure**

index.php: Contains the structure for displaying tasks and forms for adding/editing/deleting tasks.

**JavaScript and jQuery**

scripts.js: Handles form submissions, AJAX requests, and dynamic updates to the task list.
Add Task: Sends a POST request to /tasks.php?action=create.
Update Task: Sends a POST request to /tasks.php?action=update.
Delete Task: Sends a POST request to /tasks.php?action=delete.

**Bootstrap**
Modals: Used for adding and editing tasks.
Forms: Styled forms for user input.

**Datatable**

To create a dynamic table that give searching, pagination, sorting functionality.


**4. Backend Processing**

**PHP Scripts**\
db.php: Establishes a connection to the MySQL database.
