import { useNavigate } from "react-router-dom"; // 추가
import SingroomComponent from "./SingroomComponent";
import { useState } from "react";


const SingroomListComponent = () => {
  const navigate = useNavigate(); // navigate 훅 사용
  const [searchTerm, setSearchTerm] = useState("");

  const singrooms = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x300/1",
      name: "상품 이름 1",
      price: "$100",
      address: "서울시 강남구",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x300/2",
      name: "상품 이름 2",
      price: "$200",
      address: "부산시 해운대구",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x300/3",
      name: "상품 이름 3",
      price: "$300",
      address: "대구시 중구",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x300/4",
      name: "상품 이름 4",
      price: "$400",
      address: "제주시 조천읍",
    },
  ];

  const filteredSingrooms = singrooms
    .filter((singroom) => singroom.name.includes(searchTerm))
    .sort((a, b) => {
      return 0;
    });

  return (
    <div>
      <div className="flex justify-center w-full mt-3">
       
        <input
          type="text"
          className="ml-1 border w-56 h-8 border-b-2 rounded-md"
          placeholder="노래방 이름을 입력하세요"
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-cyan-500 pl-2 pr-2 rounded-md text-white font-bold ml-1"
        >
          검색
        </button>
      </div>
      <div className="mt-5 pl-4 border border-gray-300y- rounded-">인기순 평점순 등록일순 가격순</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 border mt-1">
        {filteredSingrooms.map((singroom) => (
          <div
            key={singroom.id}
            onClick={() => navigate(`/singroom/detail/${singroom.id}`)} // 클릭 시 상세 페이지로 이동
            className="cursor-pointer" // 마우스 커서 변경
          >
            <SingroomComponent
              id={singroom.id}
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
