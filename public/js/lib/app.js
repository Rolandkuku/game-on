import React from "react";
import { createStore, Component } from "redux";

const userActions = {
    SET_USER_NAME: "SET_USER_NAME",
    SET_USER_PASSWORD: "SET_USER_PASSWORD"
};

class User {
    constructor() {
        this.username = "";
        this.password = "";
    }

    set username(username) {
        if (username) {
            console.debug("username as just been set to " + username);
            this.username = username;
        } else {
            console.warn("No username specified");
        }
    }

    set password(password) {
        if (username) {
            console.debug("password as just been set to " + password);
            this.password = password;
        } else {
            console.warn("No password specified");
        }
    }
}

const user = new User();

const setUserName = (username) => {
    return {
        type: SET_USER_NAME,
        username: username
    }
}

const setUserPassword = (password) => {
    return {
        type: SET_USER_PASSWORD,
        password: password
    }
}
