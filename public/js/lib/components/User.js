import React, { PropTypes as T } from "react";


const User = ({ onSavedClicked, saved, name }) => {
    let btnText = saved ? "Unsave" : "Save";
    return (
        <li style={{ display: "flex" }}>
            <p
                style={{textDecoration: saved ? "color": "green"}}
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
    saved: T.bool.isRequired,
    name: T.string.isRequired
};

export default User;
