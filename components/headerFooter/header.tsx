import {
    Col,
    Row,
    Popover,
    Layout,
    Avatar,
    Badge,
    Input, Radio,
    List,
    Button,Space,
    Drawer, Menu, Image, message, DrawerProps
} from "antd";
import {
    BellFilled, MailOutlined, SettingOutlined,
    CheckOutlined,
    EyeOutlined,
    RestOutlined,
    DownOutlined,
    CloseCircleOutlined,
    CloseOutlined,
    SettingFilled,
    LoadingOutlined,
    SearchOutlined,
    AppstoreOutlined,
    CustomerServiceOutlined, CommentOutlined, PlusSquareFilled
} from "@ant-design/icons";
import { FaShoppingBag , FaCloudDownloadAlt} from 'react-icons/fa';
import { MdHelpCenter,MdCategory,MdNoteAlt } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import {IoLanguage} from "react-icons/io5";
import Link from "next/link";
import React, {useState} from "react";
import Notification from "./notification";
import {HexColorPicker} from "react-colorful";
import {shopping,userList,Lang,careers,Downloads,Service,Help,Category} from "./menuItems";
import {CRUD,USER_SIGN_OUT} from "../apiCall/allLinks";
import {FCRUD} from '../firebase/firebaseDatabaseConnector';
import {signOut} from "@firebase/auth";
import Router from "next/router";
import HeaderCSS from '../../styles/header.module.css'
import {useSelector , useDispatch} from "react-redux";
import ThemeDrawer from "./themeDrawer";
import type { MenuProps } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';

function bajColorChoose(count:number) {
    let def="#8f7cec"
    if(count<5){
        def="#78ff4f"
    }else if(count>=5 && count<=10){
        def="#ff9800"
    }else if(count>10){
        def="#ec0707"
    }
    return def;
}

