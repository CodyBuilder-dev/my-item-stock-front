import React from 'react';
// import {Route} from 'react-router-dom';

// static
import 'bootstrap/dist/css/bootstrap.css'
import './css/new.css';
import './css/common.css';
import './css/item.css';

// component
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./components/Main";

function App(props: any) {
  return (
    <div className="App">
        <h1>내돈내산 프로젝트</h1>

        <Header/>

        <Main/>

        <Footer/>

    </div>
  );
}

// let mapStateToProps = (state: any, props: any) => {
//     console.log("Props from index.js : " + props.indexProp)
//     return {
//         str: state.data.str
//     }
// }

// App = connect(mapStateToProps,null)(App);
// export default connect(mapStateToProps,null)(App);

export default App;
