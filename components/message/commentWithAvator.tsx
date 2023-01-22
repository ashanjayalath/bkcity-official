import MenuCSS from '../../components/message/message.module.css'
import {Avatar, Col, Row} from "antd";
import {AiTwotoneDislike, AiTwotoneLike, RiMessage3Fill, SlDislike, SlLike} from "react-icons/all";
import {useState} from "react";


export default function CommentWithAvator(props:any){
    const [like,setLike]=useState<number>(100);
    const [likeColor,setLikeColor]=useState<string>("#000")
    const [likeClicked,setLikeClicked]=useState<boolean>(false)
    const [readMoreText,setReadMoreText]=useState<string>("Read More")
    const [messageBoxColor,setMessageBoxColor]=useState<string>("#fff")
    const [messageBoxColorSecond,setMessageBoxColorSecond]=useState<string>("#fff")
    const[sender,setSeder]=useState<boolean>(true)

    // if(props.user){
    //     setMessageBoxColor("#009a67")
    //     setMessageBoxColorSecond("fff")
    // }else{
    //     setMessageBoxColor("#fff")
    //     setMessageBoxColorSecond("#000")
    // }

    return<>
        <div className={MenuCSS.message} >
            <Row justify={"end"}>
                <Col span={2}>
                    <Avatar src={'logo.png'}/>
                </Col>
                <Col span={22}>
                    <Row>
                        <Col>
                            <h4 style={{fontWeight:"bold"}}>Ashan Jayalath</h4>
                        </Col>
                        <Col>
                            <h5 style={{marginTop:3,marginLeft:10}}>10.05 A.M</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <span style={{fontSize:13}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Dolor dolorum est fugiat quas qui quibusdam voluptatibus
                                    voluptatum? Architecto deserunt expedita ipsum iure nobis
                                    non officiis perspiciatis praesentium, reiciendis ullam
                                    voluptatem.{props.msg}
                                </span>
                            </Row>
                            <Row>
                                <span style={{fontSize:13,fontWeight:"bold",cursor:"pointer",marginTop:1,marginBottom:7}}
                                      onClick={()=>setReadMoreText("Read Less")}>
                                    {readMoreText}
                                </span>
                            </Row>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={5}>
                            <div className={MenuCSS.likeBtnWindow}>
                                <Row>
                                    <Col span={1}>
                                        <SlLike style={{color:likeColor,marginTop:4}} className={MenuCSS.likeUnlikeIcon} onClick={()=>{
                                            setLike(like+1);
                                            setLikeColor("#8f7cec")
                                        }}/>
                                    </Col>
                                    <Col span={1} offset={6}>
                                          <span style={{fontSize:13,fontWeight:"bold"}}>
                                                {like}
                                          </span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={1}>
                            <SlDislike className={MenuCSS.likeUnlikeIcon}/>
                        </Col>
                        <Col span={1} offset={1}>
                            <RiMessage3Fill style={{fontSize:18}} className={MenuCSS.likeUnlikeIcon}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </>
}