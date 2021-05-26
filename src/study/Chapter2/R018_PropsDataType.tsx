import React, {Component} from "react";
// import datatype from 'prop-types';
// import PropTypes from 'prop-types'; // TS에서 PropTypes.array, 등이 동작하지 않음

interface PropTypes{
    prototype: any,
    String:string, // TS에서는 타입 불일치시 바로 Type 'string' is not assignable to type 'number'.  TS2322
    Number:number,
    Boolean:boolean,
    Array:Array<any>
    ObjectJson:Object,
    Function: void // TS에서는 Function Type에 void를 넣을 수 없나? Type 'void' is not assignable to type 'Function'.  TS2322
}
class R018_PropsDataType extends Component<PropTypes,any> {
    constructor(props: any) {
        super(props);
        this.state = {}
        console.log('THIS IS R018');
    }

    render() {
        let {
            String,Number,Boolean,Array,ObjectJson, Function
        } = this.props;

        return (
            <div style={{padding: "0px"}}>
                <h2>{this.props.prototype}</h2>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </div>

        )
    }
}


export default R018_PropsDataType
