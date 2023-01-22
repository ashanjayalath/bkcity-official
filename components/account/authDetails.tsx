import {Button, Col, Form, Input, Row} from "antd";

export default function AuthDetails() {
    return<>
        <div className={"basic-main-window"}>
            <span className={"basic-menu-view-title"}>Two-factor authentication</span>
            <div  className={"basic-second-window"}>
                <Form>
                    <Row gutter={20}>
                        <Col span={12}>
                            <span>Security keys</span>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <Input className={"input-box"} type={"text"} bordered={false} placeholder={"No Security keys"}/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <Button>ADD</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Form>
                    <Row gutter={20}>
                        <Col span={12}>
                            <span>SMS number</span>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <Input className={"input-box"} type={"text"} id={"con"} bordered={false} placeholder={"+3012374423"}/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <Button>EDIT</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Form>
                    <Row gutter={20}>
                        <Col span={12}>
                            <span>Authenticator app</span>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <Input className={"input-box"} type={"text"} bordered={false} placeholder={"Not Configured"}/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <Button>SET UP</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    </>
}