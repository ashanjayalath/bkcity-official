import er_404 from '../public/assets/error_404.svg';
import {Image} from "antd";

export default function PageNotFound(){
    return<>
    <div style={{marginLeft:'30%',marginTop:'5%'}}>
        <Image src={'/assets/error_404.svg'} preview={false} alt={"Error Loading"} width={'50%'} height={'50%'}/>
    </div>
    </>
}