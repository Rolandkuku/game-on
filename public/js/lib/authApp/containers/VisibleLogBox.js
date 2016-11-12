import { connect } from "react-redux";
import { switchAuthType } from "../actions";
import LogBox from "../components/LogBox";

const mapStateToProps = (state) => {
    return {
        authType: state.authType
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchLogTypeClicked: () => {
            dispatch(switchAuthType());
        }
    };
};

const VisibleLogBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogBox);

export default VisibleLogBox;
