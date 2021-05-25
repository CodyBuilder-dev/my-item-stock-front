import React from "react";


function R073_ReactRef() {
    //todo: 왜 <any>를 선언하지 않아도 에러에 안잡힐때가 있고 잡힐 때가 있지?
    let inputRef = React.createRef<any>();

    const refFocus = () => {
        inputRef.current.focus();
    }

    //todo: 왜 옵셔널 체이닝을 선언하지 않아도 에러에 안잡힐때가 있고 잡힐 때가 있지?
    const javascriptFocus = () => {
        document.getElementById('id')?.focus();
    }



    return (
        <div>
            <input id="id" type="text" ref={inputRef}/>
            <input type="button" value="Ref Focus" onClick={refFocus}/>
            <input type="button" value="Javascript Focus" onClick={javascriptFocus}/>
        </div>
    )
}


export default R073_ReactRef;
