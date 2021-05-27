import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';

//Redux Dependency
import {createStore, applyMiddleware} from "redux";
import reducers from '../reducers';

//React-Redux Dependency
import {Provider} from "react-redux";

//React-router-dom Dependency
import {BrowserRouter} from 'react-router-dom';

// import * as serviceWorker from './serviceWorker';


const callMiddleWare = (store: any) => (nextMiddle: any) => (action: any) => {
    console.log("1. reducer 실행 전");
    console.log(`2. action.type : ${action.type}, store str : ${store.getState().data.str}`);
    let result = nextMiddle(action);
    console.log("3. reducer 실행 후");
    console.log(`4. action.type : ${action.type}, store str : ${store.getState().data.str}`);
    return result;
}

const store = createStore(reducers, applyMiddleware(callMiddleWare));


const listener = () => {
    // This is Redux Code
    // ReactDOM.render(
    //     <App store={store}/>,
    //     document.getElementById('root')
    // )

    // This is React-Redux Code
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App indexProp={"react"}/>
            </BrowserRouter>
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
