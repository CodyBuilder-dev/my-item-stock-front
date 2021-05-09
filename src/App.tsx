import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(()=> {
    fetch('/api/v1/animals')
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
  },[])
  return (
    <div>
    {/*<div className="App">*/}
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
        <p>CSS 적용하기</p>
    </div>
  );
}

export default App;
