# Employee-Tracker-ak


## Description 
This app allows employers to view and update their employees and current roles with in their departments.
An employer will be able to add departments, roles an employees with their corresponding information using inquirer and prompts.
The user will be able to view the information from terminal thanks to integration of mysql2.

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Usage
In the command line: 
npm install inquirer
npm install --save mysql2
npm install console.table

Recommended: Open now terminal window
run:
mysql -u root -p
(password in server.js line 11)
source schema.sql
source seeds.sql
quit

run:
node server.js
follow prompts


## Project Link
Visit deployed project at:https://github.com/Aken00/Employee-Tracker-ak

## Video Link
Visit demo video at:https://drive.google.com/file/d/1G7XfrmbnsNd5CdD1-Mv7f100wwu1H71h/view?usp=sharing

## Questions
  * Github Username: Aken00
  * [User Github](https://github.com/Aken00)
  * You can reach me at (ajken04@gmail.com)