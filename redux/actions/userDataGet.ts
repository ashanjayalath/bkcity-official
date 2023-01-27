import {GET_USER_DATA_FROM_GCP} from './types'
export default function UserDataFetch(){
    return{
        type:GET_USER_DATA_FROM_GCP,
        payload:[
            {
                name:'shan',
                age:20
            },
            {
                name:"jayalath",
                age:50
            }
        ]
    }
}