import {Col, Row} from "antd";
import packageCSS from "../../../styles/Package_Details.module.css";
import React from "react";
import Link from "next/link";
interface DataTypes{
    icon:any;
    title:string;
    description:string;
    linkName:string;
    path:string;
    icon_backColor:string;
    title_color:string;
    des_color:string;
    path_color:string;
}
export default function PackageDetailsSet(props:DataTypes){
    return<>
        <div>
            <Row>
                {/*DeploymentUnitOutlined*/}
                <div className={packageCSS.circleBack} style={{backgroundColor:props.icon_backColor}}>
                    {props.icon}
                </div>
            </Row>
            <Row>
                <h3 style={{color:props.title_color}}>{props.title}</h3>
            </Row>
            <Row>
                <span style={{color:props.des_color}}>{props.description}</span>
            </Row>
            <Row>
                <Col>
                    <div style={{marginTop:15}}>
                        <Link href={props.path}>
                            <span className={packageCSS.link} style={{color:props.path_color}}>{props.linkName}</span>
                        </Link>
                    </div>

                </Col>
            </Row>
        </div>
    </>
}