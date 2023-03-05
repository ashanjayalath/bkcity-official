import {Button, Card, Col, Drawer, List, message, Popover, Row} from "antd";
import sellCSS from '../../../styles/sellCard.module.css'
import {lineBreak} from "acorn";
import React, {useState} from "react";
import Index from "../../../pages/buy";
import Router from "next/router";
import {useSelector , useDispatch} from "react-redux";

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
    const selectedPackage=useSelector((state:any)=>state.selectedPackage);
    const dispatch=useDispatch();
    if(selectedPackage === props.packageId){
        return<>
            <Card hoverable={selectedPackage !== props.packageId} className={sellCSS.cardWindow}
                  style={{marginBottom:40,
                      backgroundColor:selectedPackage === props.packageId ? props.borColor:"#fff"
                  }} activeTabKey={"items"}>
                <Row>
                    <Col>
                        <div className={sellCSS.title_window}>
                            <span className={sellCSS.title} style={{color:"black"}}>{props.title}</span>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={sellCSS.des_window}>
                            <span className={sellCSS.des} style={{color:"white"}}>{props.description}</span>
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
                                    <List>
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
                                    </List>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col span={18} offset={3}>
                        <div className={sellCSS.price_window}>
                            <span className={sellCSS.price} style={{color:"white",textAlign:"center"}}>Active Package</span>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    }else{
        return<>
            <Card hoverable={selectedPackage !== props.packageId} className={sellCSS.cardWindow}
                  style={{marginBottom:40,
                      backgroundColor:selectedPackage === props.packageId ? props.borColor:"#fff"
                  }} activeTabKey={"items"}>
                <Row>
                    <Col>
                        <div className={sellCSS.title_window}>
                            <span className={sellCSS.title} style={{color:props.borderColor}}>{props.title}</span>
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
                                    <List>
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
                                    </List>
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
                            <Button type={"primary"} className={sellCSS.btn} style={{backgroundColor:props.borColor}}
                                    disabled={selectedPackage === props.packageId}
                                    onClick={()=>{
                                        // if(selectedPackage !== 0){
                                        dispatch({type:"SELECTED_PACKAGE",value:props.packageId});
                                        // Router.push('/buy')
                                        // }
                                    }}
                            >
                                Buy Now
                            </Button>
                            {/*</Link>*/}
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    }

}