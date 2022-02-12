import React, {Component} from 'react';
import {Button} from 'reactstrap';
import "./text_description.css";

export default class InfoTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFav: this.props.isFav
        };
        this.add_to_fav = () => {
                this.setState(({isFav})=> ({
                    isFav: !isFav
                }));
        }
        
    };

    render(){
        const   {isFav} = this.state,
                {delFunc, textname, idx} = this.props;

        return (
            <div className='textdesc'>
                <div className={`default_text_option ${isFav ? "yellow": ""}`}>{textname}</div>
                <div>
                    <Button className="buttonDist" outline type="button" onClick={this.add_to_fav}>Favorite</Button>
                    <Button className="buttonDist" type="button" onClick={() => delFunc(idx)}>Delete</Button>
                </div>
            </div>
            );
    }
}

