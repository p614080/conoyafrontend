import React, { useState, useEffect } from "react";
import { getOwnerInfo, changeOwnerPassword, updateSingroomInfo } from "../../api/ownerApi";

const OwnerComponent = () => {
  const [editMode, setEditMode] = useState(false);
  const [passwordChangeMode, setPasswordChangeMode] = useState(false);
  const [ownerInfo, setOwnerInfo] = useState({
    ownerEmail: "",
    ownerNum: "",
  
  });

  const [singroom, setSingroom] = useState({
    name: "",
    image: "",
    price: "",
    roomNumber: 0,
    roomCapacity: 0,
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const fetchOwnerInfo = async () => {
    try {
      const data = await getOwnerInfo();
      setOwnerInfo({
        ownerEmail: data.ownerEmail,
        ownerNum: data.ownerNum,
        // signUpDate: data.signUpDate,
      });
      setSingroom({
        name: data.singroom?.name || "",
        price: data.singroom?.price || "",
        image: data.singroom?.image || "",
        roomNumber: data.singroom?.roomNumber || "",
        roomCapacity: data.singroom?.roomCapacity || "",
      });
    } catch (error) {
      console.error("회원 정보를 가져오는 중 오류가 발생했습니다.", error);
    }
  };
  
  useEffect(() => {
    fetchOwnerInfo(); // 컴포넌트가 처음 렌더링될 때 호출
  }, []);
  

  const toggleEditMode = () => setEditMode(!editMode);
  const togglePasswordChangeMode = () => setPasswordChangeMode(!passwordChangeMode);

  const handleSave = async () => {
    try {
      await updateSingroomInfo(singroom);
      alert("노래방 정보가 성공적으로 수정되었습니다.");
      setEditMode(false);
    } catch (error) {
      alert("노래방 정보 수정 중 오류가 발생했습니다.");
    }
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    try {
      await changeOwnerPassword({ currentPassword, newPassword });
      alert("비밀번호가 성공적으로 변경되었습니다.");
      setPasswordChangeMode(false);
    } catch (error) {
      alert("비밀번호 변경에 실패했습니다. 현재 비밀번호를 확인해 주세요.");
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 space-y-6 max-w-lg">
      {/* 점주 기본 정보 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-cyan-600 mb-4 text-center">점주 정보</h2>
        <p className="text-gray-700 mb-2"><strong>사업자 번호:</strong> {ownerInfo.ownerNum}</p>
        <p className="text-gray-700 mb-2"><strong>아이디:</strong> {ownerInfo.ownerEmail}</p>
        {/* <p className="text-gray-700 mb-4"><strong>회원가입 날짜:</strong> {ownerInfo.signUpDate}</p> */}
        <button
          onClick={togglePasswordChangeMode}
          className="w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
        >
          비밀번호 변경
        </button>
      </div>

      {/* 비밀번호 변경 모달 */}
      {passwordChangeMode && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold text-cyan-600 mb-4">비밀번호 변경</h2>
            <input
              type="password"
              placeholder="현재 비밀번호"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="block w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="password"
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <div className="flex justify-between">
              <button
                onClick={handleChangePassword}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
              >
                변경하기
              </button>
              <button
                onClick={togglePasswordChangeMode}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 노래방 정보 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-cyan-600 mb-4 text-center">노래방 정보</h3>
        {editMode ? (
          <div className="space-y-4">
            <input
              type="text"
              value={singroom.name}
              onChange={(e) => setSingroom({ ...singroom, name: e.target.value })}
              placeholder="노래방 이름 수정"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="text"
              value={singroom.price}
              onChange={(e) => setSingroom({ ...singroom, price: e.target.value })}
              placeholder="노래방 요금 수정"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="text"
              value={singroom.image}
              onChange={(e) => setSingroom({ ...singroom, image: e.target.value })}
              placeholder="노래방 이미지 URL 수정"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="number"
              value={singroom.roomNumber}
              onChange={(e) => setSingroom({ ...singroom, roomNumber: e.target.value })}
              placeholder="방 번호 수정"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="number"
              value={singroom.roomCapacity}
              onChange={(e) => setSingroom({ ...singroom, roomCapacity: e.target.value })}
              placeholder="방 인원수 수정"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleSave}
                className="w-1/2 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mr-2"
              >
                저장하기
              </button>
              <button
                onClick={toggleEditMode}
                className="w-1/2 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                취소
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <img src={singroom.image} alt={singroom.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-gray-700"><strong>노래방 이름:</strong> {singroom.name}</p>
            <p className="text-gray-700"><strong>노래방 요금:</strong> {singroom.price}</p>
            <p className="text-gray-700"><strong>방 번호:</strong> {singroom.roomNumber}</p>
            <p className="text-gray-700"><strong>방 인원수:</strong> {singroom.roomCapacity}</p>
            <button
              onClick={toggleEditMode}
              className="w-full py-3 mt-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
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
