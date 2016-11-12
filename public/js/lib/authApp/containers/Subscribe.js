import { connect } from "react-redux";
import { subscribe } from "../actions";
import SubscribeForm from "../components/SubscribeForm";

const mapStateToProps = (state) => {
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
    }
};

const Subscribe = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribeForm);

export default Subscribe;
