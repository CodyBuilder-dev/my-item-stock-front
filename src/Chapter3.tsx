import React,{Component} from "react";
import ReactOnKey from "./Chapter3/R071_OnKey"
import ReactRef from "./Chapter3/R073_ReactRef"
import ReactCurring from "./Chapter3/R074_ReactCurring";
import ReactHoc from "./Chapter3/R075_ReactHoc";

class Chapter3 extends Component{
    render(){
        return (
        <div>
            <ReactOnKey/>
            <ReactRef/>
            <ReactCurring/>
            <ReactHoc name={"React200"}/>
        </div>
        )
    }
}

export default Chapter3;
