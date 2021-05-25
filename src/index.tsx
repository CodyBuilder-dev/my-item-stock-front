import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux Dependency
import {createStore} from "redux";
import reducers from './reducers';

//React-Redux Dependency
import {Provider} from "react-redux";

const store = createStore(reducers);

const listener = () => {
    // Redux Code
    // ReactDOM.render(
    //     <App store={store}/>,
    //     document.getElementById('root')
    // )

    // React-Redux Code
    ReactDOM.render(
        <Provider store={store}>
            <App indexProp={"react"}/>
        </Provider>,
        document.getElementById('root')
    )
};

store.subscribe(listener);
listener();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
