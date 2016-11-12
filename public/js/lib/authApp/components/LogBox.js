import React from "react";
import Login from "../containers/Login";
import Subscribe from "../containers/Subscribe";

const LogBox = ({authType}) => {
    if (authType === "login") {
        return <Login />
    }
    return <Subscribe />
}

export default LogBox;
