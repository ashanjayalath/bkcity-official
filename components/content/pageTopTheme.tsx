import ParticleDesign from "../backgrounAnimation/particleDesign";
import {Col, Row} from "antd";
import React from "react";

export default function PageTopTheme() {
    return<>
        <div style={{marginTop:200,marginLeft:25}}>
            {/*<ParticleDesign />*/}
            <Row>
                <Col>
                    <img src={"/assets/business.svg"} width={"80%"} height={"80%"}/>
                </Col>
                <Col>
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