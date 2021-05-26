import React from 'react';
import {connect} from "react-redux";
import {Route} from 'react-router-dom';

// import './App.css';
import './css/new.css';
import 'bootstrap/dist/css/bootstrap.css'

// import Chapter1 from "./Chapter1";
// import Chapter2 from "./Chapter2"
// import Chapter3 from "./Chapter3"
// import StrAddButton from './StrAddButton';

import floatingPopulationList from "./components/floating_population/floatingPopulationList";
import rechartsSimpleLineChart from "./components/floating_population/rechartsSimpleLineChart";


function App(props: any) {
  return (
    <div className="App">
        <h1>Start React 200!</h1>
          {/*<Chapter1/>*/}
          {/*<Chapter2/>*/}
          {/*<Chapter3/> */}

        {/*<span>{props.store.getState().data.str}</span><br/>*/}
        {/*<StrAddButton store={props.store}/>*/}

        {/*<span>{props.str}</span><br/> */}
        {/*<StrAddButton AppProp={"200"}/> */}
        <Route path="/floatingPopulationList" component={floatingPopulationList} />
        <Route path="/rechartsSimpleLineChart" component={rechartsSimpleLineChart} />
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
