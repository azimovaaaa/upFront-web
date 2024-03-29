const validator = require('validator');

const validateSignUpForm = (payload) => {
    const errors = {};
    let message = '';
    let isFormValid = true;

    /* TODO: add more validation criteria */
    
    if (
        !payload ||
        typeof payload.firstName !== 'string' ||
        payload.firstName.trim().length === 0
    ) {
        isFormValid = false;
        errors.firstName = 'Please provide a first name.';
    }

    if (
        !payload ||
        typeof payload.lastName !== 'string' ||
        payload.lastName.trim().length === 0
    ) {
        isFormValid = false;
        errors.lastName = 'Please provide a last name.';
    }

    if (
        !payload ||
        typeof payload.email !== 'string' ||
        !validator.isEmail(payload.email)
    ) {
        isFormValid = false;
        errors.email = 'Please provide a valid email address.';
    }

    if (
        !payload ||
        typeof payload.password !== 'string' ||
        payload.password.trim().length < 8
    ) {
        isFormValid = false;
        errors.password = 'Password must have at least 8 characters.';
    }

    if (!isFormValid) {
        message = 'Please fix errors and try again.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
};

const validateLoginForm = (payload) => {
    const errors = {};
    let message = '';
    let isFormValid = true;

    if (
        !payload ||
        typeof payload.email !== 'string' ||
        !validator.isEmail(payload.email)
    ) {
        isFormValid = false;
        errors.email = 'Please provide a valid email address.';
    }

    if (
        !payload ||
        typeof payload.password !== 'string' ||
        payload.password.trim().length < 1
    ) {
        isFormValid = false;
        errors.password = 'Please enter a password.';
    }

    if (!isFormValid) {
        message = 'Please fix errors and try again.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

const validateLearnMore = (payload) => {
    const errors = {};
    let message = '';
    let isFormValid = true;

    if (
        !payload ||
        typeof payload.firstName !== 'string' ||
        payload.firstName.trim().length === 0
    ) {
        isFormValid = false;
        errors.firstName = 'Please provide a first name.';
    }

    if (
        !payload ||
        typeof payload.lastName !== 'string' ||
        payload.lastName.trim().length === 0
    ) {
        isFormValid = false;
        errors.lastName = 'Please provide a last name.';
    }

    if (
        !payload ||
        typeof payload.email !== 'string' ||
        !validator.isEmail(payload.email)
    ) {
        isFormValid = false;
        errors.email = 'Please provide a valid email address.';
    }

    if (!isFormValid) {
        message = 'Please fix errors and try again.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

module.exports = {
    validateSignUpForm: validateSignUpForm,
    validateLoginForm: validateLoginForm,
    validateLearnMore: validateLearnMore
};
