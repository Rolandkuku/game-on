import { connect } from "react-redux";
import { switchAuthType } from "../actions";
import LogBox from "../components/LogBox.jsx";

const mapStateToProps = (state) => {
    return {
        authType: state.authType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSwithAuthTypeClicked: () => {
            dispatch(switchAuthType());
        }
    };
};

const VisibleLogBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogBox);

export default VisibleLogBox;
