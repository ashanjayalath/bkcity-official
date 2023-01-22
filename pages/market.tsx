import HeaderDesign from "../components/headerFooter/header";
import { Button, Carousel, Col, Menu, Row} from "antd";
import MarketMenu from "../components/shoping/shopingMenu/marketMenu";
import React, {useState} from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import AnimalApi from "../components/apiCall/animalApi";
import ImageDog from "../components/apiCall/imageDog";
import MemesApi from "../components/apiCall/memesApi";

export default function Market() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const coverImages=[
        {itm:<img src={"/assets/lioan.jpg"} style={{width:"100%",height:300}}/>},
        {itm:<img src={"/assets/lioan.jpg"} style={{width:"100%",height:300}}/>},
        {itm:<img src={"/assets/lioan.jpg"} style={{width:"100%",height:300}}/>}
    ]


    return<>

        <Row gutter={10}>
            {/*<Col span={5} >*/}
            {/*    <div className={"side-menu"}  >*/}
            {/*        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>*/}
            {/*            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
            {/*        </Button>*/}
            {/*        <Menu  inlineCollapsed={collapsed}>*/}
            {/*            <MarketMenu/>*/}
            {/*        </Menu>*/}

            {/*    </div>*/}
            {/*</Col>*/}
            <Col >
                <Row>
                    <Col span={12} offset={6}>
                        <div style={{marginTop:80,backgroundColor:"blue",width:"auto"}}>
                            <Carousel autoplay >
                                <div>
                                    <img src={"/assets/lioan.jpg"} style={{width:"100%",height:500}}/>
                                </div>
                                <div>
                                    <img src={"/assets/lioan.jpg"} style={{width:"100%",height:300}}/>
                                </div>
                                <div>
                                    <img src={"/assets/lioan.jpg"} style={{width:"100%",height:300}}/>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <div style={{height:"auto",marginBottom:50}}>
                    {/*<div style={{marginBottom:20}}>*/}
                    {/*    <AnimalApi/>*/}
                    {/*</div>*/}
                    {/*<div style={{marginBottom:200}}>*/}
                    {/*    <ImageDog/>*/}
                    {/*</div>*/}
                    <div style={{marginBottom:200}}>
                        <MemesApi/>
                    </div>
                </div>


            </Col>
        </Row>




    </>
}