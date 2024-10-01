import BookmarkComponent from "../bookmark/BookmarkComponent.js";

const LoginComponent = () => {
 return(
    <div>
        <div className="flex justify-center">
            <label for="inputId">아이디</label>
            <input  className="ml-2" type="text" id="inputId"></input>
            
        </div>
        <div className="flex justify-center py-3 mr-5">
        <label for="inputPassword"  className="ml-3">비밀번호</label>
        <input type="password" className="ml-0"></input>
        </div>
        <div className="flex justify-center mr-3">
            <button type="button" className="mr-5">
                확인
            </button>
            <button type="button">
                회원가입
            </button>
        </div>
    </div>
 );
}
export default LoginComponent;
