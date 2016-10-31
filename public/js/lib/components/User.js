import React, { PropTypes as T } from "react";


const User = ({ onSavedClicked, onUserClicked, saved, name }) => {
    let btnText = saved ? "Unsave" : "Save";
    return (
        <li style={{ display: "flex" }}>
            <p
                style={{color: saved ? "color": "green"}}
                onClick={onUserClicked}
            >
                {name}
            </p>
            <button type="button"
                onClick={onSavedClicked}
            >
                {btnText}
            </button>
        </li>
    )
};

User.propTypes = {
    onSavedClicked: T.func.isRequired,
    onUserClicked: T.func.isRequired,
    saved: T.bool.isRequired,
    name: T.string.isRequired
};

export default User;
