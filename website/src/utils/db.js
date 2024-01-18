// ./src/utils/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "AdityaSingh",
  password: "Aditya@0305",
  database: "ContactForm",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
