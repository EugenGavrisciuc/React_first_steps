import React from 'react';
import { Button } from 'reactstrap';
import "./buttonstyle.css";

const SearchButton = (props) => {
    return (
        <div>
            <Button
            className="btnstyle"
            type="submit">{props.name}</Button>
        </div>
    );
};

export default SearchButton;