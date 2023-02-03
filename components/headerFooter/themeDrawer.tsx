import HeaderCSS from "../../styles/header.module.css";
import {Button, Col, Input, Row, Switch} from "antd";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HexColorPicker} from "react-colorful";

export default function ThemeDrawer(){
    const navColor=useSelector((state:any)=>state.navColor);
    const navFixed=useSelector((state:any)=>state.navFixed);
    const lightDark=useSelector((state:any)=>state.lightDark);
    const langSelect=useSelector((state:any)=>state.langSelect);
    const dispatch=useDispatch();

    const [NavTheme,setNavTheme]=useState<boolean>(true)
    const YourComponent = () => {
        return <HexColorPicker color={navColor} onChange={(e)=>{
            if(NavTheme){
                //white
                if(parseInt(e.substring(1),16)<parseInt("c4c4c4",16)){
                    dispatch({type:"CHANGE_NAV_COLOR",value:e})
                }
            }else{
                //black
                if(parseInt(e.substring(1),16)<parseInt("a8a4a4",16) || parseInt(e.substring(1),16)>parseInt("e6e6e6",16)){
                    dispatch({type:"CHANGE_NAV_COLOR",value:e})
                }
            }
        }
        } />;
    };
    return<>
        <div className={HeaderCSS.theme_drawer_window}>
            <div className={HeaderCSS.theme_space_top}>
                <Row>
                    <Col span={19}>
                        <span className={HeaderCSS.theme_menu_normal} >Navbar Fixed</span>
                    </Col>
                    <Col span={5}>
                        <Switch size={"small"} defaultChecked={navFixed === "fixed"} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} onChange={(checked)=>{
                            if(checked){
                                dispatch({type:"CHANGE_NAV_POSITION",value:"fixed"});
                            }else{
                                dispatch({type:"CHANGE_NAV_POSITION",value:"initial"});
                            }
                        }}/>
                    </Col>
                </Row>
            </div>
            <div className={HeaderCSS.theme_space_top}>
                <Row>
                    <Col span={19}>
                        <span className={HeaderCSS.theme_menu_normal} >Light</span>
                    </Col>
                    <Switch size={"small"} defaultChecked={lightDark === "#FFFFFFB5"} checkedChildren={<CheckOutlined />}unCheckedChildren={<CloseOutlined />} onChange={(checked)=>{
                        if(checked){
                            // white
                            setNavTheme(true)
                            dispatch({type:"CHANGE_NAV_COLOR",value:"#555555"});
                            dispatch({type:"CHANGE_NAV_THEME",value:"#FFFFFFB5"});
                        }else{
                            //dark
                            setNavTheme(false)
                            dispatch({type:"CHANGE_NAV_COLOR",value:"#FFFFFFB5"});
                            dispatch({type:"CHANGE_NAV_THEME",value:"#00000051"});
                        }
                    }}/>
                </Row>
            </div>
            <hr className={HeaderCSS.theme_horizontal}/>

            <Row>
                <Col>
                    <span className={HeaderCSS.theme_menu_normal}>Navigation Icon Colors</span>
                </Col>
            </Row>
            <div className={HeaderCSS.theme_btn_bar}>
                <Row gutter={10}>
                    <Col>
                        <Button type="primary" shape="circle" size={"small"} className={HeaderCSS.theme_btn_bar_1} onClick={()=>dispatch({type:"CHANGE_NAV_COLOR",value:"#8f7cec"})}> </Button>
                    </Col>
                    <Col>
                        <Button type="primary" shape="circle" size={"small"} className={HeaderCSS.theme_btn_bar_2}  onClick={()=>dispatch({type:"CHANGE_NAV_COLOR",value:"#e500ff"})}> </Button>
                    </Col>
                    <Col>
                        <Button type="primary" shape="circle" size={"small"} className={HeaderCSS.theme_btn_bar_3}   onClick={()=>dispatch({type:"CHANGE_NAV_COLOR",value:"#ec0707"})}> </Button>
                    </Col>
                    <Col>
                        <Button type="primary" shape="circle" size={"small"} className={HeaderCSS.theme_btn_bar_4}  onClick={()=>dispatch({type:"CHANGE_NAV_COLOR",value:"#ff9800"})}> </Button>
                    </Col>
                    <Col>
                        <Button type="primary" shape="circle" size={"small"} className={HeaderCSS.theme_btn_bar_5}  onClick={()=>dispatch({type:"CHANGE_NAV_COLOR",value:"#52c41a"})}> </Button>
                    </Col>
                    <Col>
                        <Button type="primary" shape="circle" size={"small"} className={HeaderCSS.theme_btn_bar_6}  onClick={()=>dispatch({type:"CHANGE_NAV_COLOR",value:"#00ffce"})}> </Button>
                    </Col>

                </Row>
                <Row gutter={10}>
                    <Col>
                        <Input maxLength={7} type={"text"} className={HeaderCSS.theme_color_input} value={navColor} onChange={event=>dispatch({type:"CHANGE_NAV_COLOR",value:event.target.value})}/>
                    </Col>
                    <Col>
                        <Button type={"primary"} style={{backgroundColor:"black",marginTop:20,width:90}} onClick={()=>dispatch({type:"CHANGE_NAV_COLOR",value:"#555555"})}>Default</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={HeaderCSS.theme_color_window}>
                            {YourComponent()}
                        </div>
                    </Col>
                </Row>


            </div>
        </div>
    </>
}