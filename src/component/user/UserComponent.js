import React, { useState } from "react";
import { updateUser } from "../../api/userApi";

const UserComponent = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdateUser = async () => {
    if (userPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const userEmail = sessionStorage.getItem("userEmail");
    if (!userEmail) {
      alert("사용자 이메일 정보가 없습니다. 다시 로그인해주세요.");
      return;
    }

    const updatedUserInfo = {
      userEmail,
      userNickname,
      userPassword,
    };

    try {
      const data = await updateUser(updatedUserInfo);
      alert("사용자 정보가 성공적으로 업데이트되었습니다.");
    } catch (error) {
      alert(error.message || "정보 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="mt-20 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-cyan-600 text-center">내 정보 수정</h2>
      <div>
        <label className="block text-gray-700 mb-2">닉네임 변경</label>
        <input
          type="text"
          value={userNickname}
          onChange={(e) => setUserNickname(e.target.value)}
          placeholder="새 닉네임 입력"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">비밀번호 변경</label>
        <input
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="새 비밀번호 입력"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">비밀번호 확인</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
      </div>
      <div>
        <button
          onClick={handleUpdateUser}
          className="w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
        >
          정보 수정
        </button>
      </div>
    </div>
  );
};

export default UserComponent;
