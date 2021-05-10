import React, {Component} from "react";

type Props = {
    prop_value: string
}

class R007_LifecycleEx extends Component<Props,any> {
    static getDerivedStateFromProps(props: any, state: any){
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {tmp_state: props.prop_value};
    }

    constructor(props: any) {
        super(props);
        this.state = {};
        console.log("1. constructor Call");
    }

    componentDidMount() {
        console.log("4. componentDidMount Call");
        console.log("5. tmp_state:" + this.state.tmp_state);
    }

    render() {
        console.log("3. render Call");
        return (
            <h2>[ THIS IS COMPONENTDIDMOUNT FUNCTION ]</h2>
        )
    }
}

export default R007_LifecycleEx;
