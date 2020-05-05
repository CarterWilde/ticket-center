import React from 'react';

import './App.css';

import Fab from './Components/Fab';

function App() {
  return (
    <div className="App">
      <Fab 
        icon={{text: '+', classNames: []}}
        content="New Ticket"/>
    </div>
  );
}

export default App;
