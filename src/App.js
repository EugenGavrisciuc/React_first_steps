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

const FavButtonShow = styled(SearchButton)`
    width: 140px;
    `

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: [
        {idx: 1, textlist: "Moldova", important: false},
        {idx: 2, textlist: "Russia", important: false},
        {idx: 3, textlist: "China", important: true},
        {idx: 4, textlist: "Japan", important: true}
      ],
        dataSearch: [],
        numeprenume: "Eugen Gavrisciuc",
        textcamp: "",
        searchcamp: ""
    };

    this.delItem = this.delItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.textChange = this.textChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.copyFunc = this.copyFunc.bind(this);

    this.addItemFav = (el) => {
      this.setState(({data}) => {
        const before = this.state.data.slice();
        const after = before.findIndex(e => el === e.idx);
        const old = before[after];
        const newItem = {...old, important: !old.important }
        const newArr = [...data.slice(0, after), newItem, ...data.slice(after + 1)]
        return {
          data: newArr
        }      
     })
    };
  };

  copyFunc(){
    this.setState(({data}) => {return {dataSearch: data}})
  }

  searchPost(items, term){
    if(term.length === 0){
      return items
    }

    items.filter((el) => {
      return el.textlist.indexOf(term) > -1
    }
    )
  }
  updateSearch(e){
    // console.log(e.target.value); //debugging
    console.log(this.state)
    this.setState({
      searchcamp: e.target.value
    })
    // this.setState(({data}) => {
    //   return {dataSearch: data}
    // })
    // this.searchPost(this.state.data, this.state.searchcamp)
  }

  delItem(el){
    this.setState(({data}) =>{
      const before = this.state.data.slice();
      const after = before.findIndex(e => el === e.idx);
      before.splice(after, 1);
      return{
        data: before
      }
    })
  }

  addItem(){
    this.setState(({data}) => {
      if(this.state.data.length > 0){
        const before = this.state.data.slice();
        const after = before.at(-1); //last element of array
        before.push({
        idx: after.idx+1,
        textlist: this.state.textcamp,
        important: false
        })
        return {data: before, textcamp:""}
      } else {
        const createArr = this.state.data;
        createArr.push({
        idx: 0,
        textlist: this.state.textcamp,
        important: false
        })
        return {data: createArr, textcamp:""}
      }
    })
  }

  textChange(e){
    // console.log(e.target.value) // Debugging
    this.setState({
        textcamp: e.target.value
    })
  }

  render(){

    const {data, numeprenume, textcamp, searchcamp, dataSearch} = this.state;
    const dataNumber = data.length;
    const favNumber = data.filter(e => e.important === true).length;
    // const visiblePosts = this.searchPost(data, searchcamp);  
    // console.log(this.state.copyFunc)
    
    
  return (
    <div className="App">
      <div className="bodySize">
          <Infodiv name={numeprenume} listsNumber={dataNumber} liked={favNumber}/>
          <div className="container">
            <SearchBar inputtext={"Search"} getVal={this.updateSearch} valitm={searchcamp}/>
            <SearchButton name={"All"}/>
            <FavButtonShow name={"Favorited items"}/>
          </div>

          {/* It is creating new rows in dependence with the number of objects in data */}
            {
              [...data].map(n => 
                <InfoTable 
                key={n.idx} 
                textname={n.textlist} 
                isFav={n.important}
                delFunc={this.delItem}
                addFav={this.addItemFav}
                idx={n.idx}
                />)

            }
          <div className="container spaceel">
            <SearchBar
            inputtext={"What element would you like to add?"}
            getVal={this.textChange}
            valitm={textcamp}
            />
            <SearchButton
            name={"Add"}
            additm={this.addItem}
            />
          </div>
        </div>

      </div>
  );}
}