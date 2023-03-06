import {commonTypes} from "../actions/action"
const InitialState = {
    navColor:"#555555",
    navFixed:"fixed",
    lightDark:"#FFFFFFE8",
    langSelect:"E",
    firebaseSignState:false,
    selectedPackage:0,
}

// @ts-ignore
export const reducer=(state = InitialState ,action:commonTypes)=>{
    const newState={...state};
    switch (action.type){
        case "CHANGE_NAV_COLOR":
            newState.navColor=action.value;
            break;
        case "CHANGE_NAV_POSITION":
            newState.navFixed=action.value;
            break;
        case "CHANGE_NAV_THEME":
            newState.lightDark=action.value;
            break;
        case "CHANGE_LANGUAGE":
            newState.langSelect=action.value;
            break;
        case "FIREBASE_AUTH":
            newState.firebaseSignState=action.value;
            break;
        case "SELECTED_PACKAGE":
            newState.selectedPackage=action.value;
            break;
        default:
            break;
    }
    return newState
}

export default reducer;