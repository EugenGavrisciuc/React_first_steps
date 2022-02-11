import React, {Component} from 'react';
import {Button} from 'reactstrap';
import "./text_description.css";

export default class InfoTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            textTitle: "Hello",
            isFav: false
        }
        this.add_to_fav = () => {
                this.setState(({isFav})=> ({
                    textTitle: "Test",
                    isFav: !isFav
                }));
        }
        
    };

    render(){
        const {textTitle, isFav} = this.state;
        return (
            <div className='textdesc'>
                <div className={`default_text_option ${isFav ? "yellow": ""}`}>{textTitle}</div>
                <div>
                    <Button className="buttonDist" outline type="button" onClick={this.add_to_fav}>Favorite</Button>
                    <Button className="buttonDist" type="button">Delete</Button>
                </div>
            </div>
            );
    }
}

