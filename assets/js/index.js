const inquirer = require('inquirer')
const { getAllEmployees, addEmployee, updateEmployeeRole, getAllDepartments, addDepartment, getAllRoles, addRole } = require('./queries')


const menuOptions = [
    'View all employees',
    'Add an employee',
    'Update an employee role',
    'View all departments',
    'Add a department',
    'View all roles',
    'Add a role'
]


async function start(){
    const result = await inquirer.prompt([
        {
        type: 'List',
        name: 'menuOption',
        choices: menuOptions
        }
    ])

    if ( result.menuOption === 'View all employees' ){
        getAllEmployees()
    } else if ( result.menuOption === 'Add an employee' ){
        addEmployee()
    } else if ( result.menuOption === 'Update an employee role' ){
        updateEmployeeRole()
    } else if ( result.menuOption === 'View all departments' ){
        getAllDepartments()
    } else if ( result.menuOption === 'Add a department' ){
        addDepartment()
    } else if ( result.menuOption === 'View all roles' ){
        getAllRoles()
    } else if ( result.menuOption === 'Add a role' ){
        addRole()
    }


}



start();









