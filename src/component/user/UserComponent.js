import React, { useState, useEffect } from "react";
import { getUserInfo, updateUserNickname, updateUserPassword } from "../../api/userApi";

const UserComponent = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [newNickname, setNewNickname] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [editNickname, setEditNickname] = useState(false);
  const [editPassword, setEditPassword] = useState(false);


 // 사용자 정보를 가져오는 함수
const fetchUserInfo = async () => {
  try {
    const email = sessionStorage.getItem("userEmail"); // 세션에서 이메일 가져오기
    if (!email) {
      throw new Error("이메일 정보가 없습니다. 로그인 해주세요.");
    }
    const data = await getUserInfo(email);
    setUserEmail(data.userEmail);
    setUserNickname(data.userNickname);
  } catch (error) {
    console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
  }
};


  // 컴포넌트가 렌더링될 때 사용자 정보를 가져옴
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const toggleEditNickname = () => setEditNickname(!editNickname);
  const toggleEditPassword = () => setEditPassword(!editPassword);

  const handleNicknameUpdate = async () => {
    if (!newNickname) {
      alert("새 닉네임을 입력해주세요.");
      return;
    }

    try {
      await updateUserNickname({ userEmail, userNickname: newNickname });
      alert("닉네임이 성공적으로 변경되었습니다.");
      setUserNickname(newNickname);
      setEditNickname(false);
    } catch (error) {
      alert(error.message || "닉네임 변경 중 오류가 발생했습니다.");
    }
  };

  const handlePasswordUpdate = async () => {
    if (userPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await updateUserPassword({ userEmail, userPassword });
      alert("비밀번호가 성공적으로 변경되었습니다.");
      setEditPassword(false);
    } catch (error) {
      alert(error.message || "비밀번호 변경 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="mt-20 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-6">
  <h2 className="text-2xl font-bold text-cyan-600 text-center">내 정보</h2>
  <div className="mb-10">
    <p className="text-lg font-bold text-gray-700 mb-2">이메일: {userEmail}</p>
    <p className="text-lg font-bold text-gray-700 mb-4">닉네임: {userNickname}</p>
    <button
      onClick={toggleEditNickname}
      className="w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
    >
      닉네임 변경
    </button>
  </div>


      {editNickname && (
        <div className="mb-4">
          <input
            type="text"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            placeholder="새 닉네임 입력"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-2"
          />
          <button
            onClick={handleNicknameUpdate}
            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            닉네임 저장
          </button>
        </div>
      )}

      <div>
        <button
          onClick={toggleEditPassword}
          className="w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
        >
          비밀번호 변경
        </button>
      </div>

      {editPassword && (
        <div className="mt-4">
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="새 비밀번호 입력"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-2"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호 확인"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 mb-4"
          />
          <button
            onClick={handlePasswordUpdate}
            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            비밀번호 저장
          </button>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
