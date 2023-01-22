import React, { useState } from 'react';
import {
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Affix, Anchor, Button, Card, Col, List, Menu, Popover, Row} from 'antd';
import {careers, Category, Downloads, Help, Service, shopping} from "./menuItems";
import {FaCloudDownloadAlt, FaShoppingBag} from "react-icons/fa";
import {RiCustomerService2Fill} from "react-icons/ri";
import {MdCategory, MdHelpCenter, MdNoteAlt} from "react-icons/md";
import Profile from "../account/profile";
import BasicInfo from "../account/basicInfo";
import PasswordDetails from "../account/password";
import AuthDetails from "../account/authDetails";
import AccountWindow from "../account/accountWindow";
import NotificationWindow from "../account/notificationWindow";
type MenuItem = Required<MenuProps>['items'][number];

import sideCss from '../../styles/sideHeader.module.css'

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('BkCiTy', '1', <img src={"logo.png"} width={40} height={"auto"}/>),//main menu name
    getItem('Home', '2', <PieChartOutlined />),//main menu name

    getItem('shopping', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),

    getItem('Downloads', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),

    getItem('Service', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Category', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('careers', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Help', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),



    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //     getItem('Option 9', '9'),
    //     getItem('Option 10', '10'),
    //
    //     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
];


// const menuList=[
//     {content:shopping,place:"bottomLeft",navigationText:"Shopping",icon:<FaShoppingBag className={"menu-icon"} style={{color:"blue",fontSize:25}}/>},
//     {content:Downloads,place:"bottomLeft",navigationText:"Downloads",icon:<FaCloudDownloadAlt className={"menu-icon"} style={{color:"blue",fontSize:25}} />},
//     {content:Service,place:"bottomLeft",navigationText:"Service",icon:<RiCustomerService2Fill className={"menu-icon"} style={{color:"blue",fontSize:25}} />},
//     {content:Category,place:"bottomLeft",navigationText:"Category",icon:<MdCategory className={"menu-icon"} style={{color:"blue",fontSize:25}} />},
//     {content:careers,place:"bottomLeft",navigationText:"Careers",icon:<MdNoteAlt className={"menu-icon"} style={{color:"blue",fontSize:25}} />},
//     {content:Help,place:"bottomLeft",navigationText:"Help",icon:<MdHelpCenter className={"menu-icon"} style={{color:"blue",fontSize:25}} />},
// ]
const menuList=[
    {icon:<FaShoppingBag style={{color:"blue",fontSize:20}}/>,name:"shopping",link:<Profile/>},
    {icon:<FaCloudDownloadAlt style={{color:"blue",fontSize:20}}/>,name:"Downloads",link:<BasicInfo/>},
    {icon:<RiCustomerService2Fill style={{color:"blue",fontSize:20}}/>,name:"Service",link:<PasswordDetails/>},
    {icon:<MdCategory style={{color:"blue",fontSize:20}}/>,name:"Category",link:<AuthDetails/>},
    {icon:<MdNoteAlt style={{color:"blue",fontSize:20}}/>,name:"careers",link:<AccountWindow/>},
    {icon:<MdHelpCenter style={{color:"blue",fontSize:20}}/>,name:"Help",link:<NotificationWindow/>}
]
export default function SideHeader(){
    const [collapsed, setCollapsed] = useState(false);
    const menuBtnIcon=(name:string,getIcon:any,link:any)=>{
        return(
            <div className={"acnt-btn"}>
                <Anchor>
                    <Row>
                        <Col>
                            <div style={{backgroundColor:"red",width:35,height:35,padding:7,borderRadius:10,marginLeft:20}}>
                                {getIcon}
                            </div>
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
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return<>
        <Affix offsetTop={10}>
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu inlineCollapsed={collapsed} >
                    <div className={sideCss.menu} style={{borderRadius:10,marginLeft:10,paddingTop:20}}>
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
                    </div>
                </Menu>

                {/*<Menu*/}
                {/*    defaultSelectedKeys={['1']}*/}
                {/*    defaultOpenKeys={['sub1']}*/}
                {/*    mode="inline"*/}
                {/*    // theme="dark"*/}
                {/*    inlineCollapsed={collapsed}*/}
                {/*    items={items}*/}
                {/*>wfww</Menu>*/}
            </div>
        </Affix>
    </>
}