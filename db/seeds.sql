USE employeeDB;

INSERT INTO department (name)
VALUES 
('Sales'), 
('Engineering'), 
('Finance'), 
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 120000, 1), 
    ('Salesperson', 90000, 1), 
    ('Lead Engineer', 170000, 2), 
    ('Software Engineer', 100000, 2), 
    ('Accountant', 120000, 3), 
    ('Legal Team Lead', 300000, 4), 
    ('Lawyer', 200000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
    ('Bob', 'Troy', 1, null), 
    ('Debra', 'Beyhar', 3, null), 
    ('Tom', 'Chase', 4, null), 
    ('Maria', 'Lee', 6, null), 
    ('Tori', 'Baker', 2, 1), 
    ('Ralph', 'McNeil', 2, 1);
