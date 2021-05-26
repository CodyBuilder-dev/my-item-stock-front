import React, {Component} from "react";
import ImportComponent from "./Chapter1/R003_ImportComponent";
import LifecycleEx4 from "./Chapter1/R004_LifecycleEx";
import LifecycleEx5 from "./Chapter1/R005_LifecycleEx";
import LifecycleEx6 from "./Chapter1/R006_LifecycleEx";
import LifecycleEx7 from "./Chapter1/R007_LifecycleEx";
import LifecycleEx8 from "./Chapter1/R008_LifecycleEx";
import Es6 from "./Chapter1/R009_Es6";
import Variable from "./Chapter1/R010_Variable";
import ForEach from "./Chapter1/R014_ForEach";
import Map from "./Chapter1/R015_Map";
import Jquery from "./Chapter1/R016_Jquery";


class Chapter1 extends  Component {

    render(){
        return (
            <div>
                <p>HTML 적용하기</p>
                <p>CSS 적용하기</p>
                <ImportComponent></ImportComponent>
                <LifecycleEx4>사이에텍스트 넣어도 무시됨</LifecycleEx4>
                <LifecycleEx5></LifecycleEx5>
                <LifecycleEx6 prop_value='FromApp.js'></LifecycleEx6>
                <LifecycleEx7 prop_value='FromApp.js'/>
                <LifecycleEx8 prop_value='FromApp.js'/>
                <Es6/>
                <Variable/>
                <ForEach/>
                <Map/>
                <Jquery/>
            </div>
        )
    }
}

export default Chapter1;
