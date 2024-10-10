import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../../context/AuthContext'; // useAuth 훅 가져오기
import { addUserFavorites } from "../../api/favoritesApi"; // 즐겨찾기 추가 API 가져오기

const SingroomComponent = ({ image, name, address, ownerId }) => {
  const { state } = useAuth(); // 로그인 상태 가져오기
  const userInfo = state.user; // 사용자 정보
 
  // 별 아이콘 클릭 핸들러 함수
  const handleStarClick = async (e) => {
    console.log("--------------------------클릭하고 ownwerId" + ownerId);
    e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전파되는 것을 막음
    if (userInfo) {
      // 사용자가 로그인한 경우
      try {
        await addUserFavorites(userInfo.userId, ownerId); // 즐겨찾기 추가 API 호출
        alert("즐겨찾기에 추가되었습니다!"); // 성공 메시지
      } catch (error) {
        alert("즐겨찾기 추가 중 오류가 발생했습니다."); // 오류 메시지
      }
    } else {
      // 사용자가 로그인하지 않은 경우
      alert("로그인이 필요합니다!"); // 로그인 메시지
    }
  };

  return (
    <div>
      <div className="border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">{name}</h2>
            <FontAwesomeIcon
              icon={faStar}
              className="text-gray-300 text-xl cursor-pointer" // 커서 포인터 추가
              onClick={handleStarClick}
            />
          </div>
          <p className="text-gray-600">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default SingroomComponent;
