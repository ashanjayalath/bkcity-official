import ParticleDesign from "../backgrounAnimation/particleDesign";
import {Col, Row,Image} from "antd";
import React from "react";

export default function PageTopTheme() {
    return<>
        <div style={{marginTop:200}}>
            <ParticleDesign />
            <Row gutter={[10,{xs:10,sm:10,md:10,lg:10}]} justify={"center"}>
                <Col flex={"700px"}>
                    <Image preview={false} alt={"Business logo"} src={"/assets/business.svg"} width={"80%"} height={"80%"}/>
                </Col>
                <Col  flex={"400px"}>
                    <span style={{fontSize:60,color:"rgba(0,0,0,0.78)",marginRight:10}}>BkCiTy</span>
                    <span style={{fontSize:30}}>Future</span>
                    <Row>
                        <Col>
                            <p className={"mainText"} style={{fontSize:13,marginLeft:5,display:"inline-block"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Adipisci aliquid atque blanditiis corporis cum, illo magni, minima molestiae odio
                                pariatur quo quos
                                sequi similique suscipit ullam, voluptas voluptate voluptatem voluptates?</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    </>
}