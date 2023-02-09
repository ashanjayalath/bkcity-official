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
import type { AppProps } from 'next/app';


import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../redux/reducers/reducer";

const store = createStore(reducer);

export default function App({ Component, pageProps }: AppProps) {
    return(

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
}
