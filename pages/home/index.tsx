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

import {useSelector , useDispatch} from "react-redux";

export default function HomeMain(){
    const amount=useSelector((state:any)=>state.amount);
    const dispatch=useDispatch();
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
                <Col>
                    {/*<reduxButtonTesting/>*/}
                </Col>
            </Row>
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
                <Col>
                    <p>Testing Redux {amount} </p>
                    <Button type={"primary"} onClick={()=> dispatch({type:"INCREMENT",value:1000})}>testing Redux + </Button>
                    <Button type={"primary"} onClick={()=> dispatch({type:"DECREMENT",value:500})}>testing Redux - </Button>
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
        <FooterDesign/>
    </>
}