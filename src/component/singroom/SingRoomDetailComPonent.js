import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SingroomDetailComponent = ({sno}) => {
  const { id } = useParams(); // URL에서 ID 추출
  const [singroom, setSingroom] = useState(null); // 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const fetchSingroom = async () => {
      try {
        const response = await axios.get(`https://api.example.com/singrooms/${id}`); // API 호출
        setSingroom(response.data); // 응답 데이터 저장
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchSingroom(); // 함수 호출
  }, [id]); // ID가 변경될 때마다 호출

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중일 때 표시
  }

  if (!singroom) {
    return <div>노래방을 찾을 수 없습니다.</div>; // 데이터가 없을 경우
  }

  return (
    <div>
      <h1>{singroom.name}</h1>
      <img src={singroom.image} alt={singroom.name} />
      <p>가격: {singroom.price}</p>
      <p>주소: {singroom.address}</p>
      {/* 기타 상세 정보 추가 */}
    </div>
  );
};

export default SingroomDetailComponent;
