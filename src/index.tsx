import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//static
import './index.css';

//React=Redux Dependency
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from './reducers';

//React-router-dom Dependency
import {BrowserRouter} from 'react-router-dom';

//Components
import App from './App';


const store = createStore(reducers);


const listener = () => {
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
