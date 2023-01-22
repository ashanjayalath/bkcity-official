import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";

export default function PasswordDetails() {
    return<>
        <div className={"basic-main-window"}>
            <span className={"basic-menu-view-title"}>Change Password</span>
            <div  className={"basic-second-window"}>
                <Form>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>Current Password</label>
                                <Input className={"input-box"}type={"text"} placeholder={"Current Password"} id={"crntPass"} style={{width:"100%"}} onChange={(e)=>e.target.type="password"} allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>New Password</label>
                                <Input className={"input-box"}type={"text"} placeholder={"New Password"} id={"crntPass"} style={{width:"100%"}} onChange={(e)=>e.target.type="password"} allowClear/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>Confirm New Password</label>
                                <Input className={"input-box"}type={"text"} placeholder={"Confirm Password"} id={"crntPass"} style={{width:"100%"}} onChange={(e)=>e.target.type="password"} allowClear/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <span className={"basic-menu-view-title"}>Password requirements</span>
                    <p>Please follow this guide for a strong password</p>
                    <ul typeof={"circle"} >
                        <li>One special characters</li>
                        <li>Min 6 characters</li>
                        <li>One number (2 are recommended)</li>
                        <li>Change it often</li>
                    </ul>
                    <Row>
                        <Col span={6} offset={18}>
                            <Button className={"update-pass-btn"} type={"primary"} style={{width:"100%"}}>Update Password</Button>
                        </Col>
                    </Row>

                </Form>
            </div>


        </div>

    </>
}