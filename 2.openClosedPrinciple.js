// open for extension but closed for modification
/*
 * A software entities must be allow to change the behaviour by adding the new code,
 * instead of modifying the old code without breaking the existing code.
 */

/*
 * Our system should provide a way to add the new functionalities by adding the new code,
 * instead rather than modifying the existing code and not to break the existing functionalities.
 */

const roles = ['ADMIN', 'USER'];

const checkRole = (user) => {
  if (roles.includes(user.role)) {
    return true;
  } else {
    return false;
  }
};

// new code
// we're adding the new role without touching the previous code
const addRole = (role) => {
  roles.push(role);
};

addRole('SUPERUSER');

// test role
console.log(checkRole({ username: 'test user 1', role: 'ADMIN' })); // true
console.log(checkRole({username: 'test user 2', role: 'FOO'})); // false
console.log(checkRole({username: 'test user 3', role: 'SUPERUSER'})); // true
