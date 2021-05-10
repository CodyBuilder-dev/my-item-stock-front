import React, {useEffect, useState} from 'react';

function R031_ReactHook(props: any) {
    console.log("This is R031");

    const [contents, setContents ] = useState('[THIS IS REACT]');
    console.log(contents);
    console.log(props);
    useEffect(()=>{
        console.log("useEffect");
    })


    return (
        <div style={{padding:"0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[THIS IS HOOK]')}>
            버튼</button>
        </div>
    )
}

export default R031_ReactHook;
