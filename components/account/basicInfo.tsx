import {Button, Col, DatePicker, Form, Input, message, Row, Select, Spin} from "antd";
import {useState} from "react";
import {CRUD} from '../apiCall/allLinks';
import {CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, LoadingOutlined} from "@ant-design/icons";

const { Option } = Select;
export default function BasicInfo(){
    const [emailStatus,setEmailStatus]=useState<any>();
    const [emailCheckStatus,setEmailCheckStatus]=useState<any>()
    const [spinEnable,setSpinEnable]=useState<boolean>(false)
    const [antIconLoading,setAntIconLoading]=useState(<LoadingOutlined style={{ color:"blue" }} spin />)
    const [tipText,setTipText]=useState<string>("");
    const [tipTextColor,setTipTextColor]=useState<string>("rgba(0,0,0,0.58)");

    // <CheckCircleFilled />
    const [personalInfo,setPesonalInfo]=useState(
            {
                fname:"Ashan",
                lname:"Jayalath",
                sex:"Male",
                dob:"1996-02-25",
                contactNumber:"0761234567",
                email:"shanjayalath225@gmail.com",
                location:"Sri Lanka",
                countryCode:"+94",
                position:"Fullstack Developer"
            }
    )
    const prefixSelector = (
        <Form.Item name={['Country_Code']} noStyle>
            <Select style={{ width: 70 }} placeholder={personalInfo.countryCode} >
                <Option value="+94">+94</Option>
                <Option value="+99">+99</Option>
            </Select>
        </Form.Item>
    );

    const getSubmitData=async ()=>{
        let options ={
            url:CRUD.URL,
            method:CRUD.METHOD.G,
        };
        fetch(options.url).then((response)=>{
            if (response.status === 200){
                message.success("Data Loaded Successfully. ")
            }else if(response.status === 405){
                message.error("Data Loaded Incomplete. ")
            }else{
                message.warning("Data Loaded has Some Problem.")
            }
            return response.json()
        }).then((data)=>{
            setPesonalInfo({
                fname:data.First_Name,
                lname:data.Last_Name,
                sex:data.Sex,
                dob:data.Date_Of_Birth,
                contactNumber:data.Contact_Number,
                email:data.Email,
                location:data.Location,
                countryCode:data.Country_Code,
                position:data.Position
            })
            console.log(data)
        })
    }
    const deleteData=async ()=>{
        let options ={
            url:CRUD.URL,
            method:CRUD.METHOD.D,
            body:JSON.stringify({Email:'shanjayalath225@gmail.com'})
        };
        fetch(options.url,options).then((response)=>{
            if (response.status === 200){
                message.success("Data Delete Successfully. ")
            }else if(response.status === 405){
                message.error("Data Delete Incomplete. ")
            }else{
                message.warning("Data Delete has Some Problem.")
            }
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
    }

    const currentUser=()=>{
        let options={
            url:'https://us-central1-ilttesting.cloudfunctions.net/ashan_current_user',
            method:'GET'
        }
        fetch(options.url,options).then((response)=>{
            // console.log(response)
            if (response.status === 200){
                message.success("User signin ")
            }else if(response.status === 405){
                message.error("user signout ")
            }else{
                message.warning("Data Added has Some Problem.")
            }
            return response.json()
        }).then((data)=>{
            console.log("xxxxxxxxxxxxxxx")
            console.log(data)
        })

    }

    const submitData=async(form_data:any)=>{
            let options ={
                url:CRUD.URL,
                method:CRUD.METHOD.PU,
                body:JSON.stringify(form_data)
            };
            fetch(options.url,options).then((data)=>{
                if (data.status === 200){
                    setTipTextColor("green")
                    setAntIconLoading( <CheckCircleFilled style={{ color:"green",backgroundColor:"white" }}/>)
                    setTipText("Data Added Successfully. ")
                    setTimeout(()=>{
                        setSpinEnable(false)
                    },2000)
                }else if(data.status === 405){
                    setTipTextColor("red")
                    setAntIconLoading( <CloseCircleFilled style={{ color:"red",backgroundColor:"white" }}/>)
                    setTipText("Data Added Incomplete.")
                    setTimeout(()=>{
                        setSpinEnable(false)
                    },3000)
                }else{
                    setTipTextColor("rgba(0,0,0,0.58)")
                    setAntIconLoading(<ExclamationCircleFilled style={{ color:"Yellow",backgroundColor:"white" }}/>)
                    setTipText("Data Added has Some Problem.")
                    setTimeout(()=>{
                        setSpinEnable(false)
                    },3000)
                }
            })

    }

    return<>
        <div className={"basic-main-window"}>
            <span className={"basic-menu-view-title"}>Basic Info</span>
                <div  className={"basic-second-window"}>
                <Spin spinning={spinEnable} indicator={antIconLoading} tip={tipText} style={{color:tipTextColor}}>
                    <Form onFinish={submitData}>
                        <Row gutter={20}>
                           <Col span={12}>
                               <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>First Name</label>
                               <Form.Item  name={['First_Name']}>
                                   <Input  className={"input-box"} placeholder={personalInfo.fname}  allowClear/>
                               </Form.Item>
                           </Col>
                            <Col span={12}>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"} >Last Name</label>
                                <Form.Item name={['Last_Name']}>
                                    <Input className={"input-box"} placeholder={personalInfo.lname} allowClear/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={6}>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>I'm</label>
                                <Form.Item name={['Sex']}>
                                    <Select placeholder={personalInfo.sex} allowClear>
                                        <Option value="Male">Male</Option>
                                        <Option value="Female">Female</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>Date of Birth</label>
                                <Form.Item name={['Date_Of_Birth']}>
                                    <DatePicker className={"input-box"} style={{width:"100%"}} placeholder={personalInfo.dob} format={'YYYY-MM-DD'} allowClear
                                                onSelect={
                                        (e)=>{
                                            console.log(e.format('YYYY-MM-DD'));
                                            // e.target.value=e.format('YYYY-MM-DD');
                                        }}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>Contact Number</label>
                                <Form.Item  name={['Contact_Number']} rules={[{ required: true, message: 'Please input your phone number!' }]}>
                                    <Input className={"input-box"} addonBefore={prefixSelector} style={{width:"100%"}} placeholder={personalInfo.contactNumber} allowClear/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={12}>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>Email Address</label>
                                <Form.Item hasFeedback validateStatus={emailStatus}>
                                    <Input className={"input-box"} placeholder={personalInfo.email} id={"email"} allowClear />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>Confirm Email</label>
                                <Form.Item  name={['Email']} hasFeedback validateStatus={emailCheckStatus}>
                                    <Input className={"input-box"} placeholder={personalInfo.email} id={"confEmail"} allowClear/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={12}>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>Location</label>
                                <Form.Item name={['Location']}>
                                    <Input className={"input-box"} placeholder={personalInfo.location} id={"location"} allowClear />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <label style={{fontSize:12,fontWeight:"bold"}} className={"label"}>Job Position</label>
                                <Form.Item name={['Position']}>
                                    <Input className={"input-box"} placeholder={personalInfo.position} id={"position"} allowClear/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={6} offset={12}>
                                <Form.Item>
                                    <Button className={"btnClearAll"} onClick={currentUser} >
                                        Clear All
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item>
                                    <Button className={"btnSubmit"} htmlType='submit' onClick={()=>setSpinEnable(true)} >
                                        Save Data
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Spin>
            </div>
        </div>
    </>
}