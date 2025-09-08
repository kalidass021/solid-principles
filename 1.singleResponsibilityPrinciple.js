// a function or any single identity should have only one responsibility

// wrong

const createAndValidateUser = (name, password, email) => {
    // validate the data
    const isFormValid = testForm(name, password, email);

    if (!isFormValid) return;

    // inserting the user data in the database
    User.Create(name, password, email);
}

// correct way

const validateRequest = (req) => {
    const isFormValid = testForm(name, password, email);

    if (!isFormValid) return;

    // if form is valid
    createUser(req);
}

// create user function
const createUser = (req) => User.Create(req.name, req.password, req.email);