import React ,{useEffect} from "react";

function R063_CallbackFunc() {
    useEffect( () => {
        logPrint(1,function(return1:any){
            console.log("return1 : " + return1);
            logPrint(return1, function(return2:any) {
                console.log("return2 : " + return2);
            })
        })
    })

    function logPrint(param:any, callback:any) {
        console.log("logPrint param : " + param);
        param += param
        callback(param);

    }
    return (
        <h1>Callback Function</h1>
    );
}


export default R063_CallbackFunc;
