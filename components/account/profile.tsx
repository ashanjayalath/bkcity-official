import {Avatar, Button, Col, Drawer, Image, message, Row, Switch, Upload} from "antd";
import {useState} from "react";
import {CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, UploadOutlined} from "@ant-design/icons";
import {Profile_Image} from '../../components/account/getUserData'
import {BASIC_DETAILS_POST_DATA as BDP, FILE_UPLOAD as FU} from '../apiCall/allLinks';



const profilePicLinkSubmit=async(getLink:string)=>{
    let options ={
        url:BDP.URL,
        method:BDP.METHOD,
        body:JSON.stringify({Image_Path:getLink})
    };
    fetch(options.url,options).then((response)=>{
        if (response.status === 200){
            message.success("Profile Picture Upload Successfully")
        }else if(response.status === 405){
            message.error("Profile Picture Upload UnSuccessfully")
        }else{
            message.warning("Profile Picture Added has Some Problem.")
        }
    })
}


export default function Profile(){
    const [imageUrl,setImageUrl]=useState<string>(Profile_Image)
    const imageView=(
        <Image src={imageUrl} preview/>
    );
    return<>
        <Row gutter={20}>
            <Col span={2}>
                {/*<Avatar className={"pro-user-avatar"} src={imageUrl} size={"large"}*/}
                {/*        onClick={()=>{*/}
                {/*            imageView*/}
                {/*        }*/}
                {/*        }*/}
                {/*/>*/}
                <Image src={imageUrl}/>
            </Col>
            <Col span={6}>
                <span className={"pro-name"}>
                    Ashan Jaylath
                </span>
                <br/>
                <span className={"pro-name-sub"}>
                     Ashan Jaylath
                </span>
            </Col>
            <Col span={6} offset={10}>
                {/*<span className={"pro-switch"}>Switch to visible</span>*/}
                {/*<Switch className={"pro-switch-btn"}size={"small"} title={"sss"}/>*/}

                <Upload
                    action="https://us-central1-ilttesting.cloudfunctions.net/ashan_file_upload"
                    listType="picture"
                    // listType="text"
                    accept={".png,.jpg,.jpeg,.svg"}
                    showUploadList={{showDownloadIcon:true}}
                    onChange={(e)=>{
                    setImageUrl(e.file.response);
                    // setImageLinks([...imageLinks,e.file.response]);
                    // console.log(imageLinks)
                }}
                    multiple={false}
                    >
                    <Button type={"primary"} className={"btnEdit"}
                        onClick={
                            ()=>{
                                profilePicLinkSubmit(imageUrl)
                            }
                        }
                    >
                        Upload Profile Picture
                    </Button>
                </Upload>
            </Col>
        </Row>
    </>
}