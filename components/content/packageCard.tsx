import {Col, List, Row} from "antd";
import PackageSellCard from "./Templates/packageSellCard";
import {CheckOutlined, LockOutlined} from "@ant-design/icons";
import React from "react";
import selCSS from '../../styles/sellCard.module.css'
export default function PackageCard() {
    const packages= [
        {
            title:"Enter",
            description:"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights.",
            detailsList:[
                    {icon:<CheckOutlined/>,value:"Complete documentation"},
                    {icon:<CheckOutlined/>,value:"Full code"},
                    {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                    {icon:<CheckOutlined/>,value:"Priority support"},
                    {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
                ],
            price:"Rs.3000"
        },{

            title:"Hell",
            description: "Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights.",
            detailsList:[
                {icon:<CheckOutlined/>,value:"Complete documentation"},
                {icon:<CheckOutlined/>,value:"Full code"},
                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                {icon:<CheckOutlined/>,value:"Priority support"},
                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
            ],
            price:"Rs.8920"
        },
        {
            title:"Enter",
            description:"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights.",
            detailsList:[
                {icon:<CheckOutlined/>,value:"Complete documentation"},
                {icon:<CheckOutlined/>,value:"Full code"},
                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                {icon:<CheckOutlined/>,value:"Priority support"},
                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
            ],
            price:"Rs.3000"
        },
        {
            title:"Enter",
            description:"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights.",
            detailsList:[
                {icon:<CheckOutlined/>,value:"Complete documentation"},
                {icon:<CheckOutlined/>,value:"Full code"},
                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                {icon:<CheckOutlined/>,value:"Priority support"},
                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
            ],
            price:"Rs.3000"
        }
    ]
    return<>
        <Row>
            <Col className={selCSS.backWindowCard}>
                <Row>
                    <Col span={22} offset={1} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <List
                            grid={{ gutter: 1}}
                            dataSource={packages}
                            renderItem={item => (
                                <PackageSellCard
                                    title={item.title}
                                    description={item.description}
                                    detailsList={item.detailsList}
                                    price={item.price}
                                />
                            )}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <div style={{textAlign:"center",marginBottom:50}}>
                            <Row>
                                <Col>
                                    <span style={{color:"#7b809a",fontSize:15}}><LockOutlined style={{color:"#344767"}}/> Secured Payment by <b>2Checkout</b> with:<br/><b>Info:</b> If you are a Registered Company inside the European Union you will &quot; be able to add your VAT ID after your Press <b>"Buy Now"</b></span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>


    </>
}