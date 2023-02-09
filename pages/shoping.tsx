import Market  from "../models/market";
import {useSelector} from "react-redux";
import Router from "next/router";
import {useEffect} from "react";
export default function Shoping(){
    const firebaseSignState=useSelector((state:any)=>state.firebaseSignState);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return firebaseSignState ?  <Market/>:useEffect(()=>{Router.push('/sign')},[])
}