import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children})=>{
    const isLogin = () => {
        var Token = (localStorage.getItem("Token") != null ) ? true : false
        console.log(Token);
        if (Token )  return true
        else return false
      }

    return isLogin() ? children : <Navigate  to="/login" />

}
export default PrivateRoutes;
