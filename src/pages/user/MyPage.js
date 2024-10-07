import BasicLayout from "../../layout/BasicLayout";

const MyPage = () => {
 
  return (
    <BasicLayout>
      <div className="flex">
        <div className="h-screen w-1/4 items-center bg-cyan-600 pl-5 pr-5 -mt-5 ">
          <ul>
            <li className="pt-10 text-white text-lg font-bold">내 정보 수정</li>
            <li className="pt-5 text-white text-lg font-bold">즐겨찾기</li>
          </ul>
        </div>
        <div className="items-center profile-section w-3/4 p-5 pl-10">
            <p>비밀번호 확인</p>
            <div>
            <input type="password"
            className="border border-gray-300 mt-3 w-1/2" id="userId"></input>
            <button
            className="bg-cyan-600 ml-3 text-white text-center text-sm p-1 pl-2 pr-2 rounded-md">확인</button>
            </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default MyPage;
