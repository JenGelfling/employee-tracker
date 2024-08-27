
const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    user: 'postgres',
    password: 'abhorsen',
    host: 'localhost',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
)

pool.connect();

// Create an employee
app.post('/api/employees', (req, res) => {
  const { first_name, last_name, role_id, manager_id } = req.body;
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *`;
  const params = [first_name, last_name, role_id, manager_id];

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      // data: body
      data: result.rows[0]
    });
  });
});

// Read all employees
app.get('/api/employees', (req, res) => {
  const sql = `SELECT * FROM employee`;

  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});


// Create a department
app.post('/api/departments', (req, res) => {
  const { department_name } = req.body;
  const sql = `INSERT INTO department (department_name) VALUES ($1) RETURNING *`;
  const params = [department_name];

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: result.rows[0]
    });
  });
});

// Read all departments
app.get('/api/departments', (req, res) => {
  const sql = `SELECT * FROM department`;

  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Create a role
app.post('/api/roles', (req, res) => {
  const { title, salary, department_id } = req.body;
  const sql = `INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *`;
  const params = [title, salary, department_id];

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: result.rows[0]
    });
  });
});

// Read all roles
app.get('/api/roles', (req, res) => {
  const sql = `SELECT * FROM role`;

  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Update an employee's role
app.put('/api/employees/:id', (req, res) => {
  const { role_id } = req.body;
  const { id } = req.params;
  const sql = `UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *`;
  const params = [role_id, id];

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!result.rowCount) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.json({
      message: 'success',
      data: result.rows[0]
    });
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


