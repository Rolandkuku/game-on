import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        errors: state.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default Login;
