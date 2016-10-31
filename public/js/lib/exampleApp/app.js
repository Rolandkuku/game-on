import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userApp from "./reducers";
import App from "./components/app.js";

const ExampleApp = {
    startApp: () => {
        let store = createStore(userApp);


        render(
            <Provider store={store}>
            <App />
            </Provider>,
            document.getElementById("redux-app")
        );
    }
};

export default ExampleApp;
