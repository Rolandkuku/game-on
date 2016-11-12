export const CHECK_FORM_ERRORS = "CHECK_FORM_ERRORS";
export const SAVE_USER = "SAVE_USER";
export const SWITCH_AUTH_TYPE = "SWITCH_AUTH_TYPE";
export const LOG_IN = "LOG_IN";


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
    // if (!formData.name || formData.name.length === 0) {
    //     errors.push({
    //         inputName: "name",
    //         label: "Name cannot be empty",
    //         pass: false
    //     });
    // }
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
        type: SAVE_USER,
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

export const switchAuthType = () => {
    return {
        type: SWITCH_AUTH_TYPE
    };
};
