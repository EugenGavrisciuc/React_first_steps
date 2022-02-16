import React, {Component} from 'react';
import "./searchbar.css";

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
        
        };
    }

    render(){
    const {inputtext, getVal, valitm} = this.props;

    return (
        <div className='styleAboutDiv'>
            <input
            className="inputStyle"
            type="text"
            placeholder={inputtext}
            onChange={getVal}
            value={valitm}
            />
        </div>
    )
    }
}