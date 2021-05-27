import React, {Component} from "react";

class R024_ReactState extends Component<any,any> {
    constructor(props: any) {
        super(props);
        console.log('THIS IS R024');
        console.log(this.state);
    }

    render(){
        this.state = {
            StateString: this.props.reactString,
            StateNumber: 300
        }
        console.log(this.state);
        return(
            <div style={{padding:"0px"}}>
                {this.state.StateString}{this.state.StateNumber}
                <script>alert(this.state);</script>
            </div>

        )
    }
}

export default R024_ReactState
