import PropTypes from "prop-types";
import React from "react";

function Card(props) {
    const className = ["tiles-item"];
    className.push(props.className);
    return (
        <div className={className.join(" ")}>
            <div
                className={`tiles-item-inner ${
                    props.hasShadow ? " has-shadow" : ""
                }`}>
                {props.children}
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    hasShadow: PropTypes.bool,
    className: PropTypes.string,
};
