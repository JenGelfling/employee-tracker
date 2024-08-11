const inquirer = require('inquirer')
const { getAllEmployees, addEmployee, getAllDepartments, addDepartment } from queries.js


const menuOptions = [
    'View all employees',
    'Add an employee'
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
        displayEmployees()
    }
}

async function displayEmployees(){
    const data = await getAllEmployees(){
        // display via table or whatever
    }
    start()

}


/*
    [ 'Department 1', 'Department 2']
    [
    { name: 'Department 1', value: 1 }
    ]

*/


async function addEmployee(){
    const listOfDepartments = getAllDepartments().map( dept => {
        name: dept.name, 
        value: dept.id
    })

    const result = await inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?'
        },
        {
        type: 'list',
        name: 'department',
        message: getAllDepartments()
        }
    ])

    addEmployee(result)
    start()
}




