import {Route} from 'react-router-dom';


import CategoryList from './item/CategoryList';
import SignIn from './user/SignIn';


function Main(props: any){
    if (props.isSignIn) {
       return <CategoryList />
    } else {
        return <SignIn />;
    }
}
export default Main;
