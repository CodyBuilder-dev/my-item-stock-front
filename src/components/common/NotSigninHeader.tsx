//todo: import방식으로는 이미지 삽입이 가능하고 require로는 불가능한 이유
import logo from "../../img/logo.png";


function NotSigninHeader() {
    return (
        <div id="header">
            {/* <img src={require("../../img/logo.png")} alt="내돈내산 로고" /> */}
            <img src={logo} alt="내돈내산 로고" />
        </div>
    )
}
export default NotSigninHeader;
