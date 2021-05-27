import React ,{useEffect} from "react";

function R060_FetchPost() {


// TypeScript Code
    useEffect(()=>{
        var getFunc = async () => {
            const response = await fetch("http://date.jsontest.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
//                 todo: 왜 그냥 Object를 넣으면 Type '{ a: string; b: number; }' is not assignable to type 'BodyInit | null | undefined'
//                 답 : fetch의 2번째 인자로는 RequestInit 을 전달하는데, body는 반드시 null 또는 string이어야 한다
//                 왜 JSON.stringify해야 할까?
                body: JSON.stringify({a:"react", b:200})
//                 body: {a:"react", b:200}
            });
            const body = await response.json();
            alert(body.date);
        }

        getFunc();
    })

    return (
        <h1>fetch post</h1>
    );
}


export default R060_FetchPost;
