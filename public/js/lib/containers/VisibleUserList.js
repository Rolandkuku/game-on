import { connect } from 'react-redux'
import { saveUser } from '../actions'
import UserList from '../components/UserList'

const getVisibleUsers = (users, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return users;
        case "SHOW_SAVED":
            return users.filter(u => u.saved);
        case "SHOW_PENDING":
            return users.filter(u => !u.saved);
        default:
            return users;
    }
};

const mapStateToProps = (state) => {
    return {
        users: getVisibleUsers(state.users, state.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserSavedClicked: (id, saved) => {
            dispatch(saveUser(id, saved));
        }
    };
};

const VisibleUserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default VisibleUserList;
