import {Col, message, Row, Spin} from "antd";
import {onAuthStateChanged } from "firebase/auth";
import Router from "next/router";
import {FCRUD} from '../components/firebase/firebaseDatabaseConnector'

export default function Home() {

    const auth = FCRUD.auth
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            Router.push('/home')
            // return<>
            //     <HomeMain/>
            // </>

        } else {
            // User is signed out
            Router.push('/sign')
        }
    });
    // return<>
    //     <Row>
    //         <Col span={4} offset={10} style={{textAlign:"center",marginTop:200}}>
    //             <Spin spinning/>
    //         </Col>
    //     </Row>
    // </>
}