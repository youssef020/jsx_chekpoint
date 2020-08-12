import React from 'react';
import './App.css';
import Image from './geraltciri.jpg'
import './style.css'



function App() {
  return (
    <div style={{border:'solid 1px black', maxWidth:"100vw"}}>
    <h1 className="title red">Geralt of Rivia </h1>
   <br />
   <img src={Image} />
   <img src="/geralt.png" />

   </div>













  );

}

export default App;
