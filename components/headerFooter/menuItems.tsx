import {Col, Divider, Popover, Row} from "antd";
import {
    AlibabaOutlined,
    CodepenCircleOutlined,
    DashboardFilled, DownOutlined, GiftOutlined, LogoutOutlined,
    RightOutlined, ShoppingCartOutlined,
    SketchOutlined, UserOutlined
} from "@ant-design/icons";
import React, {useState} from "react";
import Link from "next/link";
import TestLoad from "../testLoad";
import HeaderCSS from '../../styles/header.module.css'

const menuTitle=(getIcon:any,name:any)=>{
    return(
            <div className={"card-title"}>
                <Row gutter={2}>
                    <Col>
                        {getIcon}
                    </Col>
                    <Col >
                        <span className={"title"}>{name}</span>
                    </Col>
                </Row>
            </div>
    )
}
const menuBtn=(name:string)=>{
    return(
        <div className={"card-btn"}>
            {name}
        </div>
    )
}
const menuBtnIcon=(name:string,getIcon:any)=>{
    return(
        <div className={"card-btn"}>
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

        </div>
    )
}
const subMenuBtn=(name:string,con:any,place:any)=>{
    return(
        <Popover content={con} placement={place} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10}} arrowPointAtCenter title={name}>
            {/*<Popover content={con} placement={place} overlayInnerStyle={{borderRadius:10}} >*/}

            <div className={"card-btn"}>
                <Row>
                    <Col>
                        {name}
                    </Col>
                    <Col style={{textAlign:"right",right:10,position:"absolute"}}>
                        <RightOutlined style={{fontSize:8}}/>
                    </Col>
                </Row>
            </div>

        </Popover>
    )
}
const divider=()=> {
    return(
        <Col>
            <Divider type={"vertical"} style={{height: "100%", marginTop: 50, marginBottom: 50, color: "red"}}/>
        </Col>
    )
}


export const Lang=[
    {title: 'English', id:'E '},
    {title: 'සිංහල', id:'සිං'},
    {title: 'தமிழ்', id:'த '}
]
export const userList=[
    {menu:menuBtnIcon("My Purchases",<ShoppingCartOutlined />),path:"/"},
    {menu:menuBtnIcon("Discount Program",<GiftOutlined />),path:"/forget_Password"},
    {menu:menuBtnIcon("Account Settings",<UserOutlined />),path:"/account"},
    {menu:menuBtnIcon("Log Out",<LogoutOutlined />),path:"/sign"}
]


//This is sub menu items
export const conten=(
    <div >
        <Row>
            <Col>
                {menuTitle(<DashboardFilled/>,"Dashboard")}
            </Col>
            <Col>
                {menuTitle(<DashboardFilled/>,"Dashboard")}
            </Col>
        </Row>
        <Row>
            <Col>
                {menuBtn("test")}
            </Col>
            <Col>
                {menuBtn("test 2")}
            </Col>
        </Row>
    </div>
)

//This is main menus
export const shopping=(
    <div>
        <Row>
            <Col>
                {menuTitle(<DashboardFilled />,"Dashboard")}
            </Col>
            <Col>
                {menuTitle(<CodepenCircleOutlined />,"Dashboard")}
            </Col>
            <Col>
                {menuTitle(<SketchOutlined />,"Dashboard")}
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Link href="/pages/apicall" className="text-dark font-bold">
                        <div onClick={TestLoad}>
                            {menuBtn("Display API Data")}
                        </div>

                    </Link>
                </Row>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Custom")}
                    </Link>
                </Row>
                <Row>
                    <Link href="/components/card/creditCard" className="text-dark font-bold">
                        {subMenuBtn("Credit Card",conten,"right")}
                    </Link>
                </Row>
                <Row>
                    <Link href={"/market"}>
                        {menuBtnIcon("Shopping",<AlibabaOutlined />)}
                    </Link>

                </Row>
            </Col>
            <Col>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Table")}
                    </Link>
                </Row>
                <Row>
                    {menuBtn("Test two")}
                </Row>
            </Col>
            <Col>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Table")}
                    </Link>
                </Row>
                <Row>
                    {menuBtn("Test two")}
                </Row>
                <Row>
                    {subMenuBtn("Test one",conten,"right")}
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                {menuTitle(<DashboardFilled />,"Dashboard")}
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Table")}
                    </Link>
                </Row>
                <Row>
                    {menuBtn("Test two")}
                </Row>
                <Row>
                    {subMenuBtn("Test one",conten,"right")}
                </Row>
            </Col>
        </Row>

    </div>
);

