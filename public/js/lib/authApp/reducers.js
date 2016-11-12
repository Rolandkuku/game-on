import { combineReducers } from "redux";
import {
    CHECK_LOGIN_INPUTS,
    CHECK_SUBSCRIBE_INPUTS,
    SAVE_USER,
    SWITCH_AUTH_TYPE,
    subscribeFormErrors
} from "./actions";

const initialSate = {
    authType: "login",
    user: [],
    errors: []
};


/* Handles an array of error */
const errors = (state = [], action) => {
    switch(action.type) {
        case CHECK_SUBSCRIBE_INPUTS:
            return action.errors;
            break;
        default:
            return state;
    }
};

const user = (state = {}, action) => {
    switch(action.type) {
        case SAVE_USER:
            // TODO : Save users
            console.info("USER SAVED !");
            return action.user;
            break;
        default:
            return state;
    }
}

const authType = (state = "login", action) => {
    switch (action.type) {
        case SWITCH_AUTH_TYPE:
            return state === "login" ? "subscribe" : "login";
            break;
        default:
            return state;
    }
}

const authApp = combineReducers({
    errors,
    user
});

export default authApp;
