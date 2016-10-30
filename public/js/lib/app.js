import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userApp from "./reducers";
import App from "./components/app.js";

let store = createStore(userApp);

let unsubsbcribe = store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("redux-app")
);
