import React from 'react';

import './App.css';

import Fab from './Components/Fab';
import TitleBar from './Components/TitleBar';
import Icon from './Components/ts/Icon';

function App() {
  return (
    <div className="App">
      <TitleBar icons={[new Icon('X')]}/>
      <Fab 
        icon={new Icon('+')}
        content="New Ticket"/>
    </div>
  );
}

export default App;
