import React, { Component } from 'react';

class R004_LifecycleEx extends Component {
    render() {
        // 클라이언트 브라우저에서 실행되므로, 브라우저 개발자도구에 찍히게 된다
        console.log('3. render Call');
        return (
            <h2> [THIS IS RENDER FUNCTION] </h2>
        )
    }
}

export default R004_LifecycleEx;
