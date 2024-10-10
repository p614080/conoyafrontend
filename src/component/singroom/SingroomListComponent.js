import { useNavigate } from "react-router-dom";
import SingroomComponent from "./SingroomComponent";
import { useState, useEffect } from "react";
import { getSingroomList } from "../../api/ownerApi";

const SingroomListComponent = () => {
  const navigate = useNavigate();
  const [singrooms, setSingrooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // API 호출 함수
  const fetchData = async (searchTerm) => {
    try {
      const singroomData = { name: searchTerm }; // 검색어를 쿼리 파라미터로 사용
      const result = await getSingroomList(singroomData);
      console.log(result); // API 응답 확인
      setSingrooms(result.dtoList || []); // dtoList가 배열인지 확인
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(""); // 초기 로드 시 모든 데이터를 가져옴
  }, []);

  const filteredSingrooms = singrooms
    .filter((singroom) => singroom.storeName && singroom.storeName.includes(searchTerm)) // storeName을 기준으로 필터링
    .sort((a, b) => 0);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-center w-full mt-3">
        <input
          type="text"
          className="ml-1 border w-56 h-8 border-b-2 rounded-md"
          placeholder="노래방 이름을 입력하세요"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => fetchData(searchTerm)} // 검색 버튼 클릭 시 fetchData 호출
          className="bg-customCornflower pl-2 pr-2 rounded-md text-white font-bold ml-1"
        >
          검색
        </button>
      </div>
      <div className="mt-5 pl-4 border border-gray-300 rounded-">
        인기순 평점순 등록일순 가격순
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 border mt-1">
        {filteredSingrooms.map((singroom) => (
          <div
            key={singroom.ownerId}
            onClick={() => navigate(`/singroom/detail/${singroom.ownerId}`)}
            className="cursor-pointer"
          >
            <SingroomComponent
              ownerId={singroom.ownerId}
              image={singroom.imageUrl} // 이미지 URL로 수정
              name={singroom.storeName} // 상점 이름으로 수정
              address={singroom.location} // 위치로 수정
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingroomListComponent;
