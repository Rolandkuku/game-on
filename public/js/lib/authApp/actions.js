export const CHECK_FORM_ERRORS = "CHECK_FORM_ERRORS";
export const SWITCH_AUTH_TYPE = "SWITCH_AUTH_TYPE";
export const SUBSCRIBE = "SUBSCRIBE";
export const LOG_IN = "LOG_IN";
export const UPDATE_USER = "UPDATE_USER";


const setUser = (formData) => {
    return {
        email: formData.email,
        password: formData.passord,
        saved: true
    };
};

const logUser = (formData) => {
    // TODO: login ajax stuff
    return {
        email: formData.email,
        password: formData.password,
        saved: true
    };
};

const checkErrors = (formData) => {
    const errors = [];
    // TODO : refactor this
    if (!formData.password || formData.password.length === 0) {
        errors.push({
            inputName: "password",
            label: "Password cannot be empty",
            pass: false
        });
    }
    if (!formData.email || formData.email.length === 0) {
        errors.push({
            inputName: "email",
            label: "Email cannot be empty",
            pass: false
        });
    }
    return errors;
};

export const subscribe = (formData) => {
    const errors = checkErrors(formData);
    if (errors.length > 0) {
        return {
            type: CHECK_FORM_ERRORS,
            errors: errors
        };
    }
    return {
        type: SUBSCRIBE,
        user: setUser(formData)
    };
};

export const login = (formData) => {
    const errors = checkErrors(formData);
    if (errors.length > 0) {
        return {
            type: CHECK_FORM_ERRORS,
            errors: errors
        };
    }
    return {
        type: LOG_IN,
        user: logUser(formData)
    };
};

export const updateUser = (formData) => {
    if (formData) {
        return setUser(formData);
    }
};

export const switchAuthType = () => {
    return {
        type: SWITCH_AUTH_TYPE
    };
};

export const userInputChanged = (target) => {
    return {
        type: UPDATE_USER,
        attribute: target.name,
        value: target.value
    };
};
