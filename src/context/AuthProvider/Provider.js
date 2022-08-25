import React,{useState,useEffect} from "react";
import { Provider } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {legacy_createStore as createStore} from 'redux'

import reducers from "./reducers";

const AuthProvier = ({children}) => { //componentslerin arasına eklemek için children kullandık
    const [authLoading,setAuthLoading] = useState(true)
    const [user,setUser] = useState(null)
    
    useEffect(()=>{
        AsyncStorage.getItem('@USER').then(userSession=> {
            userSession && setUser(JSON.parse(userSession));
            setAuthLoading(false);
        })

    },[])
    const store = createStore(reducers,{user, authLoading})
    return <Provider store= {store}>{children}</Provider>
}
export default AuthProvier;