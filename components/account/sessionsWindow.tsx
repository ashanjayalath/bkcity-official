import {Row} from "antd";

export default function SessionsWindow(){
    return<>
        <div className={"basic-main-window"}>
            <span className={"basic-menu-view-title"}>Sessions</span>
            <div  className={"basic-second-window"}>
                <Row gutter={20}>
                </Row>
            </div>
        </div>
    </>
}