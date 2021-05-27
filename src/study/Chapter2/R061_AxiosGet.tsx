import React ,{useEffect} from "react";
import axios from 'axios';

function R061_AxiosGet() {
    useEffect( () => {
        axios.get('http://date.jsontext.com/')
            .then( response => {alert(response.data.date)})
    })
    return (
        <h1>axios get</h1>
    );
}


export default R061_AxiosGet;
