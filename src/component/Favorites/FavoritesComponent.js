import React, { useState, useEffect } from 'react';
import FavoritesListComponent from './FavoritesListComponent';
import { getUserFavorites } from '../../api/favoritesApi';
import { useAuth } from '../../context/AuthContext';


const FavoritesComponent = ({ isLoggedIn }) => {
  const {state} = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    console.log(useAuth);
    const fetchFavorites = async () => {
      if (!isLoggedIn) return; // 로그인하지 않았으면 데이터 가져오지 않음

      try {
        const response = await getUserFavorites(state.user.userId) // 백엔드 API 주소
        setFavorites(response);
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

