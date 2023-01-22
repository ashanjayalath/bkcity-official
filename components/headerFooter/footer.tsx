import React, {useEffect, useState} from "react";
import {Layout, Row, Col, List, Divider, Space} from "antd";
import {
    TwitterOutlined,
    GithubOutlined,
    SkypeOutlined,
    GooglePlusOutlined,
    LinkedinOutlined,
    SlackOutlined,
    InstagramOutlined,
    WhatsAppOutlined

} from "@ant-design/icons";


const { Footer } = Layout;

export default function FooterDesign() {
    const [footerColor,setFooterColor]=useState("rgba(255,255,255,0.44)")
    return<>
        <div className={"footer"}>
            <Row>
                <Col>
                    <div className={"footer-logo"}>
                        <img src={"logo.png"} width={50} height={"auto"}/>
                        <p style={{color:footerColor}}>Bk CiTy</p><br/>
                    </div>
                </Col>
                <Col span={8} offset={8}>
                    <div className={"footer-text-version"}>
                        <Row>
                            <Col span={11} offset={3}>
                                <Space direction={"horizontal"} size={20}>
                                    <TwitterOutlined className={"footer-menu-icon"} style={{color:footerColor}}/>
                                    <SkypeOutlined className={"footer-menu-icon"} style={{color:footerColor}}/>
                                    <GooglePlusOutlined className={"footer-menu-icon"} style={{color:footerColor}}/>
                                    <LinkedinOutlined className={"footer-menu-icon"} style={{color:footerColor}}/>
                                    <SlackOutlined className={"footer-menu-icon"} style={{color:footerColor}}/>
                                    <InstagramOutlined className={"footer-menu-icon"} style={{color:footerColor}}/>
                                    <WhatsAppOutlined className={"footer-menu-icon"} style={{color:footerColor}}/>
                                </Space>
                            </Col>
                        </Row>
                        <Row>
                            <p style={{color:footerColor,marginTop:25}}>
                                © 2022 Bk CiTy, all rights reserved. Made with for a better web.
                            </p>
                        </Row>
                    </div>
                </Col>
            </Row>

        </div>
    </>
}