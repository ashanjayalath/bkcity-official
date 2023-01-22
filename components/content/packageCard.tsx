import {Col, Row} from "antd";
import PackageSellCard from "./Templates/packageSellCard";
import {CheckOutlined, LockOutlined} from "@ant-design/icons";
import React from "react";
import selCSS from '../../styles/sellCard.module.css'
export default function PackageCard() {
    return<>

        <Row>
            <Col span={22} offset={1} >
                <div className={selCSS.backWindowCard}>
                    <Row>
                        <Col span={22} offset={1}>
                            <Row gutter={5}>
                                {/*title,title_f_s,description,des_f_s,detailsList,price,price_f_s,offer,offer_f_s,width,height*/}
                                <Col sm={1} lg={6} xl={6} xxl={6}>
                                    <PackageSellCard
                                        title={"Enterprise"}
                                        description={"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights."}
                                        detailsList={
                                            [
                                                {icon:<CheckOutlined/>,value:"Complete documentation"},
                                                {icon:<CheckOutlined/>,value:"Full code"},
                                                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                                                {icon:<CheckOutlined/>,value:"Priority support"},
                                                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
                                            ]
                                        }
                                        price={"Rs.5899"}/>
                                </Col>
                                <Col sm={4} lg={6} xl={6} xxl={6}>
                                    <PackageSellCard
                                        title={"Enterprise"}
                                        description={"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights."}
                                        detailsList={
                                            [
                                                {icon:<CheckOutlined/>,value:"Complete documentation"},
                                                {icon:<CheckOutlined/>,value:"Full code"},
                                                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                                                {icon:<CheckOutlined/>,value:"Priority support"},
                                                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
                                            ]
                                        }
                                        price={"Rs.6700"}/>
                                </Col>
                                <Col span={6}>
                                    <PackageSellCard
                                        title={"Enterprise"}
                                        description={"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights."}
                                        detailsList={
                                            [
                                                {icon:<CheckOutlined/>,value:"Complete documentation"},
                                                {icon:<CheckOutlined/>,value:"Full code"},
                                                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                                                {icon:<CheckOutlined/>,value:"Priority support"},
                                                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
                                            ]
                                        }
                                        price={"Rs.4899"}/>
                                </Col>
                                <Col span={6}>
                                    <PackageSellCard
                                        title={"Enterprise"}
                                        description={"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights."}
                                        detailsList={
                                            [
                                                {icon:<CheckOutlined/>,value:"Complete documentation"},
                                                {icon:<CheckOutlined/>,value:"Full code"},
                                                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                                                {icon:<CheckOutlined/>,value:"Priority support"},
                                                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
                                            ]
                                        }
                                        price={"Rs.3000"}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12} offset={6}>
                                    <div style={{textAlign:"center",marginTop:50,marginBottom:50}}>
                                        <Row>
                                            <Col>
                                                <span style={{paddingLeft:120,color:"#7b809a"}}><LockOutlined style={{color:"#344767"}}/> Secured Payment by <b>2Checkout</b> with:</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <span style={{color:"#7b809a",fontSize:15}}><b>Info:</b> If you are a Registered Company inside the European Union you will<br/> be able to add your VAT ID after your Press <b>"Buy Now"</b></span>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>


    </>
}