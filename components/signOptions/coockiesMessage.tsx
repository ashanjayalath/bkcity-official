import {Button, Col, Popover, Row} from "antd";
import {Message} from "postcss";

export default function CoockiesMessage() {

    const con=(
        <div>
            <Row>
                <Col span={19}>
                    <span style={{fontSize:12}}>
                We use essential cookies to make our site work. With your consent,
                we may also use non-essential cookies to improve user experience and
                analyze website traffic. By clicking “Accept,“ you agree to our `${"website\'s"}`
                cookie use as described in our Cookie Policy. You can change your cookie settings
                at any time by clicking “Preferences.”
            </span>
                </Col>
                <Col span={5}>
                    <Row gutter={10}>
                        <Col>
                            <Button type={"default"} className={"cookie-preference-btn"} >Preferences</Button>
                        </Col>
                        <Col>
                            <Button type={"primary"} className={"cookie-accept-btn"}>Accept</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
    return<>
        <Popover content={con} overlayStyle={{position:"fixed",zIndex:1,width:"95%",height:90,verticalAlign:"100%"}} overlayInnerStyle={{borderRadius:10,opacity:"95%"}} arrowPointAtCenter={false}showArrow={false}>
            cookies
        </Popover>
    </>
}