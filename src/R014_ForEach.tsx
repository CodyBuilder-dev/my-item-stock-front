import React, {Component} from "react";

class R014_ForEach extends Component {
    constructor(props: any) {
        super(props);
        this.state = {}
        console.log('THIS IS R014');
    }

    componentDidMount() {
        let For_Arr = [3, 2, 8, 8];
        let For_newArr = [];

        for (var i = 0; i < For_Arr.length ; ++i){
            For_newArr.push(For_Arr[i]);
        }

        console.log("1. For_newArr : [" + For_newArr + "]");

        let ForEach_Arr = [3, 3, 9, 8];
        // Variable 'ForEach_newArr' implicitly has type 'any[]' in some locations where its type cannot be determined.  TS7034
        // => TypeScript에서는 배열에 타입을 선언해 줘야 한다
        // let ForEach_newArr = []

        let ForEach_newArr:number[] = [];
        ForEach_Arr.forEach((result) => {
            ForEach_newArr.push(result);
        })

        console.log("2. ForEach_newArr : [" + ForEach_newArr + "]");

    }

    render() {
        return (
            <h2>[ THIS IS ForEach ]</h2>
        )
    }
}

export default R014_ForEach
