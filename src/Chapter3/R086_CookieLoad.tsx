import React, {useEffect} from "react";
import cookie from 'react-cookies';

function R086_CookieLoad() {
    useEffect( () => {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('userid', "react200", {
            path: '/',
            expires,
            //secure: true,
            //httpOnly: true
        });
        setTimeout(() => {
            alert(cookie.load('userid'))
        },1500);
    })
    return (
        <h3>
           react-cookies Load
        </h3>
    )
}


export default R086_CookieLoad;
