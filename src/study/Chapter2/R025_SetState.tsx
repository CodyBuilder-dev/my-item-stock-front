import React, {Component} from "react";

type FLAG = 'direct' | 'setstate'

class R025_SetState extends Component<any,any>{
    constructor(props: any) {
        super(props);
        this.state = {
            StateString: 'react'
        }
        console.log('THIS IS R025');
    }

    // 아래의 코드는 TS답지 못하다. TS답게 리팩토링해보자
    // 함수의 인자를 string으로 입력받는 것은 매우 불안정하다. enum을 사용하자
    // stateChange = (flag: any) => {
    //     if(flag == 'direct') this.state = {StateString:'리액트'};
    //     if(flag == 'setstate') this.setState({StateString:"리액트"})
    // }

    // 만약, setState, setsatete 등의 오타가 발생하면 컴파일 에러가 뜬다
    stateChange = (flag:FLAG) =>{
        if(flag == 'direct') this.state = {StateString:'리액트'};
        if(flag == 'setstate') this.setState({StateString:"리액트"})
    }


    render() {
        console.log("render Call")
        return(
            <div>
                <button onClick={(e) => this.stateChange("direct")}>
                state 직접 변경</button>
                <button onClick={(e)=> this.stateChange("setstate")}>
                setState로 변경</button>
                [state변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R025_SetState
