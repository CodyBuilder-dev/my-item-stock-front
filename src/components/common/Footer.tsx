function Footer(props: any) {
    if (props.isSignIn) {
        return (
            <div id="footer">
                <table>
                    <tbody>
                        <tr>
                            <th>서비스 소개</th>
                            <th>개발자 소개</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    else
        return (
            <div></div>
        );
}
export default Footer;
