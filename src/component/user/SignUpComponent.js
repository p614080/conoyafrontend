import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [userType, setUserType] = useState("individual"); // 기본값은 일반회원

  const navigate = useNavigate();

  // const handleUserTypeChange = (type) => {
  //   setUserType(type);
  // }

  const handleMoveSignUp = (e) => {
    e.preventDefault();
    const selectedUserType = e.currentTarget.id; // 현재 클릭한 버튼의 id 가져오기

    if (selectedUserType === "btnJoinInUser") {
      alert("일반회원으로 가입합니다.");
      // 일반회원 가입 처리 로직 추가
      console.log("일반회원 가입:", { email, password });
    }

    if (selectedUserType === "btnJoinInOwner") {
      alert("기업회원으로 가입합니다.");
      // 기업회원 가입 처리 로직 추가
      console.log("기업회원 가입:", { email, password });
    }

    // 추가적인 페이지 이동 처리
    navigate('/some-route'); // 필요한 라우트로 이동
  };

  return (
    <div className="mt-5 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
          회원가입
        </h2>

        <div className="mt-5">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
        </div>

        <div className="w-full mt-5 flex">
          <button
            id="btnJoinInUser"
            className="w-1/2 justify-center py-2 text-white font-bold bg-indigo-600 rounded hover:bg-indigo-500"
            onClick={handleMoveSignUp}
          >
            일반회원
          </button>
          <button
            id="btnJoinInOwner"
            className="w-1/2 ml-auto justify-center py-2 text-white font-bold bg-cyan-600 rounded hover:bg-cyan-500"
            onClick={handleMoveSignUp}
          >
            기업회원
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
