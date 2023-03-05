import {Col, List, Row} from "antd";
import PackageSellCard from "./Templates/packageSellCard";
import {CheckOutlined, LockOutlined} from "@ant-design/icons";
import React from "react";
import selCSS from '../../styles/sellCard.module.css'


export default function PackageCard() {
    const packages= [
        {
            packageId:0,
            title:"Enter",
            description:"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights.",
            detailsList:[
                    {icon:<CheckOutlined/>,value:"Complete documentation"},
                    {icon:<CheckOutlined/>,value:"Full code"},
                    {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                    {icon:<CheckOutlined/>,value:"Priority support"},
                    {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
                ],
            price:"Rs.3000",
            borColor:"rgba(199,149,27,0.91)"
        },{
            packageId:1,
            title:"Hell",
            description: "Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights.",
            detailsList:[
                {icon:<CheckOutlined/>,value:"Complete documentation"},
                {icon:<CheckOutlined/>,value:"Full code"},
                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                {icon:<CheckOutlined/>,value:"Priority support"},
                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
            ],
            price:"Rs.8920",
            borColor:"rgba(0,164,82,0.8)"
        },
        {
            packageId:2,
            title:"Enter",
            description:"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights.",
            detailsList:[
                {icon:<CheckOutlined/>,value:"Complete documentation"},
                {icon:<CheckOutlined/>,value:"Full code"},
                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                {icon:<CheckOutlined/>,value:"Priority support"},
                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
            ],
            price:"Rs.3000",
            borColor:"rgba(72,48,231,0.96)"
        },
        {
            packageId:3,
            title:"Enter",
            description:"Good for a personal or client web/mobile app,Deploy large-scale projects which include redistribution rights.",
            detailsList:[
                {icon:<CheckOutlined/>,value:"Complete documentation"},
                {icon:<CheckOutlined/>,value:"Full code"},
                {icon:<CheckOutlined/>,value:"Projects - unlimited"},
                {icon:<CheckOutlined/>,value:"Priority support"},
                {icon:<CheckOutlined/>,value:"Free Updates - 12 months"}
            ],
            price:"Rs.3000",
            borColor:"rgba(168,3,121,0.8)"
        }
    ]
    return<>
        <Row>
            <Col className={selCSS.backWindowCard}  span={20} offset={2}>
                <Row gutter={[10,{xs:10,sm:10,md:10,lg:10}]} justify={"center"}>
                    <Col flex={"260px"}>
                        <PackageSellCard
                            packageId={packages[0].packageId}
                            title={packages[0].title}
                            description={packages[0].description}
                            detailsList={packages[0].detailsList}
                            price={packages[0].price}
                            borColor={packages[0].borColor}
                        />
                    </Col>
                    <Col flex={"260px"}>
                        <PackageSellCard
                            packageId={packages[1].packageId}
                            title={packages[1].title}
                            description={packages[1].description}
                            detailsList={packages[1].detailsList}
                            price={packages[1].price}
                            borColor={packages[1].borColor}
                        />
                    </Col>
                    <Col flex={"260px"}>
                        <PackageSellCard
                            packageId={packages[2].packageId}
                            title={packages[2].title}
                            description={packages[2].description}
                            detailsList={packages[2].detailsList}
                            price={packages[2].price}
                            borColor={packages[2].borColor}
                        />
                    </Col>
                    <Col  flex={"260px"}>
                        <PackageSellCard
                            packageId={packages[3].packageId}
                            title={packages[3].title}
                            description={packages[3].description}
                            detailsList={packages[3].detailsList}
                            price={packages[3].price}
                            borColor={packages[3].borColor}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <div style={{textAlign:"center",marginBottom:50,display:"flex",alignItems:"center",justifyContent:"center"}}>
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