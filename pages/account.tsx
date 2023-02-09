import {useSelector} from "react-redux";
import AccountSettings from "../models/account";
import Router from "next/router";
import {useEffect} from "react";

export default function Account() {
    const firebaseSignState=useSelector((state:any)=>state.firebaseSignState);
    // eslint-disable-next-line react-hooks/rules-of-hooks
     return firebaseSignState ? <AccountSettings/>:useEffect(()=>{Router.push('/sign')},[])
}