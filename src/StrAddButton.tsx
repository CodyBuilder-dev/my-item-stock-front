import React from "react";
import {connect} from 'react-redux';
import {add} from './actions';

function StrAddButton(props: any) {
    // const addString = () => {
    //     props.store.dispatch(add())
    // }

    return (
        // <input value={"Add200"} type={"button"} onClick={addString}/>
        <input value={"Add200"} type={"button"} onClick={props.addString}/>
    )
}

let mapDispatchToProps = (dispatch: any, props: any) => {
    console.log("Props from App.js : " + props.AppProp)
    return {
        addString: () => dispatch(add())
    }
}

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);
export default StrAddButton;
