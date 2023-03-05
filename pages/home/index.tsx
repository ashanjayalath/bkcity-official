import Head from "next/head";
import PageTopTheme from "../../components/content/pageTopTheme";
import {BackTop, Col, Row,Button} from "antd";
import PackageDetails from "../../components/content/packageDetails";
import MiddleBanner from "../../components/content/middleBanner";
import FileUpload from "../../components/upload/fileUpload";
import BoxCircle from "../../components/animations/boxCircle";
import PackageCard from "../../components/content/packageCard";
import MenuFooter from "../../components/headerFooter/menuFooter";
import React from "react";
import MessageWindow from "../../components/message/messageWindow";
import HeaderDesign from "../../components/headerFooter/header";
import FooterDesign from "../../components/headerFooter/footer";

export default function HomeMain(){

    return<>
        {/*<Head>*/}
        {/*    <title>BkCiTy Official</title>*/}
        {/*</Head>*/}
        <HeaderDesign/>
        <div className={"header-back-image"}>
            <PageTopTheme/>
        </div>
        <div className={"index_main_back"}>
            <Row>
                <Col style={{backgroundColor:"white",width:'100%',height:"auto",paddingBottom:50}}>
                    <PackageDetails/>
                </Col>
            </Row>
            <Row>
                <Col style={{backgroundColor:"white",width:'100%',height:"auto",paddingBottom:50}}>
                    <MiddleBanner/>
                </Col>
            </Row>
            <Row>
                <Col style={{backgroundColor:"white",width:'100%',height:"auto",paddingBottom:50}}>
                    <FileUpload/>
                </Col>
            </Row>
            <Row>
                <Col style={{backgroundColor:"white",width:'100%',height:"auto",paddingBottom:50}}>
                    <PackageCard/>
                </Col>
            </Row>
            {/*<Row>*/}
            {/*    <Col style={{backgroundColor:"white",width:'100%',height:750}}>*/}
            {/*        <MessageWindow/>*/}
            {/*   </Col>*/}
            {/*</Row>*/}

            {/*<Row>*/}
            {/*    <Col style={{backgroundColor:"white",width:'100%',height:"auto",paddingLeft:50,paddingBottom:50}}>*/}
            {/*        <Solid/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>
        <BackTop visibilityHeight={500} duration={1500}/>
        <MenuFooter/>
        <FooterDesign/>
    </>
}