import React, { PropTypes as T } from 'react';
import User from './User';

const UserList = ({users, onUserSavedClicked}) => (
    <ul>
        {users.map(user =>
            <User
                key={user.id}
                {...user}
                onSavedClicked={() => onUserSavedClicked(user.id, user.saved)}
            />
        )}
    </ul>
);

UserList.propTypes = {
    users: T.arrayOf(T.shape({
        id: T.number.isRequired,
        saved: T.bool.isRequired,
        name: T.string.isRequired
    }).isRequired).isRequired,
    onUserSavedClicked: T.func.isRequired
};

export default UserList;
