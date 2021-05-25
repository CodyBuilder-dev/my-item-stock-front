import React from "react";


function R073_ReactRef() {
    let inputRef = React.createRef();

    const refFocus = e => {
        inputRef.current.focus();
    }

    const javascriptFocus = () => {
        document.getElementById('id').focus();
    }



    return (
        <>
            <input id="id" type="text" ref={inputRef}/>
            <input type="button" value="Ref Focus" onClick={refFocus}/>
            <input type="button" value="Javascript Focus" onClick={javascriptFocus}/>
        </>
    )
}


export default R073_ReactRef;
