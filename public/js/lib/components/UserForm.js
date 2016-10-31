import React, { PropTypes as T } from "react";

const UserForm = ({ user, onUserFormSubmit }) => {
    if (!user) {
        user = {};
    }
    return (
        <form>
            <label>
                Name
                <input type="text" value={user.name} />
            </label>
            <label>
                Email
                <input type="text" value={user.email} />
            </label>
            <button type="button"
                onClick={onUserFormSubmit}
            >
                Save
            </button>
        </form>
    );
};

UserForm.propTypes = {
    onUserFormSubmit: T.func.isRequired,
    user: T.shape({
        id: T.number.isRequired,
        name: T.string.isRequired,
        email: T.string.isRequired
    })
};

export default UserForm;
