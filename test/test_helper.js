const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// runs one time for entire test suite
before((done) => {
  // connects mongoose to mongodb
  // mongo will connect to db called /users-test
  // we don't have to create the db ahead of time, mongo and mongoose will create the db for you using this line
  mongoose.connect('mongodb://localhost/users_test');

  // takes time to connect to mongo database, so we use these event handlers to handle these events once there is or isn't a connection
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});


// runs before each test in our test suite
// delete all records in our users collections before each test
// every function that we run inside of mocha (beforeEach, it, describe, etc) gets called with a 'done' callback.
// Done says when you run the done function, it means I'm done with all the logic inside the beforeEach
beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    // callback is run only after our collection of users is deleted or 'dropped'
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
  // mocha will continue to run tests and were not sure if the drop is completed before next test

});
