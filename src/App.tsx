import React from 'react';
import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <Person name="Shubham"
       email="happy@gmail.com"
       age={20}
       isMarried={true}
       friends={["hi","hey","got to hell"]}
      />
    </div>
  );
}

export default App;
