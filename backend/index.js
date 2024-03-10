const express = require('express');
const cors = require('cors');
require('./config/dbconfig');
// Import and use the sign-up routes
const signUpRoutes = require('./routes/SignUpRoutes');
const emailSendingRoutes = require('./routes/EmailSendingRoute');
const loginRouter = require('./routes/LoginRoutes');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
// app.use(db);

app.use('/api', signUpRoutes);
app.use('/api', emailSendingRoutes );
app.use('/api', loginRouter);

app.listen(port, () => {
  // generateUniqueUserId()
  console.log(`Server is running on http://localhost:${port}`);
});



// // Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Define a route to get all users
// app.get('/users', (req, res) => {
//   connection.query('SELECT * FROM users', (err, results, fields) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Define a route to create a new user
// app.post('/users', (req, res) => {
//   const { name, email } = req.body;

//   if (!name || !email) {
//     res.status(400).json({ error: 'Name and email are required' });
//     return;
//   }

//   connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results, fields) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json({ id: results.insertId, name, email });
//     }
//   });
// });
