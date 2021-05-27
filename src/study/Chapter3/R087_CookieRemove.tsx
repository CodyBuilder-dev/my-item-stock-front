import React, {useEffect} from "react";
import cookie from 'react-cookies';

function R087_CookieRemove() {
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
            cookie.remove('userid',{path:'/'})
        },1000);
        setTimeout(() => {
            alert(cookie.load('userid'))
        },1500);
    })
    // todo : setTimeout의 정확한 동작 이해하고, 여러 컴포넌트에서 동시에 cookie에 접근하면 어떨지 생각해보기
    return (
        <h3>
           react-cookies Remove
        </h3>
    )
}


export default R087_CookieRemove;
