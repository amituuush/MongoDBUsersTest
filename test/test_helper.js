const mongoose = require('mongoose');

// connects mongoose to mongodb
// mongo will connect to db called /users-test
// we don't have to create the db ahead of time, mongo and mongoose will create the db for you using this line
mongoose.connect('mongodb://localhost/users_test');

// takes time to connect to mongo database, so we use these event handlers to handle these events once there is or isn't a connection
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });
