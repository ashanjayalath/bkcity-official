import {Col, message, Row, Spin} from "antd";
import {onAuthStateChanged } from "firebase/auth";
import Router from "next/router";
import {FCRUD} from '../components/firebase/firebaseDatabaseConnector'
import BoxCircle from "../components/animations/boxCircle";
import {useEffect} from "react";
import {useSelector , useDispatch} from "react-redux";
import HomeMain from "./home";
export default function Home() {

    const firebaseSign=useSelector((state:any)=>state.firebaseSignState);
    const dispatch=useDispatch();

    const auth = FCRUD.auth
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
        if (firebaseSign) {
            // User is signed in
            dispatch({type:"FIREBASE_AUTH",value:true})
            Router.push('/home')
        } else {
            dispatch({type:"FIREBASE_AUTH",value:false})
            Router.push('/sign')
            // User is signed out
        }
    });

    return<>
        <Row justify={"center"}>
            <Col flex={"40px"} style={{
                paddingTop:'20%',
                alignItems:"center",
                display:"flex",
                alignContent:"center",
                justifyContent:"center"
            }}>
                <BoxCircle/>
            </Col>
        </Row>
    </>
}