import React from 'react';
import "./infodivstyle.css"

const Infodiv = (props) => {
    return (
        <div className="infodiv">
            <div>{props.name}</div>
            <div>{props.listsNumber} posts, and number of favorited {props.liked}</div>
        </div>
    );
};

export default Infodiv;