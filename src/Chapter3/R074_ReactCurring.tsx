import React from "react";


function R074_ReactCurring() {
    function plusNumOrString(c: any, d: any) {
        return c + d;
    }

    function plusFunc1(a: any) {
        return function(b: any) {
            return plusNumOrString(a,b);
        }
    }

    const plusFunc2 = (a: any) => (b: any) => plusNumOrString(a, b);
    return (
        <div>
            <input type="button" value="NumberPlus"
                   onClick = {(e:any) => alert(plusFunc1(100)(200))}/>
            <input type="button" value="StringPlus"
                   onClick = {(e:any) => alert(plusFunc2("react")(200))}/>
        </div>
    )
}


export default R074_ReactCurring;
