import React, { PropTypes as T } from "react";

const User = ({ onSavedClicked, saved, name }) => {
    <li style={{ display: "flex" }}>
        <p
            style={{textDecoration: saved ? "color": "green"}}
        >
            {name}
        </p>
        <button
            onClick={onSavedClicked}
        >
            Save
        </button>
    </li>
};

User.propTypes = {
    onSavedClicked: T.func.isRequired,
    saved: T.bool.isRequired,
    name: T.string.isRequired
};

export default User;
