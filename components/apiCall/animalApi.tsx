import React, {useEffect, useState} from "react";
import {ANIMALS} from "./allLinks";
import {Button, Spin, Table} from "antd";
interface dataTypes{
    API:string;
    Description:string;
    Auth:string;
    HTTPS:boolean;
    Cors:string;
    Link:string;
    key:number
}
const col=[
    {title:"API", dataIndex:"API", key:"API"},
    {title:"HTTPS", dataIndex:"HTTPS",key:"HTTPS"},
    {title:"Cors", dataIndex:"Cors",key:"Cors"},
    {title:"Link", dataIndex:"Link",key:"Link"},
    {title:"Auth", dataIndex:"Auth",key:"Auth"},
    {title:"Description", dataIndex:"Description",key:"Description"}
]

export default function AnimalApi() {
    const [storeData,setStoreData]=useState<dataTypes[]>([])
    const [condition,setCondition]=useState(false)
    const callDat=()=>{
        fetch(ANIMALS.URL).then((response)=>{
            return response.json();
        }).then((data)=>{
            setCondition(true)
            console.log(data.entries)
            setStoreData(data.entries)
            console.log(storeData)
        })
    }

    if(condition){
        return<>

            <Table dataSource={storeData} columns={col} style={{width:"auto",margin:50}} bordered={true} size={"small"} pagination={{pageSize:5}}/>
        </>
    }else{
        return <>
            <Button onClick={callDat}>Load data</Button>
            <Spin/>
        </>
    }
}