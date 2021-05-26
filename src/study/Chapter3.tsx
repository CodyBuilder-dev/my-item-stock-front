import React,{Component} from "react";
import {Route} from 'react-router-dom';

import ReactOnKey from "./Chapter3/R071_OnKey"
import ReactRef from "./Chapter3/R073_ReactRef"
import ReactCurring from "./Chapter3/R074_ReactCurring";
import ReactHoc from "./Chapter3/R075_ReactHoc";
import CookieSave from "./Chapter3/R085_CookieSave";
import CookieLoad from "./Chapter3/R086_CookieLoad";
import CookieRemove from "./Chapter3/R087_CookieRemove";
import reactRouter from "./Chapter3/R089_ReactRouter";
import reactRouter2 from "./Chapter3/R089_ReactRouter2";

class Chapter3 extends Component{

    //todo : 다른 컴포넌트들과 <Route>를 함께 사용하면 화면에서는 어떻게 보일까?
    render(){
        return (
        <div className="Chapter3">
            <ReactOnKey/>
            <ReactRef/>
            <ReactCurring/>
            <ReactHoc name={"React200"}/>
            <CookieSave/>
            <CookieLoad/>
            <CookieRemove/>

            <Route exact path="/" component={reactRouter} />
            <Route exact path="/reactRouter2" component={reactRouter2} />

        </div>
        )
    }
}

export default Chapter3;
