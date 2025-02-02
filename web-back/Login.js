const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'farmer'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// GET route for fetching all data from farmer table (for admin or view purposes)
app.get('/api/farmer', (req, res) => {
  const query = 'SELECT * FROM farmer';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST route for inserting new data into farmer table (Sign Up)
app.post('/api/farmer', (req, res) => {
  const { name, number, email, cropname, district, cropQuantity, price, description } = req.body;

  // Basic validation
  if (!name || !email || !number || !cropname || !district) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Inserting data into farmer table
  const query = 'INSERT INTO farmer (name, number, email, cropname, district, cropQuantity, price, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, number, email, cropname, district, cropQuantity, price, description], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, message: 'Farmer registered successfully', result });
  });
});

// POST route for user authentication (Sign In)
app.post('/api/farmer/authenticate', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const query = 'SELECT * FROM farmer WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Login successful!' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});

// PUT route for updating a farmer's data
app.put('/api/farmer/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, number, cropname, district, cropQuantity, price, description } = req.body;

  // Basic validation
  if (!name || !email || !number || !cropname || !district) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'UPDATE farmer SET name = ?, email = ?, number = ?, cropname = ?, district = ?, cropQuantity = ?, price = ?, description = ? WHERE id = ?';
  db.query(query, [name, email, number, cropname, district, cropQuantity, price, description, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, message: 'Farmer updated successfully', result });
  });
});

// DELETE route for deleting a farmer by ID
app.delete('/api/farmer/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM farmer WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, message: 'Farmer deleted successfully', result });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
