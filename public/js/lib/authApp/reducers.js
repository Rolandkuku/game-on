import {combineReducers} from "redux";
import {
    CHECK_FORM_ERRORS,
    SUBSCRIBE,
    LOG_IN,
    SWITCH_AUTH_TYPE,
    UPDATE_USER
} from "./actions";



/* Handles an array of error */
const errors = (state = [], action) => {
    switch(action.type) {
        case CHECK_FORM_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

const user = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_USER:
            state.user[action.attribute] = action.value;
            return state.user;
        case SUBSCRIBE:
            console.info("USER SAVED !");
            return action.user;
        case LOG_IN:
            console.info("USER LOGGED !");
            return action.user;
        default:
            return state;
    }
};

const authType = (state = "login", action) => {
    switch (action.type) {
        case SWITCH_AUTH_TYPE:
            return state === "login" ? "subscribe" : "login";
        default:
            return state;
    }
};

const authApp = combineReducers({
    errors,
    user,
    authType
});

export default authApp;
