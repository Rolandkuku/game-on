import React from "react";
import Footer from "./Footer";
import AddUser from "../containers/AddUser";
import VisibleUserList from "../containers/VisibleUserList";
import UserFocus from "../containers/UserFocus";

const App = () => (
    <div>
        <AddUser />
        <div style={{display: "flex"}}>
            <VisibleUserList />
            <UserFocus />
        </div>
        <Footer />
    </div>
);

export default App;
