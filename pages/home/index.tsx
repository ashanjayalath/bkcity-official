import Head from "next/head";
import PageTopTheme from "../../components/content/pageTopTheme";
import {BackTop, Col, Row} from "antd";
import PackageDetails from "../../components/content/packageDetails";
import MiddleBanner from "../../components/content/middleBanner";
import FileUpload from "../../components/upload/fileUpload";
import BoxCircle from "../../components/animations/boxCircle";
import PackageCard from "../../components/content/packageCard";
import MenuFooter from "../../components/headerFooter/menuFooter";
import React from "react";

export default function HomeMain(){
    return<>
        <Head>
            <title>BkCiTy Official</title>
        </Head>
        <div className={"header-back-image"}>
            <PageTopTheme/>
        </div>
        <div className={"index_main_back"}>
            <Row>
                <Col>
                    <PackageDetails/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MiddleBanner/>
                </Col>
            </Row>
            <Row>
                <Col style={{backgroundColor:"white",width:'100%'}}>
                    <div>
                        <FileUpload/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{backgroundColor:"white",width:'100%',height:500}}>
                    <div>
                        <BoxCircle/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{backgroundColor:"white",width:'100%',height:750}}>
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
    </>
}