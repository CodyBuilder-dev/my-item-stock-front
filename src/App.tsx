import React from 'react';
// import {useEffect, useState} from 'react';
import './App.css';
// import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2"

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(()=> {
  //   fetch('/api/v1/animals')
  //       .then(response => response.text())
  //       .then(message => {
  //           setMessage(message);
  //       });
  // },[])
  return (
    <div>
    {/*<div className="App">*/}
        <h1>Start React 200!</h1>
          {/*<Chapter1/>*/}
        <Chapter2/>
    </div>
  );
}

export default App;

