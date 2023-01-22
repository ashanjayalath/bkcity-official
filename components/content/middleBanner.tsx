import {Card, Col, Row} from "antd";
import midCSS from '../../styles/middle_banner.module.css'
import FileUpload from "../upload/fileUpload";
import React from "react";
export default function MiddleBanner() {
    return<>
        <div style={{backgroundColor:"#fff",width:'100%',height:"auto",paddingBottom:200}}>
            <Row>
                <Col span={22} offset={2}>
                    <Row gutter={20}>
                        <Col span={10}>
                            <Row>
                        <span className={midCSS.title}>
                            Basic Elements
                        </span>
                            </Row>
                            <Row>
                        <span className={midCSS.subTitle}>
                            The core elements of your website
                        </span>
                            </Row>
                            <Row>
                        <span className={midCSS.description}>
                            We re-styled every Bootstrap 4 element to match the Argon Design System style. All the Bootstrap 4 components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.
                        </span>
                            </Row>
                        </Col>
                        <Col span={14}>
                            <Card hoverable style={{backgroundColor:"blue",width:'!00%',height:'100%',borderRadius:10}}>

                            </Card>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </div>
    </>
}