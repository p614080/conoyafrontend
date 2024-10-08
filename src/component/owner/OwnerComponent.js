import React, { useState, useEffect } from "react";
import { getOwnerInfo, changeOwnerPassword, updateSingroomInfo } from "../../api/ownerApi";

const OwnerComponent = () => {
  const [editMode, setEditMode] = useState(false); // 노래방 정보 수정 모드 활성화 여부
  const [passwordChangeMode, setPasswordChangeMode] = useState(false); // 비밀번호 변경 모드 활성화 여부
  const [ownerInfo, setOwnerInfo] = useState({
    ownerEmail: "",
    ownerNum: "",
    signUpDate: "",
  });

  // 노래방 정보 상태 관리
  const [singroom, setSingroom] = useState({
    name: "",
    image: "",
    price: "",
    roomNumber: 0,
    roomCapacity: 0,
  });

  // 비밀번호 변경 상태 관리
  const [currentPassword, setCurrentPassword] = useState(""); // 현재 비밀번호
  const [newPassword, setNewPassword] = useState(""); // 새 비밀번호

  // 회원 정보 가져오기
  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        const data = await getOwnerInfo();
        setOwnerInfo({
          ownerEmail: data.email,
          ownerNum: data.businessNumber,
          signUpDate: data.signUpDate,
        });
        setSingroom({
          name: data.singroom.name,
          price: data.singroom.price,
          image: data.singroom.image,
          roomNumber: data.singroom.roomNumber,
          roomCapacity: data.singroom.roomCapacity,
        });
      } catch (error) {
        console.error("회원 정보를 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchOwnerInfo();
  }, []);

  // 수정 모드 전환
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // 비밀번호 변경 모드 전환
  const togglePasswordChangeMode = () => {
    setPasswordChangeMode(!passwordChangeMode);
  };

  // 수정 사항 저장
  const handleSave = async () => {
    try {
      await updateSingroomInfo(singroom);
      alert("노래방 정보가 성공적으로 수정되었습니다.");
      setEditMode(false);
    } catch (error) {
      alert("노래방 정보 수정 중 오류가 발생했습니다.");
    }
  };

  // 비밀번호 변경
  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    const changePasswordData = {
      currentPassword,
      newPassword,
    };

    try {
      await changeOwnerPassword(changePasswordData);
      alert("비밀번호가 성공적으로 변경되었습니다.");
      setPasswordChangeMode(false);
    } catch (error) {
      alert("비밀번호 변경에 실패했습니다. 현재 비밀번호를 확인해 주세요.");
    }
  };

  return (
    <div>
      {/* 점주 기본 정보 섹션 */}
      <div className="profile-section p-5 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">점주 정보</h2>
        <p className="text-lg mb-2"><strong>사업자 번호:</strong> {ownerInfo.ownerNum}</p>
        <p className="text-lg mb-2"><strong>아이디:</strong> {ownerInfo.ownerEmail}</p>
        <p className="text-lg mb-2"><strong>회원가입 날짜:</strong> {ownerInfo.signUpDate}</p>
        <button
          onClick={togglePasswordChangeMode}
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500"
        >
          비밀번호 변경
        </button>
      </div>

      {/* 비밀번호 변경 모달 */}
      {passwordChangeMode && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">비밀번호 변경</h2>
            <input
              type="password"
              placeholder="현재 비밀번호"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="password"
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
              required
            />
            <div className="flex justify-between">
              <button
                onClick={handleChangePassword}
                className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-500">
                변경하기
              </button>
              <button
                onClick={togglePasswordChangeMode}
                className="px-4 py-2 bg-gray-600 text-white font-bold rounded hover:bg-gray-500">
                  취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 노래방 정보 수정 섹션 */}
      <div className="singroom-section mt-10 p-5 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">노래방 정보</h3>

        {editMode ? (
          <div>
            <input
              type="text"
              value={singroom.name}
              onChange={(e) => setSingroom({ ...singroom, name: e.target.value })}
              placeholder="노래방 이름 수정"
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="text"
              value={singroom.price}
              onChange={(e) => setSingroom({ ...singroom, price: e.target.value })}
              placeholder="노래방 요금 수정"
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="text"
              value={singroom.image}
              onChange={(e) => setSingroom({ ...singroom, image: e.target.value })}
              placeholder="노래방 이미지 URL 수정"
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="number"
              value={singroom.roomNumber}
              onChange={(e) => setSingroom({ ...singroom, roomNumber: e.target.value })}
              placeholder="방 번호 수정"
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="number"
              value={singroom.roomCapacity}
              onChange={(e) => setSingroom({ ...singroom, roomCapacity: e.target.value })}
              placeholder="방 인원수 수정"
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500"
              >
                저장하기
              </button>
              <button
                onClick={toggleEditMode}
                className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-500"
              >
                취소
              </button>
            </div>
          </div>
        ) : (
          <div>
            <img src={singroom.image} alt={singroom.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="mb-2"><strong>노래방 이름:</strong> {singroom.name}</p>
            <p className="mb-2"><strong>노래방 요금:</strong> {singroom.price}</p>
            <p className="mb-2"><strong>방 번호:</strong> {singroom.roomNumber}</p>
            <p className="mb-4"><strong>방 인원수:</strong> {singroom.roomCapacity}</p>
            <button
              onClick={toggleEditMode}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500"
            >
              수정하기
            </button>
          </div>
        )}
      </div>
      </div>
  );
};

export default OwnerComponent;
