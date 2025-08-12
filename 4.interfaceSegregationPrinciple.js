// interface segregation principle

/*
 * No code should be forced to depend on methods it does not use.
 * Client's shouldn't be forced to depend on methods they don't use.
 * In JavaScript, this translates to designing lean, purpose-specific interfaces or classes.
 */

// wrong

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.initiateUser();
  }

  initiateUser() {
    this.username = this.username;
    this.validateUser();
  }

  validateUser = (user, pass) => {
    console.log('Validating ...');
  };
}

const user = new User('Francesco', '123456');
console.log(user);
// validating...

// correct way

class UserISP {
  constructor(username, password, validate) {
    this.username = username;
    this.password = password;
    this.validate = validate;
    if (validate) {
      this.initiateUser(username, password);
    } else {
      console.log('No validation required');
    }
  }

  initiateUser() {
    this.validateUser(this.username, this.password);
  }

  validateuser = (username, password) => {
    console.log('validating...');
  }
}

// user validation required
console.log(new UserISP('Francesco', '123456', true));

// validating...
/* 
    UserISP {
        validateUser: [Function: validateUser],
        username: 'Francesco',
        password: '123456',
        validate: true
    }
*/

// user with no validation
console.log(new UserISP('guest', 'guest', false));
// no validation required

/* 
    UserISP {
        validateUser: [Function: validateUser],
        username: 'guest',
        password: 'guest',
        validate: false
    }
*/
