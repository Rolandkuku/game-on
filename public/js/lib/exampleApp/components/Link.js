import React, { PropTypes as T } from "react";

const Link = ({ active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};

Link.propTypes = {
    active: T.bool.isRequired,
    children: T.node.isRequired,
    onClick: T.func.isRequired
};

export default Link;
