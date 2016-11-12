import React, {PropTypes as T} from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

export default class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <TextField
                    hintText="email" />
                <TextField
                    hintText="password" />
                <FlatButton
                    label="Log In"
                    primary={true} />
            </form>
        );
    }
}

LoginForm.propTypes = {

};
