import React from 'react';

function R030_FunctionComponent(props: any) {
    console.log("This is R030");
    let {contents} = props;
    console.log(props);
    return (
        <h2>{contents}</h2>
    )
}

export default R030_FunctionComponent;
