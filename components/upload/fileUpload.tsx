import {Card, Col, Skeleton, Row,Button,Image } from "antd";
import upCSS from '../../styles/upload.module.css'
import React, { useState } from 'react';
import { UploadOutlined} from '@ant-design/icons';
import { Upload } from 'antd';

export default function FileUpload() {
    const [imageUrl,setImageUrl]=useState<string>('')

    return<>
        <div className={upCSS.backGround}>
            <Row>
                <Col span={12} offset={6}>
                    <Card className={upCSS.mainWindow}>
                        <Row>
                            <Col span={12}>
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
                            <Col span={12}>
                                <div className={upCSS.preview}>
                                    <Skeleton loading={imageUrl === ""} active >
                                        <Image alt={"Uploaded Image"} src={imageUrl} width={320} height={320}/>
                                    </Skeleton>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>

    </>
}