import {Card, Col, Row, Space} from "antd";
import {WifiOutlined} from "@ant-design/icons";

export default function CreditCard() {
    return<>
        <Card className={"credit-main-card"} hoverable={true}>
            <Row>
               <Col span={2}>
                   <img src={"https://seeklogo.com/images/S/sampath-bank-logo-660B6E8BC9-seeklogo.com.png"} className={"credit-icon"}/>
               </Col>
                <Col span={14}>
                    <span className={"credit-bank-name"}>Sampath Bank</span>
                </Col>
                <Col span={8}>
                        <Row>
                            <img src="https://www.kindpng.com/picc/m/239-2399180_shopper-approved-logo-png-clipart-png-download-shopper.png"
                                 className={"credit-shping-icon"}
                            />
                        </Row>
                        <Row>
                            <span className={"credit-shoping-text"}>INTERNATIONAL DEBIT CARD</span>
                        </Row>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <img src="https://img.icons8.com/office/100/null/sim-card-chip.png" className={"credit-chip-icon"} />
                </Col>
                <Col span={8} offset={8}>
                    <WifiOutlined rotate={90} className={"credit-wave-icon"}/>
                </Col>
            </Row>
            <Row>
                <Col>

                    <Row gutter={1}>
                        <Col span={6}>
                            <span className={"credit-card-number"}>4 1 3 5</span>
                        </Col>
                        <Col span={6}>
                            <span className={"credit-card-number"}>4 7 9 5</span>
                        </Col>
                        <Col span={6}>
                            <span className={"credit-card-number"}>6 2 1 4</span>
                        </Col>
                        <Col span={6}>
                            <span className={"credit-card-number"}>2 5 6 2</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={"credit-space"}>
                <Col span={12}>
                    <Row>
                        <span className={"credit-card-label-names"}>CARD HOLDER NAME</span>
                    </Row>
                    <Row>
                        <span className={"credit-card-name"}>G.P.A.JAYALATH</span>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row>
                        <span className={"credit-card-label-names"}>VALID THRU</span>
                    </Row>
                   <Row>
                       <span className={"credit-card-label-data"}>06/25</span>
                   </Row>
                </Col>

                <Col span={6}>
                    <Row>
                        <img src="/assets/visa.png" className={"credit-visa-logo"}/>
                    </Row>
                </Col>
            </Row>
        </Card>
    </>
}