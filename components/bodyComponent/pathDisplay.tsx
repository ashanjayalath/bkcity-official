import { HomeOutlined,WindowsOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React from 'react';

export default function PathDisplay() {
    return<>
        <div >
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/tabledata">
                    <WindowsOutlined />
                    <span>Display Table</span>
                </Breadcrumb.Item>
                {/*<Breadcrumb.Item>Table</Breadcrumb.Item>*/}
            </Breadcrumb>
        </div>

    </>
}