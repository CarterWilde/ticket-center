import React from 'react';

import './App.css';

import Fab from './Components/Fab';
import Icon from './Components/Icon';

function App() {
  return (
    <div className="App">
      <Fab 
        icon={new Icon('+')}
        content="New Ticket"/>
    </div>
  );
}

export default App;
