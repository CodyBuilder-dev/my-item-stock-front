import axios from "axios";
import $ from 'jquery'
import {useHistory} from 'react-router-dom';

function SignIn(){

    const hist = useHistory();

    const sendSignInRequest = function(e: any){
        axios.post("/api/user/login",{
            "email":$("#email").val(),
            "password":$("#pwd").val()
        })
            .then( response => {
                    alert(response.data);

                })
            .catch( response => {alert(response.data)})

    }
    return (
        <div>
            <form>
                <label htmlFor={"email"}>이메일</label>
                <input id={"email"} placeholder={"이메일을 입력해주세요"} type={"email"}/>

                <label htmlFor={"pwd"}>비밀번호</label>
                <input id={"pwd"} placeholder={"비밀번호를 입력해주세요"} type={"password"}/>


                <button type={"button"} onClick={sendSignInRequest}>로그인</button>
                <button type={"button"}>Google 로그인</button>
            </form>

            아이디가 없으세요?
            <a href={"/signup"}>
                <button>회원가입</button>
            </a>


        </div>
    )
}
export default SignIn;
