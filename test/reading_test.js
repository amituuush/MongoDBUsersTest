const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;
  // insert a record into our user collection
  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users with a name of joe', (done) => {
    // joe will be the instance of joe here
    User.find({ name: 'Joe' })
      .then((users) => {
        console.log(users);
        done();
      });
  });
});
