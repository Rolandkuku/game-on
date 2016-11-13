import {connect} from "react-redux";
import {login, userInputChanged} from "../actions";
import LoginForm from "../components/LoginForm.jsx";

const mapStateToProps = (state) => {
    if (!state.user.email) {
        state.user = {
            email: "",
            password: ""
        };
    }
    return {
        user: state.user,
        errors: state.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLoginSubmit: (formData) => {
            dispatch(login(formData));
        },
        inputChanged: (ev) => {
            userInputChanged(ev.target);
        }
    };
};

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default Login;
