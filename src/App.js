import React from 'react';
import './App.css';
import CardList from './components/CardList'
import SearchBox from './components/SearchBox';
import {robots} from './robots'
 
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Robo Friends</h1>
        <SearchBox/>
        <CardList robots={robots}/>
      </div>
    );
  }
}
 
export default App;