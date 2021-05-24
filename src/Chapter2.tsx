import React,{Component} from "react";
import Props from './Chapter2/R017_Props';
import PropsDataType from "./Chapter2/R018_PropsDataType";
import PropsBoolean from './Chapter2/R019_PropsBoolean';
import PropsNode from './Chapter2/R023_PropsNode';
import ReactState from './Chapter2/R024_ReactState';
import SetState from './Chapter2/R025_SetState';
import FunctionComponent from './Chapter2/R030_FunctionComponent';
import ReactHook from './Chapter2/R031_ReactHook'
import Fragments from './Chapter2/R032_Fragments';
import ReturnMap from './Chapter2/R033_ReturnMap';
import ReactstrapAlerts from './Chapter2/R034_ReactstrapAlerts';
import ReactstrapBadges from "./Chapter2/R035_ReactstrapBadges";
import ReactstrapBreadcrumbs from "./Chapter2/R036_ReactstrapBreadcumbs";
import ReactstrapCarousel from "./Chapter2/R041_ReactstrapCarousel";
import ReactstrapFade from "./Chapter2/R043_ReactstrapFade";
import ReactstrapForm from "./Chapter2/R044_ReactstrapForm";
import Sweetalert2Basic from "./Chapter2/R056_Sweetalert2Basic";


class Chapter2 extends Component{
    render(){
        return (
            <div>
                <Props Prop_value={"This is props"} prop_val2="This is Prop 2"/>
                <PropsDataType
                    prototype={"키워드와 같은 이름의 prop도 상관없습니다"}
                    String="react"
                    Number={200}
                    Boolean={true}
                    Array={[0,1,8]}
                    ObjectJson={{react:"리액트", twohundered:"200"}}
                    Function={console.log("FunctionProps: function!")}
                />
                <PropsBoolean BooleanTrueFalse={false}/>
                <PropsBoolean BooleanTrueFalse/>
                <PropsNode>
                    <span>span from App.js</span>
                    <p>p from App.js</p>
                    <b>b from App.js</b>
                </PropsNode>
                <ReactState reactString = "react"/>
                <SetState/>
                <FunctionComponent contents="[THIS IS FunctionComponent]"/>
                <ReactHook/>
                <Fragments/>
                <ReturnMap/>
                <ReactstrapAlerts/>
                <ReactstrapBadges/>
                <ReactstrapBreadcrumbs/>
                <ReactstrapCarousel/>
                <ReactstrapFade/>
                <ReactstrapForm/>
                <Sweetalert2Basic/>
            </div>
        )
    }
}

export default Chapter2;
