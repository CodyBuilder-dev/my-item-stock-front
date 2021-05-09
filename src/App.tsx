import React from 'react';
// import {useEffect, useState} from 'react';
import './App.css';
import ImportComponent from './R003_ImportComponent'

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
        <p>HTML 적용하기</p>
        <p>CSS 적용하기</p>
        <ImportComponent></ImportComponent>
    </div>
  );
}

export default App;
