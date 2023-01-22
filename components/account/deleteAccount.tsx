import {Button, Col, Input, Row, Switch} from "antd";
import {useState} from "react";

export default function DeleteAccount() {
    const [delBtn,setDelBtn]=useState(true)
    const [pass,setPass]=useState(true)
    return<>
        <div className={"basic-main-window"}>
            <span className={"basic-menu-view-title"}>Delete Account</span>
            <p>Once you delete your account, there is no going back. Please be certain.</p>
            <div  className={"basic-second-window"}>
                <Row gutter={20}>
                    <Col span={5}>
                        <p>I want to delete my account.</p>
                    </Col>
                    <Col span={3}>
                        <Switch size={"small"} title={"Conirm"} onChange={checked => setPass(false)}/>
                    </Col>
                    <Col span={8}>
                        <Input className={"input-box"} type={"text"} disabled={pass} onClick={()=>setDelBtn(false)} placeholder={"Enter Password"}/>
                    </Col>
                    <Col span={4}>
                        <Button className={"deact-btn"}>Deactivate</Button>
                    </Col>
                    <Col span={4}>
                        <Button type={"primary"} disabled={delBtn} className={"delete-btn"}>Delete Account</Button>
                    </Col>
                </Row>
            </div>
        </div>
    </>
}