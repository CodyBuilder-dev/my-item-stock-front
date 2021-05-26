import React, {useEffect} from "react";

export default function withHocComponent(InComponent:any , InComponentName:any) {
    return function OutComponent(props: any) {
        useEffect( () => {
            console.log(`3. InComponentName : ${InComponentName}`)
        });
        console.log("1. InComponent render")
        return (

            <InComponent {...props}/>
        );

    }
};
