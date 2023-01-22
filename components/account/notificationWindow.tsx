import {Row} from "antd";

export default function NotificationWindow(){
    return<>
        <div className={"basic-main-window"}>
            <span className={"basic-menu-view-title"}>Notifications</span>
            <div  className={"basic-second-window"}>
                <Row gutter={20}>
                </Row>
            </div>
        </div>
    </>
}