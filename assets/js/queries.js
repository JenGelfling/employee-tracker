// import all the inquirer stuff needed and other things
const inquirer = require('inquirer')
const Pool = {}
const { Pool } = require('pg');

pool.connect();



async function getAllEmployees(){

    const data = await getAllEmployees(){
        // display via table or whatever
    }
    start()
    // SELECT statement
    // returns back the result
    // WHEN I choose to view all employees
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

}

async function addEmployee(data){

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
    // WHEN I choose to add an employee
    // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    
}

async function updateEmployeeRole(data){
    
    // WHEN I choose to update an employee role
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
}

async function getAllDepartments(){

    // WHEN I choose to view all departments
    // THEN I am presented with a formatted table showing department names and department ids
}

async function addDepartment(data){

    // WHEN I choose to add a department
    // THEN I am prompted to enter the name of the department and that department is added to the database

}

async function getAllRoles(){

    // WHEN I choose to view all roles
    // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

}

async function addRole(data){

    // WHEN I choose to add a role
    // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

}



module.exports = {
    getAllDepartments,
    addDepartment,
    getAllEmployees,
    addEmployee,
    getAllRoles,
    addRole,
    updateEmployeeRole
}
