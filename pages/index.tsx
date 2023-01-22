import { message} from "antd";
import {onAuthStateChanged } from "firebase/auth";
import Router from "next/router";
import {FCRUD} from '../components/firebaseDatabaseConnector'

export default function Home() {
    // const [progress, setProgress] = useState(0)
    // const [po,setPo]=useState(false);

    const auth = FCRUD.auth
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            Router.push('/home')
        } else {
            // User is signed out
            Router.push('/sign')
            message.error("ddddddddd")
        }
    });
}