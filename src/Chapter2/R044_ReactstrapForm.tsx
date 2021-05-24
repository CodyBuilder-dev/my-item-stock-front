import React from "react";
import { Form, Label, Input, Row, Col, FormGroup } from "reactstrap";


function R044_ReactstrapForm() {
    return (
        <Form>
            <Label for={"exampleGender"}>Gender</Label>
            <Input type={"select"} bsSize={"sm"}>
                <option>no select</option>
                <option>woman</option>
                <option>man</option>
            </Input>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for={"exampleAddress"}>address</Label>
                        <Input type={"text"} name={"address"} id={"address"}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for={"exampleMobile"}>mobile</Label>
                        <Input type={"text"} name={"mobile"} id={"exampleMobile"}/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for={"exampleAge"}>age</Label>
                        <Input type={"text"} name={"age"} id={"exampleAge"}/>
                    </FormGroup>
                </Col>
            </Row>
        </Form>

    );
}


export default R044_ReactstrapForm;
