import React, {useEffect} from "react";
import withHocComponent from "./withHocComponent"

function R075_ReactHoc(props: any) {
    console.log("2. HocComponent render");

    useEffect( () => {
        console.log("이건 언제 나올까요?");
    })
    return (
        <h2>
           props.name: {props.name}
        </h2>
    )
}


export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc');
