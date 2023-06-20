import React, { useState } from 'react';
import Task4 from './components/task4';
import './components/task4.css';

function App() {
  const [displayTask, setDisplayTask] = useState(false);
  
  return (
    <div className="App">
      <input className="btn1" onClick={()=> setDisplayTask(!displayTask)} type="button" value="Toggle" />
      {displayTask && <Task4 />}
    </div>
  );
}

export default App;
