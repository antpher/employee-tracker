INSERT INTO department (name)
VALUES
    ('Human Resources'),
    ('IT'),
    ('Accounting'),
    ('Sales'),
    ('Production'),
    ('Receiving'),
    ('Shipping');

INSERT INTO role (title, department_id, salary)
VALUES
    ('Maintenance', 5, 50000),
    ('HR Manager', 1, 45000),
    ('IT Manager', 2, 45000),
    ('Accountant', 3, 40000),
    ('Sales Rep', 4, 60000),
    ('Production Worker', 5, 35000),
    ('Receiving Manager', 6, 40000),
    ('Shipping Manager', 7, 40000),
    ('Account Manager', 3, 55000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Doe', 5, NULL),
    ('Jane', 'Doe', 3, NULL),
    ('Willow', 'Smith', 2, NULL),
    ('Sam', 'Wilson', 5, NULL),
    ('Erma', 'Wilson', 5, NULL),
    ('Bucky', 'Smith', 5, NULL),
    ('Sarah', 'Silverman', 3, NUll),
    ('Wanda', 'Vision', 1, NUll),
    ('Tony', 'Stark', 7, NULL),
    ('Pepper', 'Potts',6, NULL);