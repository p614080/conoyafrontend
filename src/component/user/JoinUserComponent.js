// src/SignupComponent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {joinUser } from "../../api/userApi"; // API 함수 가져오기

const JoinUserComponent = () => {
  const [userNickname, setUserNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleMoveSignUp = async (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (userPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const joinData = { userNickname, userEmail, userPassword };

    try {
      alert("일반회원으로 가입합니다.");
      await joinUser(joinData); // 일반회원 가입 API 호출

      // 페이지 이동
      navigate("/some-route"); // 필요한 라우트로 이동
    } catch (error) {
      alert(error.message); // 에러 메시지 표시
    }
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">회원가입 (일반회원)</h2>
      <input
        type="text"
        placeholder="닉네임"
        value={userNickname}
        onChange={(e) => setUserNickname(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="email"
        placeholder="이메일"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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

export default JoinUserComponent;
