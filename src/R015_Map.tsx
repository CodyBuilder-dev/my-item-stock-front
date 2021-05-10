import React, {Component} from "react";

class R015_Map extends Component {
    constructor(props: any) {
        super(props);
        this.state = {}
        console.log('THIS IS R015');
    }

    componentDidMount() {
        let Map_Arr = [3, 2, 8, 8];
        let Map_newArr = Map_Arr.map(x=>x)
        console.log("1. Map_newArr : [" + Map_newArr + "]");

        let Map_multiArr = Map_Arr.map(x => x * 2);
        console.log("2. Map_multiArr : " + Map_multiArr + "]");

        let ObjArray = [{key: 'react', value: '200'},
                        {key: '리액트', value: 'TwoHundered'}];

        let Map_objArr = ObjArray.map((obj,index)=> {
            console.log((index+3)+". obj: " +JSON.stringify(obj));



            // JS방식은 TS에서는 동작하지 않는다
            // 1. Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'
            // => {}의 인덱스 타입으로 string을 명시하지 않았으므로, obj.key가 any로 취급됨
            // 2. No index signature with a parameter of type 'string' was found on type '{}'
            // => 이후 any를 {}에 집어넣으려고 했지만, TypeScript 특성상 인덱스 시그니처를 명시하지 않으면 동적으로 속성추가가 불가
            // var Obj = {};
            // Obj[obj.key] = obj.value;

            // TS방식으로 해결 : Obj의 인터페이스에 인덱스 시그니처를 명시해 주고, OBj는 이를 상속받아 쓴다
            // https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/
            interface ObjInterface {
                [index:string]:any;
            }
            var Obj:ObjInterface = {};
            Obj[obj.key] = obj.value;

            return Obj;
        });
        console.log("5. Map_objArr : " + JSON.stringify(Map_objArr));

    }
    render(){
        return (
            <h2>[THIS IS MAP]</h2>
        )
    }
}

export default R015_Map;
