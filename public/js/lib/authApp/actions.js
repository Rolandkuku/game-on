export const CHECK_SUBSCRIBE_INPUTS = "CHECK_SUBSCRIBE_INPUTS";
export const CHECK_LOGIN_INPUTS = "CHECK_LOGIN_INPUTS";
export const SAVE_USER = "SAVE_USER";
export const SWITCH_AUTH_TYPE = "SWITCH_AUTH_TYPE";


export const subscribe = (formData) => {
    const errors = checkErrors(formData);
    if (errors.length > 0) {
        return {
            type: CHECK_SUBSCRIBE_INPUTS,
            errors: errors
        };
    }
    return {
        type: SAVE_USER,
        user: setUser(formData)
    };
};

const setUser = (formData) => {
    return {
        name: formData.name,
        email: formData.email,
        password: formData.passord,
        saved: true
    };
};

const checkErrors = (formData) => {
    const errors = [];
    if (!formData.name || formData.name.length === 0) {
        errors.push({
            inputName: "name",
            label: "Name cannot be empty",
            pass: false
        })
    }
    if (!formData.password || formData.password.length === 0) {
        errors.push({
            inputName: "password",
            label: "Password cannot be empty",
            pass: false
        })
    }
    if (!formData.email || formData.email.length === 0) {
        errors.push({
            inputName: "email",
            label: "Email cannot be empty",
            pass: false
        })
    }
    return errors;
}

const switchAuthType = () => {
    return {
        type: SWITCH_AUTH_TYPE
    };
}
