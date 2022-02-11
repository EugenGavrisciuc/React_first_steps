import SearchBar from "./components/SearchBar/SearchBar"
import SearchButton from "./components/buttons/SearchButton";
import Infodiv from "./components/info/Infodiv";
import InfoTable from "./components/text-description/TEXT_DESCRIPTION"
import "bootstrap/dist/css/bootstrap.css"
import "./components/containerstyles.css"
import styled from "styled-components";
import './App.css';
// import "./components/searchbar.css";

const TextAlign = styled.div`
    margin: 5px;
    `

function App() {
  return (
    <div className="App">

      <div className="bodySize">
          <Infodiv name={"Nume Prenume"} listsNumber={5} liked={0}/>
          <div className="container">
            <SearchBar inputtext={"Search"}/>
            <SearchButton name={"Submit"}/>
            <SearchButton name={"Clear"}/>
          </div>
            <InfoTable textTitle/>
            <InfoTable/>
            <InfoTable/>
          <div className="container spaceel">
            <SearchBar inputtext={"What element would you like to add?"}/>
            <SearchButton name={"Add"}/>
          </div>
        </div>

      </div>
  );
}

export default App;
