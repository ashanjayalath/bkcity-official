import React, {useEffect, useState} from "react";
import {MEMES} from "./allLinks";
import {Button, Image, Col, Row, List, Card, message} from "antd";
interface dataTypes{
    id:string,
    name:string,
    url:string,
    width:number,
    height:number,
    box_count:number,
    captions:number
}
export default function MemesApi(props:any){
    const [data,setData]=useState<dataTypes[]>([])

    useEffect(()=>{
        fetch(MEMES.URL).then((response)=>{
            return response.json();
        }).then((data)=>{
            // setCondition(true)
            setData(data.data.memes)
            console.log(data.data.memes)
        })
    },[])

        return<>
            <List
                grid={{ gutter: 16}}
                dataSource={data}
                renderItem={item=>(
                        <Row >
                            <Col span={12}>
                                    <List>

                                        <Card
                                            cover={<Image alt={"Image"} src={item.url} height={250}/>}
                                              style={{
                                                  borderRadius:20,
                                                  width:250,
                                                  height:400,
                                                  boxShadow:"0 0 20 #000",
                                                  margin:10}}
                                            hoverable
                                              onClick={()=>{
                                                <Image.PreviewGroup>
                                                    <Image
                                                        alt={"Image"}
                                                        width={200}
                                                        src={item.url}
                                                    />
                                                </Image.PreviewGroup>
                                                }
                                        }>

                                        <div style={{marginTop:5}}>
                                            <Row gutter={4}>
                                                <Col>
                                                    <h2>Rs</h2>
                                                </Col>
                                                <Col>
                                                    <h2>{item.width}</h2>
                                                </Col>
                                            </Row>
                                        </div>


                                        <Row gutter={20}>
                                            <Col>
                                                <Button type={"primary"}
                                                        style={{borderRadius:5,backgroundColor:"yellow",color:"black"}}
                                                        onClick={()=> {message.success("Item "+item.name+" Added Successful")}}
                                                >Add Cart</Button>
                                            </Col>
                                            <Col>
                                                <Button type={"primary"}
                                                        style={{borderRadius:5,backgroundColor:"black",color:"yellow"}}
                                                        onClick={()=> message.success("Item Id "+item.id+" Buy Now")}
                                                >Buy Now</Button>
                                            </Col>
                                        </Row>

                                        </Card>
                                    </List>

                            </Col>
                        </Row>

                    )}
            />
        </>

}