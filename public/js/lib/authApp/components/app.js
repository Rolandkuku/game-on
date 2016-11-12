import React from "react";
import VisibleLogBox from "../containers/VisibleLogBox";
import AppBar from 'material-ui/AppBar';

const App = () => {
    return (
        <div>
            <AppBar
                title="Auth app"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
            <VisibleLogBox />
        </div>
    );
};

export default App;
