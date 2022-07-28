import PropTypes from "prop-types";
import React from "react";

function Section(props) {
    const className = ["section"];
    className.push(props.className);
    if (props.isCenteredContent) {
        className.push("center-content");
    }
    return <section className={className.join(" ")}>{props.children}</section>;
}

export default Section;

Section.propTypes = {
    isCenteredContent: PropTypes.bool,
    className: PropTypes.string,
};
