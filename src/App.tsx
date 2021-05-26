import React from 'react';
import {Route} from 'react-router-dom';

// static
import './css/new.css';
import 'bootstrap/dist/css/bootstrap.css'

// component
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";

function App(props: any) {
  return (
    <div className="App">
        <h1>내돈내산 프로젝트</h1>
        <Route path={"/user/sign-up"} component={SignUp} />
        <Route path={"/user/sign-in"} component={SignIn} />

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
