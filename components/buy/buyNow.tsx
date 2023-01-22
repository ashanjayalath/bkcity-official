import {Card, Col, Drawer, Row} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";
import React, {useState} from "react";
//title,description,price(fontsize),offer,details list,width,height
export default function BuyNow(props:any) {

    return<>
        <div>
            <Row>
                <Col>

                </Col>
               <Col>
                   <span>{props.title}</span>
               </Col>
            </Row>
        </div>
        {/*<Card hoverable={false} style={{borderRadius:10}}>*/}

        {/*</Card>*/}
    </>
}