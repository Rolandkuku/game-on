import React, {PropTypes as T} from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";


export default class SubscribeForm extends React.PureComponent {

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
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.onUserSubscribeSubmit(this.user);
                    }}
                    >
                    <TextField
                        type="text"
                        name="email"
                        hintText="Email"
                        defaultValue={email}
                        onChange={this.props.inputChanged}
                        errorText={this.getErrorText("email")} />
                    <TextField
                        type="password"
                        name="password"
                        hintText="Password"
                        defaultValue={password}
                        onChange={this.props.inputChanged}
                        errorText={this.getErrorText("password")}/>
                    <FlatButton
                        type="submit"
                        primary={true}
                        label="Subscribe" />
                </form>
            </div>
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

SubscribeForm.propTypes = {
    onUserSubscribeSubmit: T.func.isRequired,
    inputChanged: T.func.isRequired,
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
