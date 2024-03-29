import PageTopTheme from "../../components/content/pageTopTheme";
import {BackTop, Col, Row, Button, Layout} from "antd";
import PackageDetails from "../../components/content/packageDetails";
import MiddleBanner from "../../components/content/middleBanner";
import FileUpload from "../../components/upload/fileUpload";
import PackageCard from "../../components/content/packageCard";
import MenuFooter from "../../components/headerFooter/menuFooter";
import React from "react";
import MessageWindow from "../../components/message/messageWindow";
import HeaderDesign from "../../components/headerFooter/header";
import FooterDesign from "../../components/headerFooter/footer";
const { Header, Content, Footer } = Layout;
export default function HomeMain(){

    return<>
        <Layout className="layout">
            <HeaderDesign/>
            <Content>
                {/*<Head>*/}
                {/*    <title>BkCiTy Official</title>*/}
                {/*</Head>*/}

                <Row>
                    <div>
                        <PageTopTheme/>
                    </div>
                </Row>
                <Row>
                    <Col className={"index_main_back"}>
                        <Row>
                            <Col style={{backgroundColor:"white",width:'100%',height:"auto"}}>
                                <PackageDetails/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{backgroundColor:"white",width:'100%',height:"auto"}}>
                                <MiddleBanner/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{backgroundColor:"white",width:'100%',height:"auto",paddingBottom:200}}>
                                <FileUpload/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{backgroundColor:"white",width:'100%',height:"auto",paddingBottom:200,boxSizing:"border-box"}}>
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
                    </Col>
                </Row>

            </Content>
            <BackTop visibilityHeight={500} duration={1500}/>
            <MenuFooter/>
            <FooterDesign/>
        </Layout>




    </>
}