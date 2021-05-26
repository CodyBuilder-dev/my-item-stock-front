import React ,{useEffect} from "react";

function R059_FetchGet() {
// JavaScript Code
//     useEffect(async ()=>{
//         const response = await fetch("http://date.jsontest.com/");
//         const body = await response.json();
//         alert(body.date);
//     })

// TypeScript Code
    useEffect(()=>{
        var getFunc = async () => {
            const response = await fetch("http://naver.com/")
            const body = await response.json();
            alert(body.date);
        }

        getFunc();
    })

    return (
        <h1>fetch get</h1>
    );
}


export default R059_FetchGet;
