import React,
    {Component} from "react";

type Props = {
    prop_value: string
}

class R006_LifecycleEx extends Component<Props,any> {
    static getDerivedStateFromProps(props: any, state: any){
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {};
    }

    constructor(props: any) {
        super(props);
        this.state = {};
        console.log("1. constructor Call");
    }

    render() {
        console.log("3. render Call");
        return (
            <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
        )
    }
}

export default R006_LifecycleEx;
