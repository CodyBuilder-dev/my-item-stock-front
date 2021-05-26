import React, {Component} from "react";
import $ from "jquery";

class R016_Jquery extends Component {
    constructor(props: any) {
        super(props);
        this.state = {}
        console.log('THIS IS R016');
    }
    input_alert = (e: any) => {
        var input_val = $('#inputId').val();
        alert(input_val);
    }
    render() {
        return (
            <div>
                <h2>[THIS IS JQuery]</h2>
                <input id="inputId" name={"InputName"}/>
                <button id={"buttonId"} onClick={e=>this.input_alert(e)}>
                Jquery Button</button>

            </div>
        )
    }
}

export default R016_Jquery;
