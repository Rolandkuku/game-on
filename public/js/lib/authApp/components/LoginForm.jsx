import React, {PropTypes as T} from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        if (!this.user) {
            this.user = {
                email: "",
                password: ""
            };
        }
    }

    render() {
        const {email, password} = this.props.user;
        return (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    this.props.onUserLoginSubmit(this.user);
                }}>
                <TextField
                    hintText="Email"
                    name="email"
                    defaultValue={email}
                    errorText={this.getErrorText("email")}
                    onChange={this.props.inputChanged}/>
                <TextField
                    hintText="Password"
                    name="password"
                    defaultValue={password}
                    errorText={this.getErrorText("password")}
                    onChange={this.props.inputChanged}/>
                <FlatButton
                    type="submit"
                    label="Log In"
                    primary={true} />
            </form>
        );
    }

    getErrorText(inputName) {
        if(this.props.errors) {
            return (
                this.props.errors.
                    filter(e => {
                        return e.inputName === inputName;
                    })
                    .map(e => {
                        return e.label;
                    })
                    .join(", ")
            );
        }
    }
}

LoginForm.propTypes = {
    onUserLoginSubmit: T.func.isRequired,
    inputChanged: T.func.isRequired,
    user: T.shape({
        email: T.string.isRequired,
        password: T.string.isRequired
    }).isRequired,
    errors: T.arrayOf(
        T.shape({
            inputName: T.string.isRequired,
            label: T.string.isRequired,
            pass: T.bool.isRequired
        }).isRequired
    ).isRequired
};
