function TopNavbar (props: any) {

    const sendMenuType = function(e: Object) {
        // alert(e.toString());
        props.onCreate(e);
    }

    return (
        <div>
            <button onClick={() => sendMenuType("CategoryList")} >아이템목록</button>
            <button onClick={() => sendMenuType("CategoryPieChart")} >통계보기</button>
        </div>
    )
}

export default TopNavbar;
