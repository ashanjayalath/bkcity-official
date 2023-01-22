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
    Tooltip, Card, Switch, Drawer, Menu, MenuProps, Affix, Spin, Space, message
} from "antd";
import {
    BellFilled,
    CheckOutlined,
    EyeOutlined,
    RestOutlined,
    DownOutlined,
    CloseCircleOutlined, CloseOutlined, SettingFilled, LoadingOutlined, SearchOutlined
} from "@ant-design/icons";
import { FaShoppingBag , FaCloudDownloadAlt} from 'react-icons/fa';
import { MdHelpCenter,MdCategory,MdNoteAlt } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import {IoLanguage} from "react-icons/io5";
// import {logout} from '../firebase';
import Link from "next/link";
import React, {useState} from "react";
import Notification from "./notification";
import {HexColorPicker} from "react-colorful";
import {shopping,userList,Lang,careers,Downloads,Service,Help,Category} from "./menuItems";
import {CRUD,USER_SIGN_OUT} from "../apiCall/allLinks";
import {FCRUD} from '../firebaseDatabaseConnector';
import {signOut} from "@firebase/auth";
import Router from "next/router";

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
    const [search, setSearch] = useState<any>('');
    const [navColor, setNavColor] = useState<string>("#555555");
    const [open, setOpen] = useState<boolean>(false);
    const [bajCount,setBajCount]=useState<number>(1)
    const [navFixed,setNavFixed]=useState<any>("fixed")
    const [headerTextColor,setHeaderTextColor]=useState("#555555")
    const [lightDark,setLightDark]=useState("rgba(255,255,255,0.91)")
    const [blackWhite,setBlackWhite]=useState("#000000")
    const [langSelsect,setLangSelsect]=useState('E')
    const [openSearch, setOpenSearch] = useState(false);
    const [NotiOpen, setNotiOpen] = useState(true);
    const [prefixIcon,setPrefixIcon]=useState(<SearchOutlined />)
    let nameList = ['Ashan','Shan','Kalum','Akila','Samith','Nimal','Ranil','Mahinda','Maithree','Akalanka'];
    let output:any;
    if(search){
        output=nameList.filter(value => value.toLowerCase().includes(search.toLowerCase()))
    }


    const logout=()=>{
        console.log("aaaaaa")
        const auth = FCRUD.auth;
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.setItem('isLogged','false')
            sessionStorage.clear()
        }).catch((error) => {
            // An error happened.
            message.warning("LogOut Faild Try Again")
        });
    }

    const contents=(
        <div>
            <Space direction={"horizontal"}>
                <span style={{fontSize:16,marginLeft:5,fontWeight:"bold"}}>{search}</span>
            </Space>
            {/*<hr style={{borderColor:"rgba(9,0,0,0.13)"}}/>*/}
            <List
                className={"search-results-list"}
                grid={{gutter:5,column:1}}
                dataSource={output}
                locale={{emptyText:"No Results Found"}}
                renderItem={items=>(
                    <List.Item>
                        <div className={"search-results"} onClick={()=>{setSearch(output[output.indexOf(items)]);setOpenSearch(false);setPrefixIcon(<LoadingOutlined />)}}>
                            <span className={"search-results-text"}> items </span>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
    const popover=(content:any,place:any,navigationText:string,icon:any)=>{
        return(
            <Popover content={content} placement={place} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10}}  className={"pop-back"} arrowPointAtCenter>
                <Row>
                    <div style={{paddingLeft:"50%"}} >
                        {icon}
                    </div>
                </Row>
                <Row>
                    <span className={"nav-text"} style={{color:headerTextColor}}>{navigationText}<DownOutlined style={{fontSize:8,paddingLeft:5}} /></span>
                </Row>

            </Popover>
        )
    }

    const YourComponent = () => {
        return <HexColorPicker color={navColor} onChange={setNavColor} />;
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const hide = () => {
        setNotiOpen(false);
    };

    const noti=(
        <div className={"header-noti"}>
           <Notification />
            <div className={"header-noti-window"}>
                <Row>
                    <Col span={10} offset={7}>
                        <span className={"header-noti-clear"}><RestOutlined onClick={hide}/> Clear all</span>
                        <span className={"header-noti-read"} onClick={()=>setBajCount(0)}><EyeOutlined /> Read All</span>
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
                          setLangSelsect(item.id)
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
                <List >
                    <div
                        onClick={()=>{
                                if(item.path==="/sign"){
                                    logout
                                }
                            }
                        }
                    >
                        <Link href={item.path} className="text-dark font-bold">
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
        {content:shopping,place:"bottomLeft",navigationText:"Shopping",icon:<FaShoppingBag className={"menu-icon"} style={{color:navColor,fontSize:25}}/>},
        {content:Downloads,place:"bottomLeft",navigationText:"Downloads",icon:<FaCloudDownloadAlt className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
        {content:Service,place:"bottomLeft",navigationText:"Service",icon:<RiCustomerService2Fill className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
        {content:Category,place:"bottomLeft",navigationText:"Category",icon:<MdCategory className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
        {content:careers,place:"bottomLeft",navigationText:"Careers",icon:<MdNoteAlt className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
        {content:Help,place:"bottomLeft",navigationText:"Help",icon:<MdHelpCenter className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
    ]

    return(
      <>
          <Drawer  placement="right" onClose={onClose} open={open} width={350} closeIcon={<CloseCircleOutlined/>} closable={false} style={{borderRadius:10}}>
              <div className={"theme-drawer-window"}>
                  <Row>
                      <Col span={23}>
                          <span className={"theme-menu-title"}>Material UI Configurator</span>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                          <span className={"theme-menu-sub"}>Material UI Configurator</span>
                      </Col>
                  </Row>
                  <hr className={"theme-horizontal"}/>
                  <Row>
                      <Col>
                          <span className={"theme-menu-normal"}>Navigation Icon Colors</span>
                      </Col>
                  </Row>
                  <div className={"theme-btn-bar"}>
                      <Row gutter={10}>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-1"} onClick={()=>setNavColor("#8f7cec")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-2"}  onClick={()=>setNavColor("#e500ff")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-3"}   onClick={()=>setNavColor("#ec0707")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-4"}  onClick={()=>setNavColor("#ff9800")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-5"}  onClick={()=>setNavColor("#52c41a")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-6"}  onClick={()=>setNavColor("#00ffce")}> </Button>
                          </Col>

                      </Row>
                      <Row>
                          <Col span={17}>
                              <div className={"theme-color-window"}>
                                  {YourComponent()}
                              </div>
                          </Col>
                          <Col span={7}>
                              <Row>
                                  <Col>
                                      <Tooltip placement="top" title={"Click to add"}>
                                          <Card hoverable={true} className={"theme-color-preview"} style={{backgroundColor:navColor}}/>
                                      </Tooltip>

                                  </Col>
                                  <Col>
                                      <Input type={"text"} className={"theme-color-input"} value={navColor} onChange={event=>setNavColor(event.target.value)}/>
                                  </Col>
                              </Row>

                          </Col>
                      </Row>
                      <hr className={"theme-horizontal"}/>
                      <div className={"theme-space-top"}>
                          <Row>
                              <Col span={19}>
                                  <span className={"theme-menu-normal"} >Navbar Fixed</span>
                              </Col>
                              <Col span={5}>
                                  <Switch size={"small"} defaultChecked checkedChildren={<CheckOutlined />}unCheckedChildren={<CloseOutlined />} onChange={(checked)=>{
                                      if(checked){
                                          setNavFixed("fixed")
                                      }else{
                                          setNavFixed("initial")
                                      }
                                  }}/>
                              </Col>
                          </Row>
                      </div>
                      <hr className={"theme-horizontal"}/>
                      <div className={"theme-space-top"}>
                          <Row>
                              <Col span={19}>
                                  <span className={"theme-menu-normal"} >Light</span>
                              </Col>
                              <Switch size={"small"} defaultChecked checkedChildren={<CheckOutlined />}unCheckedChildren={<CloseOutlined />} onChange={(checked)=>{
                                  if(checked){
                                      // white
                                      setNavColor("#555555")
                                      setBlackWhite("#000000")
                                      setLightDark("#FFFFFFB5")
                                      setHeaderTextColor("#555555")
                                  }else{
                                      //dark
                                      setNavColor("#FFFFFFB5")
                                      setBlackWhite("#ffffff")
                                      setLightDark("#00000051")
                                      setHeaderTextColor("#FFFFFFB5")
                                  }
                              }}/>
                          </Row>
                      </div>
                      <div className={"theme-space-top"}>
                          <Row>
                              <Col span={19}>
                                  <span className={"theme-menu-normal"} >Sidenav Mini</span>
                              </Col>
                              <Col span={5}>
                                  <Switch size={"small"} defaultChecked checkedChildren={<CheckOutlined />}unCheckedChildren={<CloseOutlined />} onChange={(checked)=>{
                                      if(checked){
                                          setNavFixed("fixed")
                                      }else{
                                          setNavFixed("initial")
                                      }
                                  }}/>
                              </Col>
                          </Row>
                      </div>
                  </div>
              </div>
          </Drawer>

          <Layout>
          <div className={"header-menu-item-window"} style={{position:navFixed,zIndex:1,backgroundColor:lightDark}}>
              <Row>
                  <Col lg={9} xl={10} xxl={12}>
                      <div className={"header-main-logo-search-div"}>
                          <Row>
                              {/*<Col lg={11} xl={11} xxl={12}>*/}
                              {/*    /!*small menu icon*!/*/}
                              {/*</Col>*/}
                              <Col lg={3} xl={3} xxl={2}>
                                  <Link href="/" >
                                    <img src={"logo.png"} width={40} height={"auto"}/>
                                  </Link>
                              </Col>
                              <Col lg={5} xl={5} xxl={5}>
                                  <Link href="/" className="text-dark font-bold" >
                                    <h1 style={{color:blackWhite}}>BK CiTy</h1>
                                  </Link>
                              </Col>
                              <Col lg={{span:13,offset:2}} xl={{span:13,offset:2}} xxl={{span:15,offset:1}}>
                                  <div className={"header-search-div"} >
                                      <Popover
                                          className={"search-pop"}
                                          overlayStyle={{position:"fixed",zIndex:10}}
                                          content={contents}
                                          trigger='click'
                                          open={openSearch}
                                          showArrow={false}
                                          placement={"bottom"}
                                          overlayInnerStyle={{borderRadius:5,width:350}}
                                          onVisibleChange={()=>{setOpenSearch(false);setPrefixIcon(<SearchOutlined />)}}
                                      >
                                          {/*prefix={<SearchOutlined />}*/}
                                      <Input placeholder={"Search"} className={"header-search"} value={search} suffix={prefixIcon} allowClear bordered={false}
                                             onChange={(ele) =>{
                                                 setSearch(ele.target.value);
                                                 if(ele.target.value===""){
                                                     setOpenSearch(false)
                                                     setPrefixIcon(<SearchOutlined />)
                                                 }else{
                                                     setPrefixIcon(<LoadingOutlined />);
                                                     // if(output.length === 0){
                                                     //     setOpenSearch(false);
                                                     // }
                                                         setOpenSearch(true);

                                                 }
                                             }
                                             }
                                      />
                                      </Popover>
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
                                      {popover(item.content,item.place,item.navigationText,item.icon)}
                                  </List>
                              )}
                          />
                  </Col>
                  <Col lg={{span:3,offset:1}} xl={{span:3}} xxl={{span:2,offset:1}}>
                      <Row gutter={15}>
                          <Col>
                              <div>
                                  <Badge count={bajCount} size={"small"} className={"header-badge-noti"} style={{backgroundColor:bajColorChoose(bajCount)}} >
                                      <Popover content={noti} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"100%"}} arrowPointAtCenter >
                                          <Avatar className={"header-noti-avatar"} shape="circle" size={22} style={{backgroundColor:navColor}} onClick={()=>{
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
                                  <Badge count={langSelsect} size={"small"} className={"header-badge-noti"} style={{backgroundColor:blackWhite,color:lightDark}} >
                                      <Popover content={translate} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"100%"}} arrowPointAtCenter>
                                          <Avatar className={"header-noti-avatar"} shape="circle" size={22} style={{backgroundColor:navColor}}>
                                              <IoLanguage />
                                          </Avatar>
                                      </Popover>
                                  </Badge>
                              </div>
                          </Col>
                          <Col>
                              <div>
                                  <Popover content={user} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"95%"}} arrowPointAtCenter title={"Mr.Ashan Jayalath"}>
                                      <Row>
                                          <Col>
                                          <Avatar className={"header-user-avatar"} src={"logo.png"}/>
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


          <div>
              <Row>
                  <Col span={2} offset={22}>
                      <Affix offsetTop={495}>
                      <Button shape={"circle"} className={"theme-btn-down"} onClick={showDrawer} icon={<SettingFilled size={50}/>}/>
                      </Affix>
                  </Col>
              </Row>
          </div>


      </>
    )
}