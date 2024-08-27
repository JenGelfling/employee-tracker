
const inquirer = require('inquirer');
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./queries');

async function start() {
  const { option } = await inquirer.prompt({
    type: 'list',
    name: 'option',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add a Department',
      'Add a Role',
      'Add an Employee',
      'Update Employee Role',
      'Exit',
    ],
  });

  switch (option) {
    case 'View All Departments':
      const departments = await getAllDepartments();
      console.table(departments);
      break;
    case 'View All Roles':
      const roles = await getAllRoles();
      console.table(roles);
      break;
    case 'View All Employees':
      const employees = await getAllEmployees();
      console.table(employees);
      break;
    case 'Add a Department':
      const { departmentName } = await inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the department:',
      });
      await addDepartment(departmentName);
      console.log('Department added!');
      break;
    case 'Add a Role':
      const departmentsList = (await getAllDepartments()).map(dept => ({ name: dept.department_name, value: dept.id }));
      const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'roleTitle',
          message: 'Enter the title of the role:',
        },
        {
          type: 'number',
          name: 'roleSalary',
          message: 'Enter the salary of the role:',
        },
        {
          type: 'list',
          name: 'departmentId',
          message: 'Select the department for the role:',
          choices: departmentsList,
        },
      ]);
      await addRole(roleTitle, roleSalary, departmentId);
      console.log('Role added!');
      break;
    case 'Add an Employee':
      const rolesList = (await getAllRoles()).map(role => ({ name: role.title, value: role.id }));
      const managersList = (await getAllEmployees()).map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'Enter the first name of the employee:',
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'Enter the last name of the employee:',
        },
        {
          type: 'list',
          name: 'roleId',
          message: 'Select the role of the employee:',
          choices: rolesList,
        },
        {
          type: 'list',
          name: 'managerId',
          message: 'Select the manager of the employee (or leave blank if none):',
          choices: [...managersList, { name: 'None', value: null }],
        },
      ]);
      await addEmployee(firstName, lastName, roleId, managerId);
      console.log('Employee added!');
      break;
    case 'Update Employee Role':
      const employeesList = (await getAllEmployees()).map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
      const rolesListForUpdate = (await getAllRoles()).map(role => ({ name: role.title, value: role.id }));
      const managersListForUpdate = (await getAllEmployees()).map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
      const { employeeId, newRoleId, newManagerId } = await inquirer.prompt([
        {
          type: 'list',
          name: 'employeeId',
          message: 'Select the employee to update:',
          choices: employeesList,
        },
        {
          type: 'list',
          name: 'newRoleId',
          message: 'Select the new role for the employee:',
          choices: rolesListForUpdate,
        },
        {
            type: 'list',
            name: 'newManagerId',
            message: 'Select the new manager for the employee (or leave blank if none):',
            choices: [...managersListForUpdate, { name: 'None', value: null }],
          },
      ]);
      await updateEmployeeRole(employeeId, newRoleId, newManagerId);
      console.log('Employee role and manager updated!');
      break;
    case 'Exit':
        console.log('Exiting application...');
        process.exit();
        break;
    default:
      console.log('Invalid option.');
      break;
  }

  start();
}


start();





