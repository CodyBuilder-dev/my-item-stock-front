import React, {useEffect, useState} from "react";
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import axios, {AxiosResponse} from "axios";


function FloatingPopulationScatterChart() {
    const [ responseFPList, setResponseFPList ] = useState<AxiosResponse>();
    const [ append_FPList, setAppend_FPList ] = useState();

    useEffect(() => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&'+
            'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=5', {
        })
            .then( response => {
                try {
                    setResponseFPList(response);
                    setAppend_FPList(responseFPList?.data.entry );
                } catch (error) {
                    alert(error)
                }
            })
            .catch( error => {alert(error);return false;} );
    })

    return (
        <ScatterChart
            width={1000}
            height={300}
            margin={{
                top: 5, right: 50, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid />
            <XAxis type="number" dataKey="연령대(10세단위)" name="연령대" unit="세" />
            <YAxis type="number" dataKey="유동인구수" name="유동인구수" unit="명" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={append_FPList} fill="#003458" />
        </ScatterChart>
    )
}

export default FloatingPopulationScatterChart;
