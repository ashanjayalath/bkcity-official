import connect from "react-redux";
import UserDataFetch from '../redux/actions/userDataGet';
import {Button, Col, Row} from "antd";
import React from "react";
import bindActionCreators from 'redux';

export default function reduxButtonTesting(){
    return<>
        <Row>
            <Col>
                <Button style={{backgroundColor:"red"}} type={"primary"}>Redux Testing Button</Button>
            </Col>
        </Row>
    </>
}
