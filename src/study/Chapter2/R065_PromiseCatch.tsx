import React ,{useEffect} from "react";

function R065_PromiseCatch() {
    useEffect( () => {
        new Promise( (resolve,reject) => {
            setTimeout(() => {
                reject("ERROR INFO");
            },1500);
        })
        .then( (result:any) => {
            console.log("then " + result);
        })
        .catch( (result:any) => {
            console.log("catch " + result);
        })
    })


    return (
        <h1>PromiseCatch</h1>
    );
}


export default R065_PromiseCatch;
