import {Card, Col, Divider,Skeleton, Row,Button,Image, Progress } from "antd";
import upCSS from '../../styles/upload.module.css'
import React, { useState } from 'react';
import type { RcFile } from 'antd/es/upload';
import {DotChartOutlined, UploadOutlined} from '@ant-design/icons';
import { Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';

export default function FileUpload() {
    const [percent,setPercent]=useState<any>(50)
    const [imageUrl,setImageUrl]=useState<string>('')
    const [imageLinks,setImageLinks]=useState<any>([])
    const [visible, setVisible] = useState(false);

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
                                    <Skeleton loading={imageUrl===""? true:false} active >
                                        <Image src={imageUrl} width={320} height={320}/>
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