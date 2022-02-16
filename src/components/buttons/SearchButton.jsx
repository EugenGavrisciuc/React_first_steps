import React from 'react';
import { Button } from 'reactstrap';
import "./buttonstyle.css";

const SearchButton = (props) => {
    return (
        <div>
            <Button
            className={`btnstyle ${props.className}`}
            type="submit"
            onClick={props.additm}
            >{props.name}</Button>
        </div>
    );
};

export default SearchButton;