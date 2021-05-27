import React ,{useEffect} from "react";

function R064_Promise() {
    useEffect( () => {
        new Promise(resolve => {
            setTimeout(() => {
                resolve('react');
            },1500);
        })
        .then( (result:any) => {
            console.log(result);
            return result + 200;
        })
        .then( (result:any) => {
            console.log(result);
        })
    })


    return (
        <h1>Promise</h1>
    );
}


export default R064_Promise;
