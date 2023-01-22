import React, {useEffect, useState} from "react";
import LoadingBar from "react-top-loading-bar";

export default function TestLoad() {
    const [progress, setProgress] = useState<number>(0);
    const [condition,setCondition] = useState<boolean>(false);

    // let pro=
    let com=new Promise((resolve,reject)=>{
        setCondition(true)
        console.log("qqqqqqqqqqqqqqqqq")
        setTimeout(()=>{

        },2000)

        // {props.path}
    })

    useEffect(()=>{
        setTimeout(()=>{
            setProgress(progress+20)
        },1000)
    })

    if(condition){
        return<>
            <LoadingBar
                color='#ff0000'
                progress={progress}
                waitingTime={2000}
                // transitionTime={1000}
                onLoaderFinished={() => setProgress(0)}
            />
        </>
    }



}