export default function HeaderDesign() {
    const navColor=useSelector((state:any)=>state.navColor);
    const navFixed=useSelector((state:any)=>state.navFixed);
    const lightDark=useSelector((state:any)=>state.lightDark);
    const langSelect=useSelector((state:any)=>state.langSelect);
    const dispatch=useDispatch();

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const [dropSearch,setDropSearch] = useState(false)
    const [search, setSearch] = useState<any>('');
    const [bajCount,setBajCount]=useState<number>(1)
    const [headerTextColor,setHeaderTextColor]=useState("#555555")
    const [blackWhite,setBlackWhite]=useState("#000000A8")
    const [openSearch, setOpenSearch] = useState(false);
    const [NotiOpen, setNotiOpen] = useState(true);
    const [prefixIcon,setPrefixIcon]=useState(<SearchOutlined />)
    let nameList = ['Ashan','Shan','Kalum','Akila','Samith','Nimal','Ranil','Mahinda','Maithree','Akalanka'];
    let output:any;
    if(search){
        output=nameList.filter(value => value.toLowerCase().includes(search.toLowerCase()))
    }
    const popover=(content:any,place:any,navigationText:string,icon:any,path:any)=>{
        return(
            <Popover content={content} placement={place}
                     overlayStyle={{position:"fixed",zIndex:1}}
                     overlayInnerStyle={{borderRadius:10}}
                     className={HeaderCSS.pop_back}
                     arrowPointAtCenter
                     title={navigationText}
            >
                    <Row onClick={()=>Router.push(path)}>
                        <Col span={6} offset={9}>
                            <div style={{cursor:"pointer"}}>
                                {icon}
                            </div>
                        </Col>
                    </Row>
                    <Row onClick={()=>Router.push(path)}>
                    <span
                        className={HeaderCSS.nav_text}
                        style={{
                            textAlign:"center",
                            color:headerTextColor,
                            cursor:"pointer",
                            paddingRight:10,
                            paddingLeft:10
                        }}>
                        {navigationText}
                    </span>
                    </Row>

            </Popover>
        )
    }

    const hide = () => {
        setNotiOpen(false);
    };

    const noti=(
        <div className={HeaderCSS.header_noti}>
           <Notification />
            <div className={HeaderCSS.header_noti_window}>
                <Row>
                    <Col span={10} offset={7}>
                        <span className={HeaderCSS.header_noti_clear}><RestOutlined onClick={hide}/> Clear all</span>
                        <span className={HeaderCSS.header_noti_read} onClick={()=>setBajCount(0)}><EyeOutlined /> Read All</span>
                    </Col>
                </Row>
            </div>
        </div>
    );

    const translate=(
        <div>
            <List dataSource={Lang} size={"small"} split={false}
                  renderItem={item => (
                      <List.Item onClick={()=>{
                          dispatch({type:"CHANGE_LANGUAGE",value:item.id});
                      }}>
                          <div style={{cursor:"pointer"}}>
                              <List >{item.title}</List>
                          </div>
                      </List.Item>
            )} style={{fontSize:12}}
            />
        </div>
    );

    const user=(
        <List
            size={"small"}
            dataSource={userList}
            split={false}
            renderItem={item => (
                <List>
                    <div
                        onClick={()=>{
                                if(item.path==="/sign"){
                                    const auth = FCRUD.auth;
                                    signOut(auth).then(() => {
                                        // Sign-out successful.
                                        dispatch({type:"FIREBASE_AUTH",value:false})
                                        localStorage.setItem('isLogged','false')
                                        sessionStorage.clear()
                                    }).catch((error) => {
                                        // An error happened.
                                        dispatch({type:"FIREBASE_AUTH",value:true})
                                        message.warning("LogOut Failed Try Again")
                                    });
                                }
                            }
                        }
                    >
                        <Link href={item.path} className="HeaderCSS.ext_dark font_bold">
                            <div style={{cursor:"pointer"}}>
                                {item.menu}
                            </div>
                        </Link>
                    </div>

                </List>
            )}
        />
    )

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    type MenuItem = Required<MenuProps>['items'][number];

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
    const menuList=[
        {content:shopping,place:"bottomLeft",navigationText:"Shopping",path:"/market",icon:<FaShoppingBag className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}}/>},
        {content:Downloads,place:"bottomLeft",navigationText:"Downloads",path:"/",icon:<FaCloudDownloadAlt className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
        {content:Service,place:"bottomLeft",navigationText:"Service",path:"/",icon:<RiCustomerService2Fill className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
        {content:Category,place:"bottomLeft",navigationText:"Category",path:"/",icon:<MdCategory className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
        {content:careers,place:"bottomLeft",navigationText:"Careers",path:"/",icon:<MdNoteAlt className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
        {content:Help,place:"bottomLeft",navigationText:"Help",path:"/",icon:<MdHelpCenter className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
    ]
    // const items:any = [];
    const items: MenuItem[] =
        menuList.map((value)=>getItem(value.navigationText,value.navigationText,value.icon, [
            getItem('Option 1', '1'),
            getItem('Option 2', '2'),
            getItem('Option 3', '3'),
            getItem('Option 4', '4'),
        ]),)

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };


    const searchBox=(
        <div className={HeaderCSS.searchMain} style={{height: dropSearch ? 100:30}}>
            {/*onMouseOut={()=>setDropSearch(false)}*/}
            <Row>
                <div className={HeaderCSS.header_search}>
                    <Input placeholder={"Search"}
                           value={search}
                           suffix={prefixIcon}
                           allowClear
                           bordered={false}
                           onChange={(ele) =>{
                               setSearch(ele.target.value);
                               if(ele.target.value===""){
                                   setOpenSearch(false)
                                   setPrefixIcon(<SearchOutlined />)
                                   setDropSearch(false)
                               }else{
                                   setPrefixIcon(<LoadingOutlined />);
                                   setOpenSearch(true);
                                   setDropSearch(true)
                               }
                           }
                           }
                    />
                </div>
            </Row>
            <Row>
                <div className={HeaderCSS.header_search_div} style={{display: dropSearch ? "flex":"none"}}>
                    <Row>
                        <Space direction={"horizontal"}>
                            <span style={{fontSize:16,marginLeft:5,fontWeight:"bold"}}>{search}</span>
                        </Space>
                        <List
                            className={HeaderCSS.search_results_list}
                            grid={{gutter:5,column:1}}
                            dataSource={output}
                            locale={{emptyText:"No Results Found"}}
                            renderItem={items=>(
                                <List.Item>
                                    <div className={HeaderCSS.search_results} onClick={()=>{setSearch(output[output.indexOf(items)]);setOpenSearch(false);setPrefixIcon(<LoadingOutlined />)}}>
                                        <span className={HeaderCSS.search_results_text}> items </span>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Row>
                </div>
            </Row>
        </div>
    );

    const MainMenus=(
        <div className={HeaderCSS.nav_menu}>
            <List
                grid={{ gutter: 1}}
                dataSource={menuList}
                split={false}
                renderItem={item => (
                    <List>
                        {popover(item.content,item.place,item.navigationText,item.icon,item.path)}
                    </List>
                )}
            />
        </div>
    );

    const otherSettingsOnHeader=(
        <Row gutter={10}>
            <Col>
                <div className={HeaderCSS.headAvater}>
                    <Popover content={<ThemeDrawer/>} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"100%"}} arrowPointAtCenter >
                        <Avatar className={HeaderCSS.header_noti_avatar} shape="circle" size={22} style={{backgroundColor:navColor}}>
                            <SettingFilled size={50}/>
                        </Avatar>
                    </Popover>
                </div>
            </Col>
            <Col>
                <div className={HeaderCSS.headerNoti}>
                    <Badge count={bajCount} size={"small"} className={HeaderCSS.header_badge_noti} style={{backgroundColor:bajColorChoose(bajCount)}} >
                        <Popover content={noti} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"100%"}} arrowPointAtCenter >
                            <Avatar className={HeaderCSS.header_noti_avatar} shape="circle" size={22} style={{backgroundColor:navColor}} onClick={()=>{
                                setBajCount(bajCount+1)
                            }}>
                                <BellFilled />
                            </Avatar>
                        </Popover>
                    </Badge>
                </div>
            </Col>
            <Col>
                <div className={HeaderCSS.headerLang}>
                    <Badge count={langSelect} size={"small"} className={HeaderCSS.header_badge_noti} style={{backgroundColor:blackWhite,color:lightDark}} >
                        <Popover content={translate} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"100%"}} arrowPointAtCenter>
                            <Avatar className={HeaderCSS.header_noti_avatar} shape="circle" size={22} style={{backgroundColor:navColor}}>
                                <IoLanguage />
                            </Avatar>
                        </Popover>
                    </Badge>
                </div>
            </Col>
            <Col>
                <div onClick={()=>Router.push("/account")} className={HeaderCSS.headerUsr}>
                    <Popover content={user} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"95%"}} arrowPointAtCenter title={"Mr.Ashan Jayalath"}>
                        <Row>
                            <Col>
                                <Avatar className={HeaderCSS.header_user_avatar} src={"logo.png"}/>
                            </Col>
                        </Row>
                    </Popover>
                </div>
            </Col>
        </Row>
    );

    const menuSettings=(
        <div>
            <Row>
                <Radio.Group value={placement} onChange={onChange}>
                    {/*<Row>*/}
                    {/*    <h4>Menu Position</h4>*/}
                    {/*</Row>*/}
                    <Row>
                        <Radio value="top">Top to Bottom</Radio>
                    </Row>
                    <Row>
                        <Radio value="right">Right to Left</Radio>
                    </Row>
                    <Row>
                        <Radio value="bottom">Bottom to Top</Radio>
                    </Row>
                    <Row>
                        <Radio value="left">Left to Right</Radio>
                    </Row>
                </Radio.Group>
            </Row>
            <Row>
                <h4>Changes Save ?</h4>
            </Row>
            <Row>
                <Col span={11}>
                    <Button onClick={onClose} style={{width:'100%'}}>No</Button>
                </Col>
                <Col span={11} offset={2}>
                    <Button type="primary" onClick={onClose} style={{width:'100%'}}>
                        Save
                    </Button>
                </Col>



            </Row>
        </div>
    );
    const close=(
        <div>
            <Col span={2}>
                <PlusSquareFilled className={HeaderCSS.menuCloseIcon} onClick={onClose}/>
            </Col>
        </div>
    );
    const sideDrawer=(
        <Drawer mask={true}  placement={"left"} title={close} onClose={onClose} open={open} closable={false}>
            <Row style={{backgroundColor:"rgba(166,161,161,0.09)",padding:10,borderRadius:10}}>
                <Col>
                    <Popover content={menuSettings} placement={"bottom"}
                             overlayInnerStyle={{borderRadius:10}}
                             arrowPointAtCenter
                             title={"Menu Settings"}
                             trigger={'hover'}
                    >
                        <SettingFilled className={HeaderCSS.menuSettinsIcon}/>
                    </Popover>
                </Col>
                <Col>
                    <Popover content={<ThemeDrawer/>}  placement={"bottom"}
                             overlayInnerStyle={{borderRadius:10}}
                             arrowPointAtCenter
                             title={"Menu Settings"}
                             trigger={'hover'}
                    >
                        <CheckOutlined className={HeaderCSS.menuSettinsIcon}/>
                    </Popover>
                </Col>
            </Row>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width:'100%'}}
                items={items}
            />
        </Drawer>
    );
    return(
      <>
          {/*<Layout>*/}
          <div className={HeaderCSS.header_menu_item_window} style={{position:navFixed,zIndex:1,backgroundColor:lightDark}}>
              <Row>
                  <Col lg={1} xl={1} xxl={1}>
                      <div className={HeaderCSS.side_drawer}>
                          <AppstoreOutlined className={HeaderCSS.menuIcon}onClick={showDrawer}/>
                      </div>
                  </Col>
                  <Col lg={8} xl={8} xxl={10}>
                      <div className={HeaderCSS.header_main_logo_search_div}>
                          <Row>
                              <Col xl={3} xxl={2}>
                                  <Link href="/" >
                                    <Image alt={"User logo"} preview={false} src={"logo.png"} width={40} height={"auto"}/>
                                  </Link>
                              </Col>
                              <Col xl={6} xxl={6}>
                                  <div style={{marginTop:5}}>
                                      <Link href="/">
                                          <span style={{color:blackWhite,fontSize:25,marginRight:10}}>BK CiTy</span>
                                      </Link>
                                  </div>
                              </Col>
                              <Col lg={13} xl={15} xxl={15} >
                                  {searchBox}
                              </Col>
                          </Row>
                      </div>
                  </Col>
                  <Col lg={11} xl={10} xxl={8}>
                      {MainMenus}
                  </Col>
                  <Col lg={4} xl={4} xxl={4}>
                      {otherSettingsOnHeader}
                  </Col>
              </Row>
          </div>
          {/*</Layout>*/}
          {sideDrawer}
      </>
    )
}