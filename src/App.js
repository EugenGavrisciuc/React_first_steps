import SearchBar from "./components/SearchBar/SearchBar"
import SearchButton from "./components/buttons/SearchButton";
import Infodiv from "./components/info/Infodiv";
import InfoTable from "./components/text-description/TEXT_DESCRIPTION"
import "bootstrap/dist/css/bootstrap.css"
import "./components/containerstyles.css"
import styled from "styled-components";
import './App.css';
import { Component } from "react/cjs/react.production.min";
// import "./components/searchbar.css";

const TextAlign = styled.div`
    margin: 5px;
    `

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data : [
        {idx: 1, textlist: "Moldova", important: false},
        {idx: 2, textlist: "Russia", important: false},
        {idx: 3, textlist: "China", important: true},
        {idx: 4, textlist: "Japan", important: true}
      ]
    }

    this.delItem = this.delItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  delItem(el){
    this.setState(({data}) =>{
      const before = this.state.data.slice();
      const after = before.findIndex(e => el === e.idx);
      before.splice(after, 1);
      console.log(before);
      return{
        data: before
      }
    })
  }

  addItem(){
    this.setState(({data}) => {
      const before = this.state.data.slice();
      const after = before.at(-1);
      before.push({
      idx: after.idx+1,
      textlist: "Romania",
      important: false
      })
      return {data: before}
    })
  }

  render(){

    const {data} = this.state;

  return (
    <div className="App">

      <div className="bodySize">
          <Infodiv name={"Nume Prenume"} listsNumber={5} liked={0}/>
          <div className="container">
            <SearchBar inputtext={"Search"}/>
            <SearchButton name={"Submit"}/>
            <SearchButton name={"Clear"}/>
          </div>

          {/* It is creating new rows in dependence with the number of objects in data */}
            {
              [...data].map(n => 
                <InfoTable 
                key={n.idx} 
                textname={n.textlist} 
                isFav={n.important}
                delFunc={this.delItem}
                idx={n.idx}
                />)

            }
          <div className="container spaceel">
            <SearchBar inputtext={"What element would you like to add?"}/>
            <SearchButton
            name={"Add"}
            additm={this.addItem}
            />
          </div>
        </div>

      </div>
  );
          }
        }