export const Downloads=(
    <div>
        <Row>
            <Col>
                {menuTitle(<DashboardFilled />,"Dashboard")}
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Link href="/pages/apicall" className="text-dark font-bold">
                        <div onClick={TestLoad}>
                            {menuBtn("Display API Data")}
                        </div>

                    </Link>
                </Row>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Custom")}
                    </Link>
                </Row>
                <Row>
                    <Link href="/components/card/creditCard" className="text-dark font-bold">
                        {subMenuBtn("Credit Card",conten,"right")}
                    </Link>
                </Row>
                <Row>
                    <Link href={"/market"}>
                        {menuBtnIcon("Shopping",<AlibabaOutlined />)}
                    </Link>

                </Row>
            </Col>
        </Row>
    </div>
);
export const Service=(
    <div>
        <Row>
            <Col>
                {menuTitle(<DashboardFilled />,"Dashboard")}
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Link href="/pages/apicall" className="text-dark font-bold">
                        <div onClick={TestLoad}>
                            {menuBtn("Display API Data")}
                        </div>

                    </Link>
                </Row>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Custom")}
                    </Link>
                </Row>
                <Row>
                    <Link href="/components/card/creditCard" className="text-dark font-bold">
                        {subMenuBtn("Credit Card",conten,"right")}
                    </Link>
                </Row>
                <Row>
                    <Link href={"/market"}>
                        {menuBtnIcon("Shopping",<AlibabaOutlined />)}
                    </Link>

                </Row>
            </Col>
        </Row>
    </div>
);
export const Help=(
    <div>
        <Row>
            <Col>
                {menuTitle(<DashboardFilled />,"Dashboard")}
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Link href="/pages/apicall" className="text-dark font-bold">
                        <div onClick={TestLoad}>
                            {menuBtn("Display API Data")}
                        </div>

                    </Link>
                </Row>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Custom")}
                    </Link>
                </Row>
                <Row>
                    <Link href="/components/card/creditCard" className="text-dark font-bold">
                        {subMenuBtn("Credit Card",conten,"right")}
                    </Link>
                </Row>
                <Row>
                    <Link href={"/market"}>
                        {menuBtnIcon("Shopping",<AlibabaOutlined />)}
                    </Link>

                </Row>
            </Col>
        </Row>
    </div>
);
export const careers=(
    <div>
        <Row>
            <Col>
                {menuTitle(<DashboardFilled />,"Dashboard")}
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Link href="/pages/apicall" className="text-dark font-bold">
                        <div onClick={TestLoad}>
                            {menuBtn("Display API Data")}
                        </div>

                    </Link>
                </Row>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Custom")}
                    </Link>
                </Row>
                <Row>
                    <Link href="/components/card/creditCard" className="text-dark font-bold">
                        {subMenuBtn("Credit Card",conten,"right")}
                    </Link>
                </Row>
                <Row>
                    <Link href={"/market"}>
                        {menuBtnIcon("Shopping",<AlibabaOutlined />)}
                    </Link>

                </Row>
            </Col>
        </Row>
    </div>
);

export const Category=(
    <div>
        <Row>
            <Col>
                {menuTitle(<DashboardFilled />,"Dashboard")}
            </Col>
            <Col>
                {menuTitle(<CodepenCircleOutlined />,"Dashboard")}
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Link href="/pages/apicall" className="text-dark font-bold">
                        <div onClick={TestLoad}>
                            {menuBtn("Display API Data")}
                        </div>

                    </Link>
                </Row>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Custom")}
                    </Link>
                </Row>
                <Row>
                    <Link href="/components/card/creditCard" className="text-dark font-bold">
                        {subMenuBtn("Credit Card",conten,"right")}
                    </Link>
                </Row>
                <Row>
                    <Link href={"/market"}>
                        {menuBtnIcon("Shopping",<AlibabaOutlined />)}
                    </Link>

                </Row>
            </Col>
            <Col>
                <Row>
                    <Link href="/" className="text-dark font-bold">
                        {menuBtn("Display Table")}
                    </Link>
                </Row>
                <Row>
                    {menuBtn("Test two")}
                </Row>
            </Col>
        </Row>
    </div>
);
