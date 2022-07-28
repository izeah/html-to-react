import PropTypes from "prop-types";
import React from "react";

function List(props) {
    const className = ["list-reset"];
    className.push(props.className);
    if (props.isSmall) {
        className.push("text-xs");
    }
    return (
        <ul className={className.join(" ")}>
            {props.data.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={item.isChecked ? "is-checked" : ""}>
                        {item.content}
                    </li>
                );
            })}
        </ul>
    );
}

export default List;

List.propTypes = {
    data: PropTypes.array,
    isSmall: PropTypes.bool,
    className: PropTypes.string,
};
