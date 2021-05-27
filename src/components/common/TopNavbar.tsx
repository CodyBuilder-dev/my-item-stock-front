function TopNavbar () {

    const sendMenuType = function(e) {
        props.onCreate(e.value)
    }

    return (
        <form id='top-navbar' onSubmit={sendMenuType}>
            <button type="submit" value="CategoryList">아이템목록</button>
            <button type="submit" value="CategoryPieChart">통계보기</button>
        </form>
    )
}

export default TopNavbar;