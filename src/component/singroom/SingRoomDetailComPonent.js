import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSingRoomInfo } from "../../api/ownerApi";

import RoomListComponent from "../room/RoomListComponent";

const SingroomDetailComponent = () => {
  const { id } = useParams(); // URL에서 ID 추출
  const [singroom, setSingroom] = useState(null); // 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const fetchSingroom = async () => {
      try {
        const response = await getSingRoomInfo(id); // API 호출
        setSingroom(response); // 응답 데이터 저장
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
        setError(error.message || "데이터를 불러오는 중 오류 발생"); // 오류 메시지 저장
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchSingroom(); // 함수 호출
  }, [id]); // ID가 변경될 때마다 호출

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중일 때 표시
  }

  if (error) {
    return <div>{error}</div>; // 오류 메시지 표시
  }

  if (!singroom) {
    return <div>노래방을 찾을 수 없습니다.</div>; // 데이터가 없을 경우
  }

  return (
    <div>
      <div className="border">
        <img src={singroom.owner.imageUrl} alt={singroom.name} />
        <h1 className="text-3xl font-bold">{singroom.owner.storeName}</h1>
        <p>주소: {singroom.owner.location}</p>
        <p>소개글</p>
        <p>{singroom.owner.description}</p>
      </div>
      <div>
        <RoomListComponent rooms={singroom.rooms} />
      </div>
    </div>
  );
};

export default SingroomDetailComponent;
