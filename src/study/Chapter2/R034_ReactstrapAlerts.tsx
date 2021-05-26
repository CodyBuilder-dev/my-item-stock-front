import React from "react";
import {Alert, UncontrolledAlert} from "reactstrap";

function R034_ReactstrapAlerts() {
    return (
        <div>
            <Alert color="light">
                Simple Alert [color : light]
            </Alert>
            <UncontrolledAlert color="warning">
                UncontrolledAlert [color : warning]
            </UncontrolledAlert>
        </div>
    );
}


export default R034_ReactstrapAlerts;
