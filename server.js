const mysql = require("mysql2");
const inquirer = require("inquirer");
const conTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Ninty9%offun',
    database: 'employeeDB'
  });

  
  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    inquirer.prompt([
        {
            name:"department",
            type: "input",
            message: "Enter a department name.",
            validate: () => {
                return true;
            }  
        }
        
    ])
    .then(function(departmentInput) {
        console.log(departmentInput.department);
        let departmentName = departmentInput.department;
        addDepartment(departmentName);
    })
  });
  
  addDepartment = (newDepartment) => {
    console.log('Inserting a new department...\n');
    const query = connection.query(
      'INSERT INTO department (name) VALUES (?)',
      [newDepartment],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + ' department inserted!\n');
      }
    );
    // logs the actual query being run
    console.log(query.sql);
  };


  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    inquirer.prompt([
        {
            name:"role",
            type: "input",
            message: "Enter a role.",
        },
        {
            name:"salary",
            type:"input",
            message:"Add a yearly salary.",
        },
        {
            name:"departmentRole",
            type:"list",
            message:"Pick a department to add the new role.",
            choices:["Sales", "Engineering", "Finance", "Legal", "Added new input" ],
        },
    ])
    .then(function(roleInput) {
        console.log(roleInput.role);
        let roleName = roleInput.role;
        addRole(roleName);
    })
  });
  
  addRole = (newRole) => {
    console.log('Inserting a new department...\n');
    const query = connection.query(
      'INSERT INTO role (name) VALUES (?)',
      [newRole],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + ' department inserted!\n');
      }
    );
    // logs the actual query being run
    console.log(query.sql);
  };

  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    inquirer.prompt([
        {
            name:"employee",
            type: "input",
            message: "Enter a department name.",
        },
        {
            name:"first_name",
            type: "input",
            message: "Enter an employee first name.",
        },
        {
            name:"last_name",
            type: "input",
            message: "Enter an employee last name.",
        },
        {
            name:"roleEmployee",
            type: "input",
            message: "Enter an employee role.",
        },
        {
            name:"manager",
            type: "input",
            message: "Enter a manager for the employee.",
        }
        
    ])
    .then(function(employeeInput) {
        console.log(employeeInput.employee);
        let employeeName = employeeInput.employee;
        addEmployee(employeeName);
    })
  });
  
  addEmployee = (newEmployee) => {
    console.log('Inserting a new department...\n');
    const query = connection.query(
      'INSERT INTO department (name) VALUES (?)',
      [newEmployee],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + ' department inserted!\n');
      }
    );
    // logs the actual query being run
    console.log(query.sql);
  };
