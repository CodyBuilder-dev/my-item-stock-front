import React from 'react';
// import {useEffect, useState} from 'react';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifecycleEx4 from './R004_LifecycleEx';
import LifecycleEx5 from './R005_LifecycleEx';
import LifecycleEx6 from './R006_LifecycleEx';
import LifecycleEx7 from './R007_LifecycleEx';
import LifecycleEx8 from './R008_LifecycleEx';
import Es6 from './R009_Es6'

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
        <LifecycleEx4>사이에텍스트 넣어도 무시됨</LifecycleEx4>
        <LifecycleEx5></LifecycleEx5>
        <LifecycleEx6 prop_value='FromApp.js'></LifecycleEx6>
        <LifecycleEx7 prop_value='FromApp.js'/>
        <LifecycleEx8 prop_value='FromApp.js'/>
        <Es6/>
    </div>
  );
}

export default App;

