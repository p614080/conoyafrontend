import BasicLayout from "../../layout/BasicLayout";
import OwnerComponent from "../../component/owner/OwnerComponent";
const OwnerMyPage = () => {
    return(<BasicLayout>
     {/* <div className="profile-section">
                <h2>사업자 번호</h2>
                <p>아이디: owner@email.com</p>
                <p>회원가입 날짜: 2023년 1월 1일</p>
                <p>비밀번호</p>
                <button>비밀번호 변경</button>
            </div>
            <div className="singroom">
                <h3>노래방 이름 수정</h3>
                <ul>
                    <li>노래방 요금수정</li>
                    <li>노래방 이미지 수정</li>
                </ul>
                
                <h3>노래방 도면 수정</h3>
                <ul>
                    <li>방 번호 수정</li>
                    <li>방인원수 수정</li>
                </ul>
                
            </div>
            */}
            <OwnerComponent/>
            </BasicLayout>

)}
export default OwnerMyPage;