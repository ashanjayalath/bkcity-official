import {Row, Col, Input, Switch, Button, Space, Form, message, Card, Spin} from "antd";
import Link from "next/link";
import {USER_SIGNIN as USIGN} from "../../components/apiCall/allLinks";
import {CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, LoadingOutlined} from "@ant-design/icons";
import {useState} from "react";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    getRedirectResult,
    FacebookAuthProvider,
    sendPasswordResetEmail
} from "firebase/auth";
import Router from 'next/router';
import {FCRUD} from '../../components/firebaseDatabaseConnector';

export default function Sign() {

    const [spinEnable,setSpinEnable]=useState<boolean>(false)
    const [antIconLoading,setAntIconLoading]=useState(<LoadingOutlined style={{ color:"blue" }} spin />)
    const [tipText,setTipText]=useState<string>("");
    const [tipTextColor,setTipTextColor]=useState<string>("rgba(0,0,0,0.58)");

    const signinGoogle=()=>{
        const auth = FCRUD.auth
        const provider= new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // @ts-ignore
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                if(user.emailVerified){
                    Router.push('/home')
                }else{
                    message.warning("This Email Not Valid.")
                }
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const signinFacebook=()=>{
        const provider = new FacebookAuthProvider();
        const auth = FCRUD.auth
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                // const accessToken = credential.accessToken;
                console.log(credential)
                const c=provider.addScope('user_birthday');
                console.log(c)
                console.log(user)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });
    }


    const signin=async (getFormData:any)=>{
        const auth = FCRUD.auth;
        let email = getFormData.Email
        let password = getFormData.Password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // const user = userCredential.user;
                setTimeout(()=>{
                    setSpinEnable(false)
                    setTipText("")
                    setTipTextColor("rgba(0,0,0,0.58)")
                    setAntIconLoading(<LoadingOutlined style={{ color:"blue" }} spin />)
                    //next page eka load krnna
                    Router.push('/home')
                },2000)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setTipTextColor("red")
                setAntIconLoading( <CloseCircleFilled style={{ color:"red",backgroundColor:"white" }}/>)
                setTipText("SignIn Failed.")
                setTimeout(()=>{
                    setTipText("")
                    setTipTextColor("rgba(0,0,0,0.58)")
                    setAntIconLoading(<LoadingOutlined style={{ color:"blue" }} spin />)
                    setSpinEnable(false)
                },3000)
                message.warning(errorMessage)
            });
    }


    return<>
        <Row>
            <Col span={14} offset={5}>
                <Card className={"sign-main-card"} style={{marginTop:50,borderRadius:10}} hoverable={false}>
                   <Row>
                       <Col span={14}>
                           <div className={"sign"}>
                               <img src={"/assets/login.svg"} width={"auto"} height={"auto"}/>
                           </div>
                       </Col>
                       <Col span={10}>
                           <div className={"formWindow"}>
                               <Col>
                                   <div className={"sign-space"}>
                                       <h4 className={"sign-text"}>Sign In</h4>
                                       <p className={"sign-p"}>Enter your email and password to sign in</p>
                                   </div>
                                   <div>
                                       {/*<Space direction={"vertical"} size={10} wrap={false}>*/}
                                       <Spin spinning={spinEnable} indicator={antIconLoading} tip={tipText} style={{color:tipTextColor}}>

                                           <Form onFinish={signin} >
                                               <Form.Item name={['Email']} rules={[{ required: true,min:4, message: 'Please enter your email!' }]}>
                                                   <Input className={"emailBox"} placeholder={"Email"} value={"shanjayalath225@gmail.com"} allowClear/>
                                               </Form.Item>
                                               <Form.Item name={['Password']} rules={[{ required: true,min:4, message: 'Please enter your password!' }]}>
                                                   <Input.Password placeholder = {"Password"} className={"passBox"} allowClear/>

                                               </Form.Item>
                                               {/*<Space direction={"horizontal"} size={10}>*/}
                                               <Form.Item name="remember" className="aligin-center" valuePropName="checked">
                                                   <Switch defaultChecked size={"small"}/>
                                                   <span style={{paddingLeft:10}}>Remember me</span>
                                                   <Link href="../forget_Password" className="text-dark font-bold">
                                                       <span style={{paddingLeft:54}}>Forget password ?</span>
                                                   </Link>
                                                 </Form.Item>

                                               {/*</Space>*/}

                                               <Form.Item>
                                                   <Button
                                                       type="primary"
                                                       htmlType="submit"
                                                       style={{ width: "100%" ,backgroundColor:"#4826f6",border:"none",borderRadius:5}}
                                                       onClick={()=>setSpinEnable(true)}
                                                   >
                                                       SIGN IN
                                                   </Button>
                                               </Form.Item>
                                           </Form>
                                       </Spin>
                                           <div className={"sign-options"}>
                                               <Row gutter={4}>
                                                   <Col span={12}>
                                                       <Button className={"sign-op-btn"} style={{borderRadius:5,boxShadow:"0 0 #fff",width:"100%"}} onClick={signinGoogle} >
                                                           <img src="https://img.icons8.com/fluency/48/null/google-logo.png" style={{width:20,height:"auto"}}/>
                                                           <span style={{paddingLeft:10}}>Google</span>
                                                       </Button>
                                                   </Col>
                                                   <Col span={12}>
                                                       <Button className={"sign-op-btn"} style={{borderRadius:5,boxShadow:"0 0 #fff",width:"100%"}} onClick={signinFacebook}>
                                                           <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" style={{width:20,height:"auto"}}/>
                                                           <span style={{paddingLeft:10}}>Facebook</span>
                                                       </Button>
                                                   </Col>
                                               </Row>
                                           </div>

                                           <p className="sign-up-text" style={{fontSize:12}} >
                                               Don't have an account?{" "}

                                               <Link href="../signup" className="text-dark font-bold">
                                                   Sign Up
                                               </Link>
                                           </p>
                                   </div>
                               </Col>
                           </div>
                       </Col>
                   </Row>
                </Card>
            </Col>
        </Row>

    </>
}