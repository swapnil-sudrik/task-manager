// backend/config/dbConfig.js
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL server');

        // Create the database if not exists
        connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
            if (err) {
                console.error('Error creating database:', err.message);
            } else {
                console.log('Database created or already exists');
            }
        });

        // Switch to the created or existing database
        connection.query(`USE ${process.env.DB_NAME}`, (err) => {
            if (err) {
                console.error('Error to using database:', err.message);
            } else {
                console.log('Using database:', process.env.DB_NAME);
                createTables();
            }
        });
    }
});

// Function to create tables
const createTables = () => {
    const createUsersTableQuery = `CREATE TABLE IF NOT EXISTS users (
      id bigint,
      fname VARCHAR(255) NOT NULL,
      lname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      PRIMARY KEY (email)
    )`;
  
    connection.query(createUsersTableQuery, (err) => {
      if (err) {
        console.error('Error creating users table:', err.message);
      } else {
        console.log('Users table created successfully');
      }
    });
}

module.exports = connection;
