//todo: import방식으로는 이미지 삽입이 가능하고 require로는 불가능한 이유
import logo from "../../img/logo.png";


function Searchbar() {
    return (
        <div id="header">
            {/* <img src={require("../../img/logo.png")} alt="내돈내산 로고" /> */}
            <img src={logo} alt="내돈내산 로고" />
            <form>
                <input type="search" placeholder={"검색할 내용을 적어주세요"} />
                <button type="submit">검색</button>
            </form>
        </div>
    )
}
export default Searchbar;
