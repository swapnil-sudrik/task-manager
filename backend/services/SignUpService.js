const connection = require('../config/dbconfig');
const SignUp = require('../entities/SignUpEntity');

class SignUpService {

  signUp(newUser, callback) {

  // Get the current timestamp (in milliseconds)
  const timestamp = new Date().getTime();

  // Generate a random component
  const randomComponent = Math.floor(Math.random() * 1000);

  // Combine timestamp and random component to create a unique ID
  const uniqueUserId = timestamp + randomComponent;    
  // Set the ID in the newUser object
  console.log("id is :" , uniqueUserId);
  newUser.id = uniqueUserId;




    const query = 'INSERT INTO users SET ?';
    connection.query(query, newUser, (error, results) => {
      if (error) throw error;

      const addedUser = new SignUp(
        newUser.fname,
        newUser.lname,
        newUser.email,
        newUser.password
      );

      callback(addedUser);
    });
  }
}

module.exports = new SignUpService();
