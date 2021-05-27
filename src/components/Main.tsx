import { useState } from 'react';
// import {Route} from 'react-router-dom';

import CategoryList from './item/CategoryList';
import TopNavbar from './common/TopNavbar';
import CategoryPieChart from './statistic/CategoryPieChart';
import SignIn from "./user/SignIn";


function Main(props: any){
    const [ menuType, setMenuType ] = useState("CategoryList")

    const getMenuType = function(clickedMenuType: any) {
        alert("클릭된 메뉴는 : " + clickedMenuType);
        setMenuType(clickedMenuType);
        alert(" 변경된 메뉴는 : "+ menuType);
    }


    if (props.isSignIn) {
        switch(menuType) {
            case "CategoryPieChart":
                return (
                    <div id="main">
                       <TopNavbar onCreate={getMenuType} />
                       <CategoryPieChart />
                    </div>
                )
            default:
                return (
                    <div id="main">
                       <TopNavbar onCreate= {getMenuType} />
                       <CategoryList />
                    </div>
                )
        }
    } else {
        return (
            <div id={"main"}>
                <SignIn />
            </div>
        )
    }
}
export default Main;
