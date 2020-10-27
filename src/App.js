import React, {useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList'
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import {robots} from './robots';



function App(){

  const [robotsInfo, setRobots] = useState(robots);
  const [searchInput, setSearchInput] = useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => setRobots(users))
  }, [])

  return (
    <div className="App">
      <h1 className='f3 f2-m f1-l fw2 black-90 mv3' style={{color:'violet'}}>Robo Friends</h1>
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} setRobots={setRobots} robotsInfo={robotsInfo}/>
      <Scroll>
      <CardList robots={robotsInfo} />
      </Scroll>
    </div>
  );

}



 
export default App;