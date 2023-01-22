import HeaderDesign from "./headerFooter/header";
import FooterDesign from "./headerFooter/footer";
// import {FCRUD} from "./firebaseDatabaseConnector";
// import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
// import {CloseCircleFilled, LoadingOutlined} from "@ant-design/icons";
// import Router from "next/router";
// import {message} from "antd";

export default function Layout(props:any) {
    const path:any=props.pages.type.name;
    //
    // const auth = FCRUD.auth
    // const user = auth.currentUser;
    //
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         const uid = user.uid;
    //         console.log("asdasdasdasdasdasdasd "+uid)
    //
    //     } else {
    //         // User is signed out
    //         Router.push('/sign')
    //         message.error("ddddddddd")
    //     }
    // });
    //

    if(path !== "Sign" && path !== "ForgetPassword" && path !== "Signup" ){
        return<>
            <HeaderDesign/>
            {props.pages}
            <FooterDesign/>
        </>
    }else{
        return<>
            {props.pages}
        </>
    }
}
