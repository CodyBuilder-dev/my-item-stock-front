import Searchbar from "./Searchbar"
import NotSigninHeader from "./NotSigninHeader"

function Header(props: any) {
    if (props.isSignIn) {
        return <Searchbar />;
    }
    else
        return <NotSigninHeader />;
}

export default Header;
