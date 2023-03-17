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
import '../styles/globals.css';
import '../styles/custom.css';
import '../styles/admin_header.module.css'
import type { AppProps } from 'next/app';


import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../redux/reducers/reducer";
import Head from "next/head";

const store = createStore(reducer);

export default function App({ Component, pageProps }: AppProps) {
    return<>
        <Head>
            <title>BkCity Official</title>
            <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        {/*<LoadingBar */}
        {/*    color={"#de0e0e"}*/}
        {/*    */}

        {/*/>*/}
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </>


}
