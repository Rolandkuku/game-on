import React, {PropTypes as T} from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";


export default class SubscribeForm extends React.PureComponent {

    render() {
        const {email, password} = this.props.user;
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.onUserSubscribeSubmit(this.user);
                    }}
                    >
                    <TextField
                        type="text"
                        hintText="Email"
                        defaultValue={email}
                        onChange={this.emailChanged}
                        style={this.highligthError("email")} />
                    <TextField
                        type="password"
                        hintText="Password"
                        defaultValue={password}
                        onChange={this.passwordChanged}
                        style={this.highligthError("password")} />
                    <FlatButton
                        type="submit"
                        primary={true}
                        label="Subscribe" />
                </form>
                <ul>
                    {this.renderErrors()}
                </ul>
            </div>
        );
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                this.props.errors.map((e, index) => (
                    <li key={index}>{e.label}</li>
                ))
            );
        }
    }

    highligthError(inputName) {
        if (this.props.errors.length < 0) {
            return (
                {
                    border: this.errors.filter(e => e.inputName === inputName).length === 0 ? "1px solid black" : "1px solid red"
                }
            );
        }
    }
}

SubscribeForm.propTypes = {
    onUserSubscribeSubmit: T.func.isRequired,
    user: T.shape({
        email: T.string.isRequired,
        password: T.string.isRequired
    }),
    errors: T.arrayOf(
        T.shape({
            inputName: T.string.isRequired,
            label: T.string.isRequired,
            pass: T.bool.isRequired
        }).isRequired
    ).isRequired
};
