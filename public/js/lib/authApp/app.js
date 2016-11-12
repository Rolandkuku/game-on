import React from "react";
import { createStore } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import authApp from "./reducers";
import App from "./components/app";
/* Material ui stuff */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const AuthApp = {
    startApp: () => {
        let store = createStore(authApp);
        render(
            <MuiThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </MuiThemeProvider>,
            document.getElementById("redux-app")
        );
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
