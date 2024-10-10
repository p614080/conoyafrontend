// src/SignupComponent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { joinOwner} from "../../api/ownerApi"; // API 함수 가져오기

const JoinOwnerComponent = () => {
  const [ownerEmail, setOwnerEmail] = useState(""); // 기업 이메일
  const [ownerPassword, setOwerPassword] = useState(""); //기업 비밀번호
  const [ownerPasswordCheck, setOwnerPasswordCheck] = useState(""); //기업 비밀번호 확인
  const [ownerNum, setOwnerNum] = useState(""); //사업자 번호
  const [storeName, setStoreName] = useState(""); //사업장 명
  const [location, setLocation] = useState(""); // 사업장 주소
  // const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleMoveSignUp = async (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (ownerPassword !== ownerPasswordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const joinData = {
      ownerEmail,
      ownerPassword,
      ownerPasswordCheck,
      ownerNum,
      storeName,
      location,
    };

    // 필수 정보 확인
    if (
      !ownerEmail ||
      !ownerPassword ||
      !ownerPasswordCheck ||
      !ownerNum ||
      !storeName ||
      !location
    ) {
      alert("모든 사업자 정보를 입력해 주세요.");
      return;
    }

   
    try {
      alert("기업회원으로 가입합니다.");
      await joinOwner({ ...joinData }); // 기업회원 가입 API 호출

      // 페이지 이동
      navigate("/some-route"); // 필요한 라우트로 이동
    } catch (error) {
      alert(error.message); // 에러 메시지 표시
    }
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">회원가입 ('기업회원')</h2>

      <input
        placeholder="사업자등록번호"
        value={ownerNum}
        onChange={(e) => setOwnerNum(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        placeholder="사업장명"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        placeholder="사업장 주소"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="email"
        placeholder="이메일"
        value={ownerEmail}
        onChange={(e) => setOwnerEmail(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={ownerPassword}
        onChange={(e) => setOwerPassword(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={ownerPasswordCheck}
        onChange={(e) => setOwnerPasswordCheck(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />

    

      <button
        onClick={handleMoveSignUp}
        className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-500"
      >
        가입하기
      </button>
    </div>
  );
};

export default JoinOwnerComponent;
