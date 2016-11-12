import {connect} from "react-redux";
import {subscribe} from "../actions";
import SubscribeForm from "../components/SubscribeForm.jsx";

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
        onUserSubscribeSubmit: (formData) => {
            dispatch(subscribe(formData));
        }
    };
};

const Subscribe = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribeForm);

export default Subscribe;
