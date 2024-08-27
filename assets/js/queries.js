
const { Pool } = require('pg');
const inquirer = require('inquirer');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_db',
  password: 'abhorsen',
  port: 5432,
});

async function getAllDepartments() {
  const { rows } = await pool.query('SELECT * FROM department');
  return rows;
}

async function getAllRoles() {
  const { rows } = await pool.query(`
    SELECT role.id, role.title, role.salary, department.department_name AS department
    FROM role
    JOIN department ON role.department_id = department.id
  `);
  return rows;
}

async function getAllEmployees() {
  const { rows } = await pool.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.department_name AS department, role.salary, manager.first_name AS manager
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
  `);
  return rows;
}

async function addDepartment(name) {
  const result = await pool.query('INSERT INTO department (department_name) VALUES ($1) RETURNING *', [name]);
  return result.rows[0];
}

async function addRole(title, salary, departmentId) {
  const result = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, departmentId]);
  return result.rows[0];
}

async function addEmployee(firstName, lastName, roleId, managerId) {
  const result = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [firstName, lastName, roleId, managerId]);
  return result.rows[0];
}

async function updateEmployeeRole(employeeId, newRoleId, newManagerId) {
  const result = await pool.query('UPDATE employee SET role_id = $1, manager_id = $2 WHERE id = $3', [newRoleId, newManagerId, employeeId]);
  return result.rows[0];
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};