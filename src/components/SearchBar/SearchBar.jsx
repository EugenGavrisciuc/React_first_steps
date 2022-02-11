import React from 'react';
import "./searchbar.css";

const SearchBar = (props) => {
    return (
        <div className='styleAboutDiv'>
            <input
            className="inputStyle"
            type="text"
            placeholder={props.inputtext}
            />
        </div>
    );
};

export default SearchBar;