import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupComponent = ({ userType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ownerNum, setOwnerNum] = useState(""); // 사업자등록번호 상태
  const [businessName, setBusinessName] = useState(""); // 사업장명 상태
  const [businessAddress, setBusinessAddress] = useState(""); // 사업장 주소 상태
  const navigate = useNavigate();

  const handleMoveSignUp = (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const signupData = { email, password };

    if (userType === 'user') {
      alert("일반회원으로 가입합니다.");
      console.log("일반회원 가입:", signupData);
    } else if (userType === 'owner') {
      if (!ownerNum || !businessName || !businessAddress) {
        alert("모든 사업자 정보를 입력해 주세요.");
        return;
      }
      alert("기업회원으로 가입합니다.");
      console.log("기업회원 가입:", { ...signupData, ownerNum, businessName, businessAddress });
    }

    // 페이지 이동
    navigate('/some-route'); // 필요한 라우트로 이동
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">회원가입 ({userType === 'user' ? '일반회원' : '기업회원'})</h2>
      {userType === 'owner' && (
        <>
          <input
            placeholder="사업자등록번호"
            value={ownerNum}
            onChange={(e) => setOwnerNum(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            required
          />
          <input
            placeholder="사업장명"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            required
          />
          <input
            placeholder="사업장 주소"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            required
          />
        </>
      )}
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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

export default SignupComponent;
