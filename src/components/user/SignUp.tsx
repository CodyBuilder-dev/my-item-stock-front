import axios from "axios";

function SignUp(){
    const isPwdCorrect = function(pwd1: any,pwd2: any) {
        return pwd1 === pwd2;
    }

    const sendSignUpRequest = function() {
        const pwd1 = document.getElementById("pwd");
        const pwd2 = document.getElementById("pwd-check");
        if (isPwdCorrect(pwd1,pwd2)) {
            axios.get("/api/user")
                .then( response => {alert("잟했어요")})
                .catch( response => {alert("망했어요")})
        } else {
            alert("비밀번호가 일치하지 않습니다");
        }
    }
    return (
        <div>
            <form>
                <label htmlFor={"email"}>이메일</label>
                <input id={"email"} placeholder={"이메일을 입력해주세요"} type={"email"}/>

                <label htmlFor={"pwd"}>비밀번호</label>
                <input id={"pwd"} placeholder={"비밀번호를 입력해주세요"} type={"password"}/>

                <label htmlFor={"pwd-check"}>비밀번호 확인</label>
                <input id={"pwd-check"} placeholder={"비밀번호를 한번 더 입력해주세요"} type={"password"}/>

                <label htmlFor={"nickname"}>별명</label>
                <input id={"nickname"} placeholder={"닉네임을 적어주세요"} />

                <button type="submit" onClick={sendSignUpRequest}>가입하기</button>
                <button type={"button"}>뒤로가기</button>
            </form>

        </div>
    )
}
export default SignUp;
