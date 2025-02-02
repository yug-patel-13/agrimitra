const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'farmer' // Replace with your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Fetch data from the database
app.get('/graph', (req, res) => {
  const query = 'SELECT month, value FROM farmer'; // Adjust query to match your table structure
  db.query(query, (err, results) => {
    if (err) throw err;

    const labels = results.map(row => row.month);
    const data = results.map(row => row.value);

    res.render('index', { labels, data });
  });
});

// Start server
app.listen(3333, () => {
  console.log('Server is running at http://localhost:3333');
});
