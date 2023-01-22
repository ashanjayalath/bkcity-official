import {DeploymentUnitOutlined, GitlabOutlined, YuqueOutlined} from "@ant-design/icons";
import {Col, Row} from "antd";
import packageCSS from '../../styles/Package_Details.module.css'
import React from "react";
import PackageDetailsSet from "./Templates/packageDetailsSet";

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

export default function PackageDetails() {
    return<>
        <div className={packageCSS.packageMain}>
            <Row>
                <Col span={18} offset={3}>
                    <Row gutter={20}>
                        <Col span={8}>
                            <PackageDetailsSet
                                icon={<GitlabOutlined  className={packageCSS.iconSize} style={{color:"#2643e9"}}/>}
                                title={"MULTI-PURPOSE SECTIONS"}
                                description={"Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages."}
                                linkName={"More About Us"}
                                path={"/"}
                                icon_backColor={"#8a98eb"}
                                title_color={"#5e72e4"}
                                des_color={"#525f7f"}
                                path_color={"#233dd2"}
                            />
                        </Col>
                        <Col span={8}>
                            <PackageDetailsSet
                                icon={<DeploymentUnitOutlined className={packageCSS.iconSize} style={{color:"#1aae6f"}}/>}
                                title={"HUGE NUMBER OF COMPONENTS"}
                                description={" Every element that you need in a product comes built in as a component.All components fit perfectly with each other and can take variations in colour."}
                                linkName={"Learn About Our Product"}
                                path={"/"}
                                icon_backColor={"rgba(84,218,161,0.74)"}
                                title_color={"#2dce89"}
                                des_color={"#525f7f"}
                                path_color={"#233dd2"}
                            />
                        </Col>
                        <Col span={8}>
                            <PackageDetailsSet
                                icon={<YuqueOutlined className={packageCSS.iconSize} style={{color:"#ff3709"}}/>}
                                title={"HUGE NUMBER OF COMPONENTS"}
                                description={" Every element that you need in a product comes built in as a component.All components fit perfectly with each other and can take variations in colour."}
                                linkName={"Check Our Documentation"}
                                path={"/"}
                                icon_backColor={"#fc8c73"}
                                title_color={"#fb6340"}
                                des_color={"#525f7f"}
                                path_color={"#233dd2"}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    </>

}
