import React from 'react';
import Map from "./container/reactiveMap";
import Side from "./container/reactiveSide";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Side />
      <Map />
    </div>
  );
};

export default App;
