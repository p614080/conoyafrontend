import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // 돋보기 아이콘
const BasicHeader = () => {
  return (
    <div className="bg-white font-bold pl-7">
      <div className="flex items-center pt-10 pl-2 pb-7 space-x-2 list-none">
        {/* 로고 */}
        <div>
          <h1 className="text-2xl font-bold">코노야</h1>
        </div>
        {/* 검색창 */}
        <div className="flex justify-center w-full max-w-sm pl-7">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="border-cyan-600 border-b-2 focus:outline-none w-full"
            />
          </div>
          <div className="flex justify-center pl-2">
            <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-cyan-600 size-5"
              />
            </button>
          </div>
        </div>
      </div>
      {/* 네비게이션 */}
      <div>
        <nav>
          <ul className="flex space-x-8 ml-2 list-none">
            <li className="hover:underline">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/singroom/list"}>노래방찾기</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/user/favorites"}>즐겨찾는 노래방</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/user/mypage"}>Mypage</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/user/login"}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BasicHeader;
