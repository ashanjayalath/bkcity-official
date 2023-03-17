import {Button, Card, Col, Drawer, List, message, Modal, notification, Popover, Result, Row} from "antd";
import sellCSS from '../../../styles/sellCard.module.css'
import {lineBreak} from "acorn";
import React, {useState} from "react";
import Index from "../../../pages/buy";
import Router from "next/router";
import {useSelector , useDispatch} from "react-redux";
import {AppleFilled, ExclamationCircleFilled, ExclamationCircleOutlined} from "@ant-design/icons";

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
    const { confirm } = Modal;
    type NotificationType = 'success' | 'info' | 'warning' | 'error';

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType,packageDetails:string,message:string) => {
        api[type]({
            message: 'Package Activate',
            description:
                `Package ${packageDetails} ${message} success`,
        });
    };


    const showPromiseConfirm = () => {
        confirm({
            title: 'Confirm',
            icon: <ExclamationCircleFilled />,
            content: 'Do you want to deactivate this package ?',
            okText:"Confirm",
            cancelText:"No",
            onOk() {
                return new Promise((resolve, reject) => {
                    openNotificationWithIcon('success',props.title,"deactivate")
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                    dispatch({type:"SELECTED_PACKAGE",value:1});
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {
                return new Promise((resolve, reject) => {
                    openNotificationWithIcon('warning',props.title,"deactivate")
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                })
            },
        });
    };
    if(selectedPackage === props.packageId){
        return<>
            <Card hoverable={selectedPackage !== props.packageId} className={sellCSS.cardWindow}
                  style={{marginBottom:40,
                      backgroundColor:'#fff'
                  }} activeTabKey={"items"}>
                {/*backgroundColor:selectedPackage === props.packageId ? props.borColor:"#fff"*/}
                <Result
                    status="success"
                    title={`Package ${props.title} Activated`}
                    subTitle="Please check and modify the following information before resubmitting."
                    extra={[
                        <Button type={"primary"} key={"cancel"} style={{backgroundColor:"#48b220",width:"100%"}} >
                            Deactivate
                        </Button>,
                        <Button type={"default"} key={"cancel"} style={{borderColor:"#48b220",width:"100%"}}>
                            Buy Again
                        </Button>,
                    ]}
                />
                {contextHolder}
            </Card>
        </>
    }else{
        return<>
            <Card hoverable={selectedPackage !== props.packageId} className={sellCSS.cardWindow}
                  style={{marginBottom:40,
                      backgroundColor:selectedPackage === props.packageId ? props.borColor:"#fff"
                  }} activeTabKey={"items"}>
                <Row>
                    <Col span={22}>
                        <div className={sellCSS.title_window}>
                            <span className={sellCSS.title} style={{color:props.borderColor}}>{props.title}</span>
                        </div>

                    </Col>
                    <Col span={2}>
                        <div>
                            {props.topIcon}
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
                            <Button type={"primary"} className={sellCSS.btn} style={{backgroundColor:props.borColor}}
                                    disabled={selectedPackage === props.packageId}
                                    onClick={()=>{
                                        // openNotificationWithIcon('success',props.title,"activate")
                                        // setTimeout(()=>{
                                            dispatch({type:"SELECTED_PACKAGE",value:props.packageId});
                                        // },500)
                                    }}
                            >
                                Buy Now
                            </Button>
                            {contextHolder}
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    }

}