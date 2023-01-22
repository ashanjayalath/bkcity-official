import {
    DingdingOutlined,
    DropboxOutlined,
    GithubOutlined,
    IeOutlined, MenuFoldOutlined, MenuUnfoldOutlined,
    QqOutlined, AppstoreOutlined, MailOutlined, SettingOutlined,
    SlackSquareOutlined, ShoppingCartOutlined
} from "@ant-design/icons";
import React, {useState} from "react";
import type { MenuProps } from 'antd';
import {Affix, Button, Col, Menu, Row} from 'antd';
import ShopingMain from "../shopingMain";


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
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

const fg=(
    <div className={"menu-btn"}>
        <MailOutlined />
    </div>
);

const items: MenuItem[] = [
    getItem('Navigation One', 'sub1',fg , [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),

    getItem('Navigation Two', 'sub2', fg, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

export default function MarketMenu() {
    const [navColor,setNavColor]=useState("#ff0000")
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const [current, setCurrent] = useState('1');


    return<>
        <Menu
            style={{ width: 240 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
        />
        <Row>
            <Col span={4} offset={20}>
                {/*<Affix offsetTop={508}>*/}
                    <Button shape={"circle"} className={"add-crt-btn"} icon={<ShopingMain/>}/>
                {/*</Affix>*/}
            </Col>
        </Row>



    </>
}