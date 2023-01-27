import '../components/card/main.css';
import '../components/account/main.css';
import '../components/signOptions/main.css';
import '../components/bodyComponent/main.css';
import '../components/shoping/main.css';
import '../components/backgrounAnimation/main.css';
import '../components/game/solid.module.css';
import '../components/message/message.module.css';
import '../styles/sideHeader.module.css';
import '../styles/sellCard.module.css';
import '../styles/Package_Details.module.css';
import '../styles/middle_banner.module.css';
import '../styles/upload.module.css';
import '../styles/animations.module.css';
import '../styles/sign.module.css';
import '../styles/header.module.css';

import '../styles/globals.css'
import '../styles/custom.css'
// import 'antd/dist/antd.css';


import type { AppProps } from 'next/app';
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return(

       <Layout pages={
           <Component {...pageProps} />
       }/>
  )
}
