import React from "react";
import { createStore } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import authApp from "./reducers";
import App from "./components/app";

const AuthApp = {
    startApp: () => {
        let store = createStore(authApp);
        render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById("redux-app")
        )
    }
};

export default AuthApp;

/* ** Sates **

    State = {
        authType: "login" | "subscribe",
        user: {
            name: string,
            password: string,
            email: string
        }
        errors = {
            erroName: {
                inputName: "srting",
                label: "string",
                pass: bool
            }
        }
    }

*/
