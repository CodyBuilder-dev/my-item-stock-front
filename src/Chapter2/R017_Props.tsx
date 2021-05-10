import React, {Component} from "react";

class R017_Props extends Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {}
        console.log('THIS IS R017');
    }

    render() {
        // let prop1 = this.props.Props_val; // 프로퍼티 이름을 틀릴 경우 undefined
        let prop1 = this.props.Prop_value;
        // this.props.Prop_value += ' from Chapter2.tsx'; //Index signature in type 'Readonly<any> & Readonly<{ children?: ReactNode; }>' only permits reading.  TS2542
        prop1 += ' from Chapter2.tsx';

        let prop2 = this.props.prop_val2;


        return (
            <div>
                <p>{prop1}</p>
                <p>{prop2}</p>
            </div>
        )
    }
}

export default R017_Props;
