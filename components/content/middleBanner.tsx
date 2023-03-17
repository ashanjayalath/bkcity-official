import {Card,Image, Col, Row} from "antd";
import midCSS from '../../styles/middle_banner.module.css'
import FileUpload from "../upload/fileUpload";
import React from "react";
export default function MiddleBanner() {
    return<>
        <div style={{backgroundColor:"#fff",width:'100%',height:"auto",paddingBottom:200}}>
            <Row>
                <Col span={20} offset={2}>
                    <Row gutter={[100,{xs:10,sm:10,md:10,lg:10}]} justify={"start"}>
                        <Col  flex={"450px"}>
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
                        <Col flex={"500px"}>
                            <Image src={"/assets/business.svg"} width={200} height={200} preview={false} alt={"Test"} className={midCSS.image1}/>
                            <Image src={"/assets/business.svg"} width={200} height={200} preview={false} alt={"Test"} className={midCSS.image1}/>
                            <Image src={"/assets/business.svg"} width={200} height={200} preview={false} alt={"Test"} className={midCSS.image1}/>
                            <Image src={"/assets/business.svg"} width={200} height={200} preview={false} alt={"Test"} className={midCSS.image1}/>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </div>
    </>
}