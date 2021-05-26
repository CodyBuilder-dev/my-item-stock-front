function SignIn(){
    return (
        <div>
            <form>
                <label htmlFor={"email"}>이메일</label>
                <input id={"email"} placeholder={"이메일을 입력해주세요"} type={"email"}/>

                <label htmlFor={"pwd"}>비밀번호</label>
                <input id={"pwd"} placeholder={"비밀번호를 입력해주세요"} type={"password"}/>

                <button type={"submit"}>가입하기</button>
                <button type={"button"}>뒤로가기</button>
                <button type={"button"}>Google</button>
            </form>
        </div>
    )
}
export default SignIn;
