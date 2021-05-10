import React,{Component} from "react";

class R010_Variable extends Component {
    constructor(props: any) {
        super(props);
        this.state= {};
        console.log('THIS IS R010');
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : ' + varName);
        // var varName = '무야호'; // JS에서는 가능하지만 TS에서는 @typescript-eslint/no-redeclare 발생
        // console.log('varName2 : ' + varName);

        let letName = 'react';
        console.log('letName1 : ' + letName);
        // let letName = '유야호'; // SyntaxError : Identifier 'letName' has already been declared
        // console.log('letName2 : ' + letName);
        letName = '그만큼 재할당 하고싶으시단거지~';
        console.log('letName3 : ' + letName);

        const constName = 'react';
        console.log('constName1 : ' + constName);
        // const constName = 'vue로 갈아타겠습니다' // SyntaxError :Identifier 'constName' has already been declared.
        // console.log('constName2 : ' + constName);
        // constName = '아니면 Angular는요' // TS error(TS2588) : Cannot assign to 'constName' because it is a constant.
        // console.log('constName3 : ' + constName);


    }

    render() {
        return (
            <h2>[THIS IS Variable]</h2>
        )
    }
}

export default R010_Variable;
