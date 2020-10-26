import React, {useState} from 'react';
import './App.css';
import CardList from './components/CardList'
import SearchBox from './components/SearchBox';
import {robots} from './robots'



function App(){

  const [robotsInfo, setRobots] = useState(robots);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="App">
      <h1 className='f3 f2-m f1-l fw2 black-90 mv3'>Robo Friends</h1>
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} setRobots={setRobots} robotsInfo={robotsInfo}/>
      <CardList robots={robotsInfo} />
    </div>
  );

}



 
export default App;