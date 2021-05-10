import React, {Component} from "react";

class R019_PropsBoolean extends Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {}
        console.log('THIS IS R019');
    }

    render() {
        return (
            <div style={{padding:"0px"}}>
                {this.props.BooleanTrueFalse ? '2. ':'1. '}
                {this.props.BooleanTrueFalse.toString()}
            </div>
        )
    }
}

export default R019_PropsBoolean
