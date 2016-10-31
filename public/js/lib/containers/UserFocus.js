import { connect } from "react-redux";
import { saveUser } from "../actions";
import UserForm from "../components/UserForm";

const mapStateToProps = (state) => {
    let user = state.users.filter(u => u.focused);
    return {
        user: user[0]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserFormSubmit: (index) => {
            dispatch(saveUser(index, false));
        }
    };
};

const UserFocus = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);

export default UserFocus;
