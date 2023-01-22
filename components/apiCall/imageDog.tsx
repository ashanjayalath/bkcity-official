import React, {useEffect, useState} from "react";
import {IMAGE} from "./allLinks";
import {Button, Card, Col, Row, Spin, Table} from "antd";
import Meta from "antd/es/card/Meta";

export default function AnimalApi() {
    const [storeData,setStoreData]=useState<string>()
    const [condition,setCondition]=useState(false)
    const [refresh,setRefresh]=useState(new Date())
    useEffect(()=>{
        fetch(IMAGE.URL).then((response)=>{
            return response.json();
        }).then((data)=>{
            setCondition(true)
            setStoreData(data.message)
        })
    },[refresh])


    if(condition){

        return<>
            <Button onClick={()=>setRefresh(new Date())}>Load Image</Button>
            <Row gutter={[16,16]}>
                <Col span={6}>
                    <img src={storeData} style={{width:200,height:150}}/>

                </Col>
                <Col span={6}>
                    <Card cover={<img src={storeData} />} style={{borderRadius:20,width:200,height:200,boxShadow:"0 0 20 #000"}} hoverable={true}>
                        <Meta title="Beauty ful" />
                    </Card>
                </Col>
            </Row>
        </>
    }else{
        return <>
        </>
    }
}