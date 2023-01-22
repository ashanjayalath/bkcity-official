import {Card, Col, Row, Space, Image, Avatar, List, Affix, Switch, Anchor, BackTop} from "antd";
import {
    UserOutlined,
    FileTextFilled,
    LockFilled,
    UsbFilled,
    ContactsFilled,
    SoundFilled,
    ReconciliationFilled,
    DeleteFilled
} from "@ant-design/icons";
import React, {useState} from "react";
import BasicInfo from "../../components/account/basicInfo";
import Profile from "../../components/account/profile";
import PasswordDetails from "../../components/account/password";
import AuthDetails from "../../components/account/authDetails";
import HeaderDesign from "../../components/headerFooter/header";
import FooterDesign from "../../components/headerFooter/footer";
import DeleteAccount from "../../components/account/deleteAccount";
import NotificationWindow from "../../components/account/notificationWindow";
import SessionsWindow from "../../components/account/sessionsWindow";
import AccountWindow from "../../components/account/accountWindow";
const menuList=[
    {icon:<UserOutlined />,name:"Profile",link:<Profile/>},
    {icon:<FileTextFilled />,name:"Basic Info",link:<BasicInfo/>},
    {icon:<LockFilled />,name:"Change Password",link:<PasswordDetails/>},
    {icon:<UsbFilled />,name:"2F Authantication",link:<AuthDetails/>},
    {icon:<ContactsFilled />,name:"Accounts",link:<AccountWindow/>},
    {icon:<SoundFilled />,name:"Notifications",link:<NotificationWindow/>},
    {icon:<ReconciliationFilled />,name:"Sessisions",link:<SessionsWindow/>},
    {icon:<DeleteFilled />,name:"Delete Account",link:<DeleteAccount/>}
]
export default function AccountSettings() {

    const menuBtnIcon=(name:string,getIcon:any,link:any)=>{
        return(
            <div className={"acnt-btn"}>
                <Anchor>
                    <Row>
                        <Col>
                            {getIcon}
                        </Col>
                        <Col>
                            <div style={{paddingLeft:10}}>
                                {name}
                            </div>
                        </Col>
                    </Row>
                </Anchor>
            </div>
        )
    }

    return<>
        <HeaderDesign/>
        <Row style={{marginTop:100}} gutter={30}>
            <Col span={5}>
                <Affix offsetTop={100}>
                    <div style={{width:"100%",height:"auto"}}>
                        <Card className={"account-menu"} style={{borderRadius:10,marginLeft:20}} hoverable={false}>
                            <List
                                grid={{ gutter: 16}}
                                dataSource={menuList}
                                split={false}
                                renderItem={item => (
                                    <List>
                                        {menuBtnIcon(item.name,item.icon,item.link)}
                                    </List>
                                )}
                            />
                        </Card>
                    </div>
                </Affix>
            </Col>

            <Col span={19}>
                <div style={{width:"100%",height:"auto"}}>
                    <List dataSource={menuList} split={false}
                          renderItem={item => (
                              <Card className={"account-menu-view"}style={{borderRadius:10,marginRight:20,marginBottom:20,height:"auto",width:"auto"}} hoverable={false}>
                                  <List>{item.link}</List>
                              </Card>
                          )}
                    />
                </div>
            </Col>
        </Row>
        <BackTop visibilityHeight={500} duration={1500}/>
    </>
}