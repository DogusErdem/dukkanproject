import React from "react";
import Router from "./Router";
import AuthProvider from './context/AuthProvider/Provider'

export default () => {
    return(
        <AuthProvider>
            <Router/>
        </AuthProvider>
    )
}