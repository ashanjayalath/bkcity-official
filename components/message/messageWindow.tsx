import {Avatar, Carousel, Col, Form, Input, List, message, Popover, Row, Space, Upload} from "antd";
import MenuCSS from '../../components/message/message.module.css'
import {userList} from "../headerFooter/menuItems";
import Link from "next/link";
import React, {useState} from "react";
import {
    CheckCircleFilled,
    CloseCircleFilled,
    DownOutlined,
    ExclamationCircleFilled,
    LoadingOutlined
} from "@ant-design/icons";
import CommentWithAvator from "./commentWithAvator";
import {FEEDBACK} from "../apiCall/allLinks";
import {
    AiTwotoneDelete,
    BsEmojiSmile,
    HiOutlineCamera,
    IoAttach,
    IoSend,
    RiMessage3Fill,
    SlDislike,
    SlLike
} from "react-icons/all";
export default function MessageWindow(){
    const [IconLoading,setIconLoading]=useState<any>()
    const [storeMsg,setStoreMsg]=useState<string>()
    const [like,setLike]=useState<number>(100);
    const [likeColor,setLikeColor]=useState<string>("#000")
    let nameList = ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'];
    const submitComment=(getData:any)=>{
        let options={
            url:FEEDBACK.URL,
            method:FEEDBACK.METHOD,
            body:JSON.stringify(getData)
        }
        if(JSON.parse(options.body).Message.length>0){
            fetch(options.url,options).then((data)=>{
                if (data.status === 200){
                    setIconLoading( <CheckCircleFilled style={{ color:"green",backgroundColor:"white" }}/>)
                    setTimeout(()=>{
                        setIconLoading("")
                    },2000)
                }else if(data.status === 405){
                    setIconLoading( <CloseCircleFilled style={{ color:"red",backgroundColor:"white" }}/>)
                    setTimeout(()=>{
                        setIconLoading("")
                    },2000)
                }else{
                    setIconLoading(<ExclamationCircleFilled style={{ color:"Yellow",backgroundColor:"white" }}/>)
                    setTimeout(()=>{
                        setIconLoading("")
                    },2000)
                }
            })
        }else{
            setIconLoading("")
            message.info("Please Add Some Comment.")
        }

    }


    const contents=(
        <div>
            <Row>

                    <Carousel autoplay style={{backgroundColor:"red",width:320,height:180}}>
                        <div>
                            <h3 style={{textAlign:"center"}}>1</h3>
                        </div>
                        <div>
                            <h3 style={{textAlign:"center"}}>2</h3>
                        </div>
                        <div>
                            <h3 style={{textAlign:"center"}}>3</h3>
                        </div>
                        <div>
                            <h3 style={{textAlign:"center"}}>4</h3>
                        </div>
                    </Carousel>

            </Row>
            <Row>
                <Col span={22}>
                    <span>sdsfssfsdf</span>
                </Col>
                <Col span={2}>
                    <AiTwotoneDelete style={{fontSize:20}} className={MenuCSS.iconBtn}
                            onClick={()=>{
                                // <CommentWithAvator msg={storeMsg} user={true}/>
                            }
                            }
                    />
                </Col>
            </Row>


        </div>
    )


    const sendMsg=()=>{
        let getTime=new Date().toLocaleTimeString();
    }

    return<>
        <Row>
            <Col span={22} offset={1}>
                <div className={MenuCSS.mainWindow}>
                    <Row>
                        <Col span={1}>
                            <Avatar src={'logo.png'}/>
                        </Col>
                        <Col span={23}>
                            <Row>
                                <Col>
                                    <h2 style={{fontWeight:"bold"}}>Ashan Jayalath</h2>
                                </Col>
                                <Col>
                                    <h5 style={{marginTop:10,marginLeft:10}}>10.05 A.M</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Row>
                                <Col span={24}>
                                    <div style={{width:'100%',height:390,backgroundColor:"red"}}>

                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Row gutter={10}>
                                        <Col span={5}>
                                            <div className={MenuCSS.likeBtnWindow}>
                                                <div style={{marginTop:10}}>
                                                    <Row>
                                                        <Col span={1}>
                                                            <SlLike style={{color:likeColor,marginTop:4,fontSize:20}} className={MenuCSS.likeUnlikeIcon} onClick={()=>{
                                                                setLike(like+1);
                                                                setLikeColor("#8f7cec")
                                                            }}/>
                                                        </Col>
                                                        <Col span={1} offset={6}>
                                                      <span style={{fontSize:13,paddingTop:15,fontWeight:"bold"}}>
                                                            {like}
                                                      </span>
                                                        </Col>
                                                    </Row>
                                                </div>

                                            </div>

                                        </Col>
                                        <Col span={1}>
                                            <SlDislike className={MenuCSS.likeUnlikeIcon} style={{fontSize:20,marginTop:4}}/>
                                        </Col>
                                        <Col span={1} offset={1}>
                                            <RiMessage3Fill style={{fontSize:20,marginTop:4}} className={MenuCSS.likeUnlikeIcon}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Col span={16}>

                            <Row>
                                <Col>
                                    <div className={MenuCSS.chatMain}>
                                        <List
                                            className={MenuCSS.chatScroll}
                                            grid={{gutter:5,column:1}}
                                            dataSource={nameList}

                                            locale={{emptyText:"No Results Found"}}
                                            renderItem={items=>(
                                                <List>
                                                    <div>
                                                        <CommentWithAvator msg={items}/>
                                                        {/*<span style={{paddingLeft:30}}> items </span>*/}
                                                    </div>
                                                </List>
                                            )}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Row gutter={10}>
                                        <Col span={23}>
                                            <div className={MenuCSS.messageBoxWindow}>
                                                <Form.Item name={['Message']}>
                                                    <Row gutter={10}>
                                                        <Col span={20}>
                                                            <Input className={MenuCSS.messageBox} placeholder={"Comment"} bordered={false}
                                                                   allowClear
                                                                   onChange={
                                                                       (e)=>{
                                                                           setStoreMsg(e.target.value)
                                                                       }
                                                                   }
                                                            />
                                                        </Col>
                                                        <Col span={4}>
                                                            <div className={MenuCSS.iconBtnWindow}>
                                                                <Row gutter={10}>
                                                                    <Col span={8}>
                                                                        <div>
                                                                            <BsEmojiSmile style={{fontSize:20}} className={MenuCSS.iconBtn}/>
                                                                        </div>
                                                                    </Col>
                                                                    <Col span={8}>
                                                                        <div>
                                                                            {/*<Upload>*/}
                                                                            <Popover
                                                                                content={contents}
                                                                                placement={'topRight'}
                                                                                trigger="click"
                                                                                overlayStyle={{position:"fixed",zIndex:1}}
                                                                                overlayInnerStyle={{borderRadius:10,height:220,width:350}}
                                                                                className={"pop-back"} arrowPointAtCenter
                                                                            >
                                                                                <HiOutlineCamera style={{fontSize:20}} className={MenuCSS.iconBtn}/>
                                                                            </Popover>
                                                                            {/*</Upload>*/}

                                                                        </div>
                                                                    </Col>
                                                                    <Col span={8}>
                                                                        <div>
                                                                            <IoAttach style={{fontSize:20}} className={MenuCSS.iconBtn}/>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>


                                                        </Col>
                                                    </Row>

                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={1}>
                                            <div className={MenuCSS.sendIcon}>
                                                <IoSend style={{fontSize:20}} className={MenuCSS.iconBtn}
                                                        onClick={()=>submitComment({"Message":storeMsg,"User_Id":"123"})}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>


    </>
}