import { useState } from 'react';
import {Route} from 'react-router-dom';

import CategoryList from './item/CategoryList';
import SignIn from './user/SignIn';
import TopNavbar from './common/TopNavbar';
import CategoryPieChart from './statistic/CategoryPieChart';




function Main(props: any){
    const [ menuType, setMenuType ] = useState("CategoryList")

    const getMenuType = function(menuType: any) {
        setMenuType(menuType);
    }


    if (props.isSignIn) {
        switch(props.menuType) {
            case "CategoryList":
                return (
                    <div id="main">
                       <TopNavbar onCreate= {getMenuType} />
                       <CategoryList  />
                    </div>
                )
            case "CategoryPieChart":
                return (
                    <div id="main">
                       <TopNavbar onCreate={getMenuType} />
                       <CategoryPieChart />
                    </div>
                )
        }
    }
}
export default Main;
