import React from "react";
import {Badge, Button} from "reactstrap";

function R035_ReactstrapBadges() {
    return (
        <div>
            <h1>PRODUCT NAME <Badge color={"secondary"}>hit</Badge></h1>
            <Button color={"light"} outline>
                Accessor <Badge color={"dark"}>4</Badge>
            </Button>
            <Badge color={"danger"} pill>pill</Badge>
            <Badge href ="http://example.com" color={"light"}>GOLink</Badge>
        </div>
    );
}


export default R035_ReactstrapBadges;
