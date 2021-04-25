import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom"
import axiosInstance  from "../axios"

const Logout = () => {
    const history = useHistory();

    useEffect(() => {
       const response = axiosInstance.post('logout/blacklist/', {
           refresh_token: localStorage.getItem('refresh_token'),
       });
       localStorage.removeItem('access_token')
       localStorage.removeItem('refresh_token')
       axiosInstance.defaults.headers['Authorization'] = null
       history.push('/login');
    }, [])

    return (
        <div>
           Logout 
        </div>
    )
}

export default Logout
