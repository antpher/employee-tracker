const db = require('./db/connection');
const inquirer = require('inquirer');



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View all Roles', 'View all Employeees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
        }
    ]).then(function (data) {
        console.log(data);
        if (data.choice === 'View All Departments') {
            viewAllDepartments();
        } else if (data.choice === 'View all Roles') {
            viewAllRoles();
        } else if (data.choice === 'View all Employeees') {
            viewAllEmployees();
        } else if (data.choice === 'Add a Department') {
            addDepartment();
        } else if (data.choice === 'Add a Role') {
            addRole();
        } else if (data.choice === 'Add an Employee') {
            addEmployee();
        } else if (data.choice === 'Update an Employee Role') {
            updateEmployee();
        } else {
            process.exit();
        }
    });
}

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) throw err
        console.table(results);
        promptUser();
    })
}

const viewAllRoles = () => {
    db.query('SELECT * FROM role', function (err, results) {
        if (err) throw err
        console.table(results);
        promptUser();
    })
}

const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) throw err
        console.table(results);
        promptUser();
    })
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Which department do you want to add?'
        }

    ]).then(function (data) {
        db.query('INSERT INTO department SET ?', data, function (err, results) {
            if (err) throw err
            console.log('Department added');
            promptUser();
        })
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Which role do you want to add?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Which department?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary?'
        }

    ]).then(function (data) {
        db.query('INSERT INTO role SET ?', data, function (err, results) {
            if (err) throw err
            console.log('Role added');
            promptUser();
        })
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the role id?'
        }

    ]).then(function (data) {
        db.query('INSERT INTO employee SET ?', data, function (err, results) {
            if (err) throw err
            console.log('Employee added');
            promptUser();
        })
    })
}

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id?'
        },
        {
            type: 'input',
            name: 'employee_id',
            message: 'What is the employee id?'
        }

    ]).then(function (data) {
        db.query('UPDATE employee SET role_id = ? where id = ?', [data.role_id, data.employee_id], function (err, results) {
            if (err) throw err
            console.log('Employee updated');
            promptUser();
        })
    })
}

function init() {
    promptUser();
}
db.connect(function (err) {
    if (err) throw err
    init();
})