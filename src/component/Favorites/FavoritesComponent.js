import React, { useState, useEffect } from 'react';
import FavoritesListComponent from './FavoritesListComponent';

const FavoritesComponent = ({ isLoggedIn }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!isLoggedIn) return; // 로그인하지 않았으면 데이터 가져오지 않음

      try {
        const response = await fetch('https://api.example.com/favorites'); // 백엔드 API 주소
        if (!response.ok) {
          throw new Error('네트워크 응답이 좋지 않습니다.');
        }
        const data = await response.json();
        setFavorites(data); // 데이터 설정
      } catch (error) {
        setError(error.message); // 에러 처리
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchFavorites();
  }, [isLoggedIn]); // isLoggedIn이 변경될 때마다 호출

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;
  if (!isLoggedIn) return <p>로그인 후 즐겨찾기를 확인하세요.</p>; // 로그인하지 않은 경우 메시지 표시

  return (
    <div>
      <h1>즐겨찾기</h1>
      <FavoritesListComponent favorites={favorites} />
    </div>
  );
};

export default FavoritesComponent;
