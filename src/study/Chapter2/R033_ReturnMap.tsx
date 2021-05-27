import React from "react";

function R033_ReturnMap() {
    console.log("This is R033");
    //todo: Each child in a list should have a unique "key" prop 해결
    const element_Array = [
        <li>react</li>,
        <li>200</li>,
        <li>Array map</li>
    ]
    console.log(element_Array)
    console.log(typeof element_Array)
    console.log(element_Array[0])
    console.log(typeof element_Array[0])
    return (
        <ul>
            {element_Array.map((x)=>x)}
        </ul>
    )
}

export default R033_ReturnMap;
