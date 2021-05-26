import React from "react";


const R071_OnKey = () => {
    //todo: event와 e의 차이는 무엇일까
    const onKey = (event: any, e: any) => {
        let val = e.target.value;
        console.log("event : "+event+", value :" +val)
    }

    return (
        <>
            onKeyDown : <input type="text"
                            onKeyDown= {e=>onKey("onKeyDown",e)}/><br/>
            onKeyPress : <input type="text"
                            onKeyPress= {e=>onKey("onKeyPress",e)}/><br/>
            onKeyUp : <input type="text"
                            onKeyUp= {e=>onKey("onKeyUp",e)}/><br/>
        </>
    )
}


export default R071_OnKey;
