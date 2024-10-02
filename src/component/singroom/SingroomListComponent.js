import { useNavigate } from 'react-router-dom'; // 추가
import SingroomComponent from "./SingroomComponent";
import { useState } from "react";

const SingroomListComponent = () => {
  const navigate = useNavigate(); // navigate 훅 사용
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const singrooms = [
    { id: 1, image: "https://via.placeholder.com/400x300/1", name: "상품 이름 1", price: "$100", address: "서울시 강남구" },
    { id: 2, image: "https://via.placeholder.com/400x300/2", name: "상품 이름 2", price: "$200", address: "부산시 해운대구" },
    { id: 3, image: "https://via.placeholder.com/400x300/3", name: "상품 이름 3", price: "$300", address: "대구시 중구" },
    { id: 4, image: "https://via.placeholder.com/400x300/4", name: "상품 이름 4", price: "$400", address: "제주시 조천읍" },
  ];

  const filteredSingrooms = singrooms
    .filter(singroom => singroom.name.includes(searchTerm))
    .sort((a, b) => {
      if (sortOption === "price") {
        return parseInt(a.price.replace(/\$/g, "")) - parseInt(b.price.replace(/\$/g, ""));
      }
      return 0;
    });

  return (
    <div>
      <div className="flex justify-center w-full">
        <select className="border-2 rounded-md" onChange={(e) => setSortOption(e.target.value)}>
          <option value="default">정렬 기준</option>
          <option value="price">가격순</option>
        </select>
        <input 
          type="text" 
          className="bg-slate-300 w-56 h-8 border-b-2 rounded-md" 
          placeholder="검색어를 입력하세요"
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="bg-red-50">리뷰순 가격순 평점순</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredSingrooms.map((singroom) => (
          <div 
            key={singroom.id} 
            onClick={() => navigate(`/singroom/detail/${singroom.id}`)} // 클릭 시 상세 페이지로 이동
            className="cursor-pointer" // 마우스 커서 변경
          >
            <SingroomComponent
              image={singroom.image}
              name={singroom.name}
              price={singroom.price}
              address={singroom.address}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingroomListComponent;
