const router = require('express').Router();
let User = require('../models/user.model');

// First endpoint handling http requests on the /Users path
// If there's a GET request
router.route('/').get((req, res) => {
  // Mongoose method that's get a list of all users from the MongoDB DB.
  // returns a promise in JSON format
  User.find()
    // Return in JSON format, the users we got from above
    .then(users => res.json(users))
    // Return error
    .catch(err => res.status(400).json('Error: ' + err));
});

// Handles incoming POST requests
router.route('/add').post((req, res) => {

  // Part of request body
  const username = req.body.username;
  const newUser = new User({username});
  
  // Mongoose method to save to DB
  newUser.save()

    // returns the followinng message
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

modules.exports = router;

