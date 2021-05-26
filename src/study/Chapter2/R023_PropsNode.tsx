import React, {Component} from "react";

class R023_PropsNode extends Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {}
        console.log('THIS IS R023');
    }

    render(){
        let span = this.props.children;
        return(
            <div style={{padding:"0px"}}>
                {span}
            </div>
        )
    }
}

export default R023_PropsNode
