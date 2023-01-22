import {Card, Col, DatePicker, Radio, Form, Input, RadioChangeEvent, Row, Space, Checkbox, Button, Spin} from "antd";
import moment from "moment";
import {useRef, useState} from "react";
import {USER_SIGNUP as USRSIGNUP} from '../../components/apiCall/allLinks';
import signCSS from '../../styles/sign.module.css'
import {
    AmazonOutlined,
    CheckCircleFilled,
    CloseCircleFilled, ExclamationCircleFilled, LoadingOutlined,
    ManOutlined,
    PlayCircleFilled,
    WomanOutlined
} from "@ant-design/icons";
import Link from "next/link";
import Router from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {FCRUD} from '../../components/firebaseDatabaseConnector';
export default function Signup() {

    const [value, setValue] = useState("Male");
    const [agreement,setAgreement]=useState<boolean>(true)
    const [spinEnable,setSpinEnable]=useState<boolean>(false)
    const [antIconLoading,setAntIconLoading]=useState(<LoadingOutlined style={{ color:"blue" }} spin />)
    const [tipText,setTipText]=useState<string>("");
    const [tipTextColor,setTipTextColor]=useState<string>("rgba(0,0,0,0.58)");


    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };


    const register=async (getFormData:any)=>{
        const auth = FCRUD.auth
        let email = getFormData.Email
        let password = getFormData.Password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
                const user = userCredential.user;
                setTipTextColor("green")
                setAntIconLoading( <CheckCircleFilled style={{ color:"green",backgroundColor:"white" }}/>)
                setTipText("Registered ")
                setTimeout(()=> {
                    setTipText("")
                    setTipTextColor("rgba(0,0,0,0.58)")
                    setAntIconLoading(<LoadingOutlined style={{color: "blue"}} spin/>)
                    setSpinEnable(false)
                    //     next page eka load krnna
                    Router.push('/sign')
                },2000)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                setTipTextColor("red")
                setAntIconLoading( <CloseCircleFilled style={{ color:"red",backgroundColor:"white" }}/>)
                setTipText("Registered Failed.")
                setTimeout(()=>{
                    setTipText("")
                    setTipTextColor("rgba(0,0,0,0.58)")
                    setAntIconLoading(<LoadingOutlined style={{ color:"blue" }} spin />)
                    setSpinEnable(false)
                },3000)
            });

    }


    return<>
        <div className={"background-mod"}>
            <Row>
               <Col span={12} offset={6}>
                   <div className={"signupBox"}>
                       <Card hoverable={false} className={"signupCard"} style={{borderRadius:10}}>
                           <Spin spinning={spinEnable} indicator={antIconLoading} tip={tipText} style={{color:tipTextColor}}>

                               <Form onFinish={register}>
                                    <Row gutter={[20,5]}>
                                        <Col span={12} offset={0}>
                                            <Form.Item name={['userData','First_Name']}>
                                                <Input placeholder={"First name"} className={"fname"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item name={['userData','Last_Name']}>
                                                <Input placeholder={"Last name"} className={"lname"} allowClear/>
                                            </Form.Item>
                                        </Col>

                                        <Col span={12} offset={0}>
                                            <Form.Item name={['userData','Email']}>
                                                <Input placeholder={"Email"} className={"email"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item name={['userData','Contact_Number']}>
                                                <Input placeholder={"Phone"} className={"phone"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item name={['userData','Location']}>
                                                <Input placeholder={"Country"} className={"country"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Row gutter={7}>
                                                <Col>
                                                    <Form.Item name={['userData','Date_Of_Birth']}>
                                                        <DatePicker
                                                            format={'YYYY-MM-DD'}
                                                            className={"date-pick"}
                                                            placeholder={"Birth Day"}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name={['userData','Sex']}>
                                                        <Radio.Group onChange={onChange} value={value} >
                                                            <Space direction={"horizontal"} size={5}>
                                                                <Radio.Button value={"Male"} style={{borderRadius:5}} className={signCSS.roption}>
                                                                    <ManOutlined /><span style={{paddingLeft:6}}>M</span>
                                                                </Radio.Button>
                                                                <Radio.Button value={"Female"} style={{borderRadius:5}} className={signCSS.roption}>
                                                                    <WomanOutlined /><span style={{paddingLeft:6}}>F</span>
                                                                </Radio.Button>
                                                            </Space>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item name={['auth','Password']}>
                                                <Input.Password placeholder = {"Password"} className={"new-pass"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                            <Col span={12} offset={0}>
                                                <Form.Item>
                                                    <Input.Password placeholder = {"Confirm password"} className={"con-pass"} allowClear/>
                                                </Form.Item>
                                            </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item>
                                                <Checkbox onChange={(event)=>{
                                                    if(event.target.checked){
                                                        setAgreement(false)
                                                    }else{
                                                        setAgreement(true)
                                                    }
                                                }
                                                }>
                                                    I have read the <a href="">agreement</a>
                                                </Checkbox>
                                            </Form.Item>
                                        </Col>

                                        </Row>
                                    <Row gutter={[40,20]}>
                                        <Col span={12} >
                                            <Form.Item>
                                                <Button className={signCSS.regBtn} disabled={agreement} type={"primary"}
                                                    htmlType={"submit"}
                                                        onClick={()=>setSpinEnable(true)}
                                                >
                                                    Register
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={[40,20]}>
                                        <Col span={12} >
                                            <span>Already have an account? <Link href="/sign">Sign In</Link></span>
                                        </Col>
                                    </Row>
                                </Form>

                           </Spin>
                       </Card>
                   </div>
               </Col>
            </Row>
        </div>
    </>
}