import React from 'react';
// import email from '../email.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>
          Caroline Burns
        </h1>
      </div>
      <div className="contact">
        <div className="row">
          <img src='../email.png'></img>
          <a href='321cburns@gmail.com'>321cburns@gmail.com</a>
        </div>
        <div className="row">
          <img src='linkedin.png'></img>
          <a href='//www.linkedin.com/in/carolinehburns/'>carolinehburns</a>
        </div>
        <div className="row">
          <img src='github.png'></img>
          <a href='https://github.com/cburns21'>cburns21</a>
        </div> 
     
      </div>
    </div>
  );
}

export default App;
