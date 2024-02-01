import React, { useState } from 'react'
const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('users');
        const userToken = JSON.parse(tokenString);
        return userToken?.users
    };

    const  [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('data', JSON.stringify(useToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}

export default useToken