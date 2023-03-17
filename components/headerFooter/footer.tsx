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
import Router from "next/router";
import {useSelector} from "react-redux";

const { Content, Footer } = Layout;

export default function FooterDesign() {
    const footerColor="#676565"
    return<>
        <div className={HeaderCSS.footer}>
            <Row justify={"center"}>
                <Col flex={"50px"}>
                        <Image alt={"Company Logo"} preview={false} src={"logo.png"} width={50} height={"auto"} style={{cursor:"pointer",marginBottom:50}} onClick={()=>Router.push('/')}/>
                        {/*<p style={{color:footerColor,cursor:"pointer"}} onClick={()=>Router.push('/')}>Bk CiTy</p><br/>*/}
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col flex={"260px"}>
                    <div className={HeaderCSS.footer_text_version}>
                        <Row justify={"center"}>
                            <Col  flex={"40px"}>
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
                        <Row justify={"center"}>
                            <p style={{color:footerColor,marginTop:25}}>
                                © 2022 A S H A N  J A Y A L A T H, <br/>all rights reserved. Made with for a better web.
                            </p>
                        </Row>
                    </div>
                </Col>
            </Row>

        </div>
    </>
}