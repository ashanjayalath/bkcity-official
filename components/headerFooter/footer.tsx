import React, {useEffect, useState} from "react";
import {Layout, Row, Col, Image, Divider, Space} from "antd";
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
import HeaderCSS from '../../styles/header.module.css'

const { Footer } = Layout;

export default function FooterDesign() {
    const [footerColor,setFooterColor]=useState("rgba(255,255,255,0.44)")
    return<>
        <div className={HeaderCSS.footer}>
            <Row>
                <Col>
                    <div className={HeaderCSS.footer_logo}>
                        <Image alt={"Company Logo"} src={"logo.png"} width={50} height={"auto"}/>
                        <p style={{color:footerColor}}>Bk CiTy</p><br/>
                    </div>
                </Col>
                <Col span={8} offset={8}>
                    <div className={HeaderCSS.footer_text_version}>
                        <Row>
                            <Col span={11} offset={3}>
                                <Space direction={"horizontal"} size={20}>
                                    <TwitterOutlined className={HeaderCSS.footer_menu_icon} style={{color:footerColor}}/>
                                    <SkypeOutlined className={HeaderCSS.footer_menu_icon} style={{color:footerColor}}/>
                                    <GooglePlusOutlined className={HeaderCSS.footer_menu_icon} style={{color:footerColor}}/>
                                    <LinkedinOutlined className={HeaderCSS.footer_menu_icon} style={{color:footerColor}}/>
                                    <SlackOutlined className={HeaderCSS.footer_menu_icon} style={{color:footerColor}}/>
                                    <InstagramOutlined className={HeaderCSS.footer_menu_icon} style={{color:footerColor}}/>
                                    <WhatsAppOutlined className={HeaderCSS.footer_menu_icon} style={{color:footerColor}}/>
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