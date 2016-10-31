import React, { PropTypes as T } from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
    <p>
        Show :
        {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_SAVED">
            Saved
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_PENDING">
            Pending
        </FilterLink>
    </p>
);

export default Footer;
