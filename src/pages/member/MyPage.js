import BasicLayout from "../../layout/BasicLayout";

const MyPage = () => {
    return(<BasicLayout>
     <div className="profile-section">
                <h2>사용자 이름</h2>
                <p>아이디: user123</p>
                <p>회원가입 날짜: 2023년 1월 1일</p>
            </div>
            <div className="favorites">
                <h3>즐겨찾기 및 저장한 항목</h3>
                <ul>
                    <li>즐겨찾기 목록</li>
                    <li>저장된 아이템</li>
                </ul>
            </div>
            <div className="community-feedback">
                <h3>커뮤니티 및 피드백</h3>
                <button>이용 후기</button>
                <button>문의하기</button>
            </div>
            </BasicLayout>

)}
export default MyPage;