import React from 'react';
// import email from '../email.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Caroline Burns
        </h1>
      </div>
      <div className="contact">
        <div className="email">
          <img src='../email.png'></img>
          <p>321cburns@gmail.com</p>
        </div>
        <div className="linkedin">
          <img src='linkedin.png'></img>
          <p>carolinehburns</p>
        </div>
        <div className="github">
          <img src='github.png'></img>
          <p>cburns21</p>
        </div>  
      </div>
    </div>
  );
}

export default App;
