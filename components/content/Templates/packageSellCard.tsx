import {Button, Card, Col, Drawer, List, message, Popover, Row} from "antd";
import sellCSS from '../../../styles/sellCard.module.css'
import {lineBreak} from "acorn";
import React, {useState} from "react";
import BuyNow from "../../buy/buyNow";
import {CloseCircleOutlined} from "@ant-design/icons";
import Link from "next/link";

interface listType{
    icon:any;
    value:string;
}
interface priceType{
    price:string;
}

//title,description,price(fontsize),offer,details list,width,height

//title,title_f_s,description,des_f_s,detailsList,price,price_f_s,offer,offer_f_s,width,height
export default function PackageSellCard(props:any) {
    const [borColor,setBorColor]=useState("#ffffff")

    return<>
        <Card hoverable={true} className={sellCSS.cardWindow} style={{borderColor:borColor}} activeTabKey={"items"}>
            <Row>
                <Col>
                    <div className={sellCSS.title_window}>
                        <span className={sellCSS.title}>{props.title}</span>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={sellCSS.des_window}>
                        <span className={sellCSS.des}>{props.description}</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={sellCSS.list_window}>
                        <List
                            className={sellCSS.list}
                            split={false}
                            dataSource={props.detailsList}
                            renderItem={(items:listType)=>(
                                <List.Item>
                                    <Row>
                                        <Col>
                                            <div className={sellCSS.list_icon}>
                                                {items.icon}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className={sellCSS.list_value}>
                                                {items.value}
                                            </div>
                                        </Col>
                                    </Row>
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
            </Row>
            <Row gutter={10}>
                <Col>
                    <div className={sellCSS.price_window}>
                        <span className={sellCSS.price}>{props.price}</span>
                    </div>
                </Col>
                <Col>
                    <div className={sellCSS.offer_window}>
                        <span className={sellCSS.offer}>{props.offer}</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={sellCSS.btn_window}>
                        {/*<Link href={"/components/buy/buyNow"}>*/}
                        <Button type={"primary"} className={sellCSS.btn} onClick={()=><BuyNow title={props.title}/>}>
                            Buy Now
                        </Button>
                        {/*</Link>*/}
                    </div>
                </Col>
            </Row>
        </Card>
    </>
}