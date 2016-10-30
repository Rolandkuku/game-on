import React from "react";
import Footer from "./Footer";
import AddUser from "../containers/AddUser";
import VisibleUserList from "../containers/VisibleUserList";

const App = () => (
    <div>
        <AddUser />
        <VisibleUserList />
        <Footer />
    </div>
);

export default App;
