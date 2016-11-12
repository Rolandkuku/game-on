import {connect} from "react-redux";
import {login} from "../actions";
import LoginForm from "../components/LoginForm.jsx";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        errors: state.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginFormSubimt: (formData) => {
            dispatch(login(formData));
        }
    };
};

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default Login;
