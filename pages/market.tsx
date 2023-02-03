import {Affix, Avatar, Badge, Col, Image, Pagination, Popover, Row} from "antd";
import React, {useState} from "react";
import MemesApi from "../components/apiCall/memesApi";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Market() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    // const coverImages=[
    //     {itm:<Image alt={"Content"} src={"/assets/lioan.jpg"} style={{width:"100%",height:300}}/>},
    //     {itm:<Image alt={"Content"} src={"/assets/lioan.jpg"} style={{width:"100%",height:300}}/>},
    //     {itm:<Image alt={"Content"} src={"/assets/lioan.jpg"} style={{width:"100%",height:300}}/>}
    // ]

    const bucket=(
        <div style={{width:500,height:300}}>
            <h1>sssss</h1>
        </div>
    );

    return<>
        <Row gutter={10}>
            <Col span={6}>
                <div style={{width:"100%",height:500,backgroundColor:"green",marginTop:100}}>
                    <h1>menu</h1>
                </div>
            </Col>
            <Col span={18} >
                <div style={{height:"auto",marginBottom:30,marginTop:100}}>
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
                <Row>
                    <Col span={12} offset={6}>
                        <Pagination defaultCurrent={1} total={50} defaultPageSize={5} style={{marginBottom:20}}/>
                    </Col>
                </Row>

            </Col>
        </Row>

    <Row>
        <Col span={2} offset={22}>
                <Affix offsetBottom={40}>
                    <Popover trigger={"click"} content={bucket} placement={"leftBottom"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"100%"}}
                             title={"Item Details"}
                             arrowPointAtCenter >
                        <Badge count={5}>
                            <Avatar style={{width:50,height:50}}>
                                <ShoppingCartOutlined style={{fontSize:30,textAlign:"center",padding:10}}/>
                            </Avatar>
                        </Badge>
                    </Popover>

                </Affix>
        </Col>
    </Row>

    </>
}