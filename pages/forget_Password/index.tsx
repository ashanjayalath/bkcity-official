import {Button, Card, Col, Form, Input, message, PageHeader, Row, Space, Switch} from "antd";
import Link from "next/link";
import {useState} from "react";
import CoockiesMessage from "../../components/signOptions/coockiesMessage";
import {FCRUD} from "../../components/firebaseDatabaseConnector";
import {sendPasswordResetEmail} from "firebase/auth";
import Router from "next/router";

export default function ForgetPassword() {
    const forgetPassword=(getEmail:any)=>{
        const email=getEmail.Email
        const auth = FCRUD.auth
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                message.success("Please check email box")
                Router.push('/sign')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                message.warning("Something happening")
            });

    }
    return<>
        <Row>
            <Col span={14} offset={5}>
                <Card className={"forget-sign-main-card"} hoverable={false}>
                    <Row>
                        <Col span={14}>
                            <PageHeader
                                onBack={() => window.history.back()}
                                title=" "
                                // subTitle="Sign"
                            />
                            <div className={"forget-sign"} >
                                <img src={"/assets/login.svg"} width={"auto"} height={"auto"}/>
                            </div>
                        </Col>
                        <Col span={10}>
                            <div className={"forget-form-window"}>
                                <Col>
                                    <div className={"forget-input-window"}>
                                        <Form  autoComplete="off" onFinish={forgetPassword}>
                                            <Form.Item name={['Email']}>
                                                <Input className={"forget-email-box"} placeholder={"Email or Phone Number"} allowClear/>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className={"forget-next-btn"} >NEXT</Button>
                                            </Form.Item>
                                        </Form>
                                        <span className="forget-sign-up-text">
                                            Dont have an account?{" "}
                                            <Link href="/pages/signup" className="text-dark font-bold">
                                                Sign Up
                                            </Link>
                                        </span>
                                        <CoockiesMessage/>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </>
}