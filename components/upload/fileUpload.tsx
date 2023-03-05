import {Card, Col, Skeleton, Row,Button,Image } from "antd";
import upCSS from '../../styles/upload.module.css'
import React, { useState } from 'react';
import { UploadOutlined} from '@ant-design/icons';
import { Upload } from 'antd';

export default function FileUpload() {
    const [imageUrl,setImageUrl]=useState<string>('')

    return<>
            <Row>
                <Col span={20} offset={2}>
                    <Card className={upCSS.mainWindow}>
                        <Row gutter={[10,{xs:10,sm:10,md:10,lg:10}]} justify={"start"}>
                            <Col offset={1} flex={"300px"}>
                                <div className={upCSS.scrollSet}>
                                    <Upload
                                        action="https://us-central1-ilttesting.cloudfunctions.net/ashan_file_upload"
                                        listType="picture"
                                        // listType="text"
                                        // accept={".png,.jpg,.jpeg,.svg"}
                                        showUploadList={{showDownloadIcon:true}}
                                        onChange={(e)=>{
                                            setImageUrl(e.file.response);
                                        }}
                                        multiple={false}
                                    >
                                        <Button  icon={<UploadOutlined />}>
                                            Upload
                                        </Button>
                                    </Upload>
                                </div>
                            </Col>
                            <Col offset={1} flex={"320px"}>
                                <div className={upCSS.preview}>
                                    <Skeleton loading={imageUrl === ""} active >
                                        <Image alt={"Uploaded Image"} src={imageUrl} width={320} height={320}/>
                                    </Skeleton>
                                </div>
                            </Col>
                            <Col offset={1} flex={"120px"}>
                                <h3>Photo Details </h3>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

    </>
}