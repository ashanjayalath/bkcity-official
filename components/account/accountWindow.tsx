import {Button,Input, Card, Col, Image,Form, Rate, Row,message, Skeleton, Upload} from "antd";
import {
    CheckCircleFilled,
    CloseCircleFilled,
    ExclamationCircleFilled,
    LoadingOutlined,
    UploadOutlined
} from "@ant-design/icons";
import React, {useState} from "react";
const { TextArea } = Input;
import {FEEDBACK} from '../../components/apiCall/allLinks'
export default function AccountWindow(){
    const [docUrl,setDocUrl]=useState<string>('')



    return<>
        <div className={"basic-main-window"}>
            <span className={"basic-menu-view-title"}>Accounts & Review</span>
            <div  className={"basic-second-window"}>
                <Row gutter={10}>
                    <Col span={12}>
                        <div className={'pdfUploadWindow'}>
                        <Row gutter={25}>
                            <Col>
                                <Upload
                                    action="https://us-central1-ilttesting.cloudfunctions.net/ashan_file_upload"
                                    listType="picture"
                                    //listType="text"
                                    accept={".pdf"}
                                    //showUploadList={{showRemoveIcon:true}}
                                    onChange={(e)=>{
                                        setDocUrl(e.file.response);
                                        console.log(e)
                                    }}
                                    multiple={false}
                                >
                                    <Button className={'uploadbtn'} icon={<UploadOutlined />}>
                                        Add CV
                                    </Button>
                                </Upload>
                            </Col>
                            <Col>
                                <Button className={"deleteBtn"}>Delete CV</Button>
                            </Col>

                        </Row>
                        <Row>
                            <div className={'feedbackWindow'}>
                                <Form>
                                <Row>
                                    <Col>
                                        <Form.Item name={['Rating_Bar']}>
                                            <Rate allowHalf defaultValue={2.5} style={{color:"#0064e7",marginBottom:20}} />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                </Form>
                            </div>
                        </Row>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className={'preview'}>
                            <Skeleton loading={docUrl===""? true:false} active >
                                {/*<Image src={docUrl} width={320} height={320}/>*/}
                            </Skeleton>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    </>
}