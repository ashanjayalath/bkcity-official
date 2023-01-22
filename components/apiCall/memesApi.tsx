import React, {useEffect, useState} from "react";
import {MEMES} from "./allLinks";
import {Button, Image, Col, Row, List, Card} from "antd";
import Meta from "antd/es/card/Meta";
interface dataTypes{
    id:string,
    name:string,
    url:string,
    width:number,
    height:number,
    box_count:number,
    captions:number
}
export default function MemesApi(){
    const [data,setData]=useState<dataTypes[]>([])
    const [condition,setCondition]=useState(false)
    useEffect(()=>{
        fetch(MEMES.URL).then((response)=>{
            return response.json();
        }).then((data)=>{
            // setCondition(true)
            setData(data.data.memes)
            console.log(data.data.memes)
        })
    },[condition])


    const imagePre=()=>{

    }

    if(condition){
        return<>
            <List
                grid={{ gutter: 16}}
                dataSource={data}
                renderItem={item=>(
                        <Row >
                            <Col span={12}>

                                    <List>
                                        <Card cover={<img src={item.url} />} style={{borderRadius:20,width:300,height:"auto",boxShadow:"0 0 20 #000",margin:10}} hoverable={true} onClick={()=>{
                                            <Image.PreviewGroup>
                                                <Image
                                                    width={200}
                                                    src={item.url}
                                                />
                                            </Image.PreviewGroup>
                                        }
                                        }>
                                            <Meta title={item.name} description={item.id}/>
                                        </Card>
                                    </List>

                            </Col>
                        </Row>

                    )}
            />
        </>

    }else{
        return<>
            <Button onClick={()=>setCondition(true)}>Load Image</Button>
        </>

    }

}