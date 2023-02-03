import {
    Col,
    Divider,
    Row,
    Popover,
    Layout,
    Avatar,
    Badge,
    Input,
    List,
    Button,
    Tooltip, Card, Switch, Drawer, Menu, Image, Affix, Spin, Space, message, FloatButton
} from "antd";
import {
    BellFilled,
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
    CustomerServiceOutlined, CommentOutlined
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
                                        localStorage.setItem('isLogged','false')
                                        sessionStorage.clear()
                                    }).catch((error) => {
                                        // An error happened.
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

    const menuList=[
        {content:shopping,place:"bottomLeft",navigationText:"Shopping",path:"/market",icon:<FaShoppingBag className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}}/>},
        {content:Downloads,place:"bottomLeft",navigationText:"Downloads",path:"/",icon:<FaCloudDownloadAlt className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
        {content:Service,place:"bottomLeft",navigationText:"Service",path:"/",icon:<RiCustomerService2Fill className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
        {content:Category,place:"bottomLeft",navigationText:"Category",path:"/",icon:<MdCategory className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
        {content:careers,place:"bottomLeft",navigationText:"Careers",path:"/",icon:<MdNoteAlt className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
        {content:Help,place:"bottomLeft",navigationText:"Help",path:"/",icon:<MdHelpCenter className={HeaderCSS.menu_icon} style={{color:navColor,fontSize:25}} />},
    ]

    return(
      <>
          {/*<Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open}>*/}

          {/*</Drawer>*/}
          <Layout>
          <div className={HeaderCSS.header_menu_item_window} style={{position:navFixed,zIndex:1,backgroundColor:lightDark}}>
              <Row>
                  <Col lg={9} xl={10} xxl={12}>
                      <div className={HeaderCSS.header_main_logo_search_div}>
                          <Row>
                              <Col lg={3} xl={2} xxl={2}>
                                      <div className={HeaderCSS.menuTest}>
                                          <AppstoreOutlined style={{fontSize:25,color:"blue",cursor:"pointer",marginTop:13,marginLeft:13}}/>

                                      </div>

                              </Col>
                              <Col lg={3} xl={2} xxl={2}>
                                  <Link href="/" >
                                    <Image alt={"User logo"} preview={false} src={"logo.png"} width={40} height={"auto"}/>
                                  </Link>
                              </Col>
                              <Col lg={5} xl={5} xxl={5}>
                                  <div style={{marginTop:5}}>
                                      <Link href="/">
                                          <span style={{color:blackWhite,fontSize:25,marginRight:10}}>BK CiTy</span>
                                      </Link>
                                  </div>

                              </Col>
                              <Col lg={{span:13,offset:2}} xl={{span:13,offset:2}} xxl={{span:15,offset:1}}>
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
                                                  {/*<hr style={{borderColor:"rgba(9,0,0,0.13)"}}/>*/}
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
                              </Col>
                          </Row>
                      </div>
                  </Col>
                  <Col  lg={11} xl={{span:10}} xxl={7}>
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
                  </Col>
                  <Col lg={{span:3,offset:1}} xl={{span:3}} xxl={{span:2,offset:1}}>
                      <Row gutter={15}>
                          <Col>
                              <div>
                                  <Popover content={<ThemeDrawer/>} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"100%"}} arrowPointAtCenter >
                                      <Avatar className={HeaderCSS.header_noti_avatar} shape="circle" size={22} style={{backgroundColor:navColor}}>
                                        <SettingFilled size={50}/>
                                      </Avatar>
                                  </Popover>
                              </div>
                          </Col>
                          <Col>
                              <div>
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
                              <div>
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
                              <div onClick={()=>Router.push("/account")}>
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
                  </Col>
              </Row>
          </div>
          </Layout>

      </>
    )
}