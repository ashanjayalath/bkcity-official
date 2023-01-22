import CardDesign from "./cardDesign";
import {ImClubs, ImDiamonds, ImHeart, ImSpades} from "react-icons/all";
import {Button, Card, Col, Form, Input, List, message, Modal, Row} from "antd";
import {useEffect, useState} from "react";
import {ExclamationCircleFilled} from "@ant-design/icons";
import solidCSS from '../../components/game/solid.module.css'
import Icon from "antd/es/icon";
const { confirm } = Modal;

export default function Solid(){

    const showConfirm = (getIndex:string,getSource:any) => {
        confirm({
            title: 'Do you Want to delete these items ?',
            icon: <ExclamationCircleFilled />,
            content: 'Kalabara '+getIndex,
            onOk() {
                let s=getSource.indexOf(getIndex)
                getSource.splice(s,s+1)
                s=0;
                setControllUse(controllUse+1)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const dataNumberSet=['2','3','4','5','6','7','8','9',10,'A','a','J','j','q','Q','k','K']
    const Capitalized=['A','a','J','j','q','Q','k','K']

    const [BKalabara,setBKalabara]=useState<string[]>([])
    const [BScoppa,setBScoppa]=useState<string[]>([])
    const [RHaratha,setRHaratha]=useState<string[]>([])
    const [RDiamon,setRDiamon]=useState<string[]>([])
    const [controllUse,setControllUse]=useState(1)

    const Kalabara=(e:any)=>{
        let inputData=e.target.value
        if(dataNumberSet.includes(inputData)){
            if(BKalabara.includes(inputData)){
                message.warning("Already has that number")
            }else{
                if(Capitalized.includes(inputData)){
                    inputData=inputData.toUpperCase()
                }
                setBKalabara([...BKalabara,inputData])
                message.success("Number Added Successfull ")
            }
        }else{
            message.warning("You can't Add this")
        }
    }
    const scoppa=(e:any)=>{
        let inputData=e.target.value
        if(dataNumberSet.includes(inputData)){
            if(BScoppa.includes(inputData)){
                message.warning("Already has that number")
            }else{
                if(Capitalized.includes(inputData)){
                    inputData=inputData.toUpperCase()
                }
                setBScoppa([...BScoppa,inputData])
                message.success("Number Added Successfull ")
            }
        }else{
            message.warning("You can't Add this")
        }
    }
    const heart=(e:any)=>{
        let inputData=e.target.value
        if(dataNumberSet.includes(inputData)){
            if(RHaratha.includes(inputData)){
                message.warning("Already has that number")
            }else{
                if(Capitalized.includes(inputData)){
                    inputData=inputData.toUpperCase()
                }
                setRHaratha([...RHaratha,inputData])
                message.success("Number Added Successfull ")
            }
        }else{
            message.warning("You can't Add this")
        }
    }
    const diamond=(e:any)=>{
        let inputData=e.target.value
        if(dataNumberSet.includes(inputData)){
            if(RDiamon.includes(inputData)){
                message.warning("Already has that number")
            }else{
                if(Capitalized.includes(inputData)){
                    inputData=inputData.toUpperCase()
                }
                setRDiamon([...RDiamon,inputData])
                message.success("Number Added Successfull ")
            }
        }else{
            message.warning("You can't Add this")
        }
    }

    useEffect(()=>{

    },[controllUse])

    return<>
        <Row>
            <Col>
                <Row gutter={20}>
                        <Col span={3}>
                            <Row>
                                <Col span={8}>
                                    <ImClubs color={"black"} style={{fontSize:30}}/>
                                </Col>
                                <Col span={16}>
                                    <Input maxLength={2} className={"input-box"} allowClear onChange={
                                        (e)=>
                                        {
                                            Kalabara(e);
                                            console.log(BKalabara);
                                        }
                                    }/>
                                </Col>
                            </Row>


                        </Col>
                        <Col span={3}>
                            <Row>
                                <Col span={8}>
                                    <ImSpades color={"black"} style={{fontSize:30}}/>
                                </Col>
                                <Col span={16}>
                                    <Input maxLength={2} className={"input-box"} allowClear onChange={
                                        (e)=>
                                        {
                                            scoppa(e);
                                            console.log(BScoppa);
                                        }
                                    }/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={3}>
                            <Row>
                                <Col span={8}>
                                    <ImDiamonds color={"red"} style={{fontSize:30}}/>
                                </Col>
                                <Col span={16}>
                                    <Input maxLength={2} className={"input-box"} allowClear onChange={(e)=>
                                    {
                                        diamond(e)
                                        console.log(RDiamon)
                                    }}/>
                                </Col>
                            </Row>


                        </Col>
                        <Col span={3}>
                            <Row>
                                <Col span={8}>
                                    <ImHeart color={"red"} style={{fontSize:30}}/>
                                </Col>
                                <Col span={16}>
                                    <Input maxLength={2} className={"input-box"} allowClear onChange={(e)=>
                                    {
                                        heart(e)
                                        console.log(RHaratha)
                                    }}/>
                                </Col>
                            </Row>


                        </Col>
                        <Col span={3} offset={1}>
                            <Button  type={"primary"} onClick={()=>{
                                // createCard;
                                console.log("Kalabara__________________")
                                BKalabara.forEach((valuse)=>console.log(valuse))
                                console.log('Scoppa____________________')
                                BScoppa.forEach((valuse)=>console.log(valuse))
                                console.log("Haratha___________________")
                                RHaratha.forEach((valuse)=>console.log(valuse))
                                console.log("Diamond___________________")
                                RDiamon.forEach((valuse)=>console.log(valuse))
                            }
                            }>Convert</Button>
                        </Col>
                        <Col span={3} offset={1}>
                            <Button type={"primary"} onClick={()=>{
                                let a=BKalabara.length
                                BKalabara.splice(0,a)
                                a=0;
                                let b=BScoppa.length
                                BScoppa.splice(0,b)
                                b=0;
                                let c=RHaratha.length
                                RHaratha.splice(0,c)
                                c=0;
                                let d=RDiamon.length
                                RDiamon.splice(0,d)
                                d=0;
                            }
                            }>Delete All Data</Button>
                        </Col>
                        <Col span={3} offset={1}>
                            <Button type={"primary"} onClick={()=>{
                                BKalabara.sort()
                                BScoppa.sort()
                                RHaratha.sort()
                                RDiamon.slice()
                                setControllUse(controllUse+1)
                            }
                            }>Data Sort All</Button>
                        </Col>
                </Row>
            </Col>
        </Row>
<Row>
    <Col span={4} offset={10}>
        <h1 style={{marginTop:20}}>Card Pack</h1>
    </Col>
</Row>
        <Row>
            <Col span={6}>
                <Row>
                    <Row>
                        <Col span={8}>
                            <Button type={"primary"} onClick={()=>{
                                BKalabara.sort()
                                setControllUse(controllUse+1)
                            }
                            }>Data Sort</Button>
                        </Col>
                        <Col span={8} offset={8}>
                            <Button type={"primary"} onClick={()=>{
                                let a=BKalabara.length
                                BKalabara.splice(0,a)
                                a=0;setControllUse(controllUse+1)
                            }
                            }>Data Delete</Button>
                        </Col>
                        </Row>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <h1>Kalabara</h1>
                    </Col>
                </Row>
                <Row>
                    <div className={solidCSS.dataList}>
                        <List
                            grid={{ gutter:0}}
                            dataSource={BKalabara}
                            renderItem={(items:any)=>(
                                <Row>
                                    <List>

                                        <div style={{cursor:"pointer"}} onClick={()=>showConfirm(items,BKalabara)}>
                                            <CardDesign number={items} getColor={"black"} icon={<ImClubs color={"black"} style={{fontSize:30}}/>}/>
                                        </div>

                                    </List>

                                </Row>
                            )}
                        />
                    </div>
                </Row>

            </Col>
            <Col span={6}>
                <Row>
                    <Row>
                        <Col span={8}>
                            <Button type={"primary"} onClick={()=>{
                                BScoppa.sort()
                                setControllUse(controllUse+1)
                            }
                            }>Data Sort</Button>
                        </Col>
                        <Col span={8} offset={8}>
                            <Button type={"primary"} onClick={()=>{
                                let b=BScoppa.length
                                BScoppa.splice(0,b)
                                b=0;setControllUse(controllUse+1)
                            }
                            }>Data Delete</Button>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <h1>Scoppa</h1>
                    </Col>
                </Row>
                <Row>
                    <div className={solidCSS.dataList}>
                        <List
                            grid={{ gutter:0}}
                            dataSource={BScoppa}
                            renderItem={(items:any)=>(
                                <Row>
                                    <Col>
                                        <List>
                                            <div style={{cursor:"pointer"}} onClick={()=>showConfirm(items,BScoppa)}>
                                                <CardDesign number={items} getColor={"black"} icon={<ImSpades color={"black"} style={{fontSize:30}}/>}/>
                                            </div>
                                        </List>
                                    </Col>
                                </Row>
                            )}
                        />
                    </div>
                </Row>

            </Col>
            <Col span={6}>
                <Row>
                    <Row>
                        <Col span={8}>
                            <Button type={"primary"} onClick={()=>{
                                RDiamon.sort()
                                setControllUse(controllUse+1)
                            }
                            }>Data Sort</Button>
                        </Col>
                        <Col span={8} offset={8}>
                            <Button type={"primary"} onClick={()=>{
                                let d=RDiamon.length
                                RDiamon.splice(0,d)
                                d=0;setControllUse(controllUse+1)
                            }
                            }>Data Delete</Button>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <h1>Diamond</h1>
                    </Col>
                </Row>
                <Row>
                    <div className={solidCSS.dataList}>
                        <List
                            grid={{ gutter:0}}
                            dataSource={RDiamon}
                            renderItem={(items:any)=>(
                                <Row>
                                    <Col>
                                        <List>
                                            <div style={{cursor:"pointer"}} onClick={()=>showConfirm(items,BScoppa)}>
                                                <CardDesign number={items} getColor={"red"} icon={<ImDiamonds color={"red"} style={{fontSize:30}}/>}/>
                                            </div>
                                        </List>
                                    </Col>
                                </Row>
                            )}
                        />
                    </div>
                </Row>
            </Col>
            <Col span={6}>
                <Row>
                    <Row>
                        <Col span={8}>
                            <Button type={"primary"} onClick={()=>{
                                RHaratha.sort()
                                setControllUse(controllUse+1)
                            }
                            }>Data Sort</Button>
                        </Col>
                        <Col span={8} offset={8}>
                            <Button type={"primary"} onClick={()=>{
                                let c=RHaratha.length
                                RHaratha.splice(0,c)
                                c=0;setControllUse(controllUse+1)
                            }
                            }>Data Delete</Button>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <h1>Heart</h1>
                    </Col>
                </Row>
                <Row>
                    <div className={solidCSS.dataList}>
                        <List
                            grid={{ gutter:0}}
                            dataSource={RHaratha}
                            renderItem={(items:any)=>(
                                <Row>
                                    <Col>
                                        <List>
                                            <div style={{cursor:"pointer"}} onClick={()=>showConfirm(items,BScoppa)}>
                                                <CardDesign number={items} getColor={"red"} icon={<ImHeart color={"red"} style={{fontSize:30}}/>}/>
                                            </div>
                                        </List>
                                    </Col>
                                </Row>
                            )}
                        />
                    </div>
                </Row>

            </Col>
        </Row>
    </>
}