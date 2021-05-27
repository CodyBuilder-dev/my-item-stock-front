import {ADD} from "../actions";
import {combineReducers} from "redux";

const initState = {
    str: "react"
};

const data = (state = initState, action: any) => {
    switch (action.type) {
        case ADD:
            return {
                str: state.str + "200"
            };
        default:
            return state;
    }
};

const App = combineReducers({
    data
});

export default App;
