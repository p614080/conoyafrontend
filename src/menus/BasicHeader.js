import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // 돋보기 아이콘

const BasicHeader = () => {
  return (
    <header className="bg-white p-5 font-bold">
      <div className="flex items-center space-x-2 list-none">
        {/* 로고 */}
        <div className="ml-10 mr-10 flex">
          <h1 className="text-2xl font-bold">코노야</h1>
        </div>
        {/* 검색창 */}
        <div className="flex justify-center w-full max-w-sm">
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
          <ul className="flex space-x-8 ml-2 list-none pt-5">
            <li className="hover:underline">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/singroom/list"}>노래방찾기</Link>
            </li>
            <li>
              <Link to={"/user/favorites"}>즐겨찾는 노래방</Link>
            </li>
            <li>
              <Link to={"/user/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/user/mypage"}>Mypage</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="border-t-2 mt-3 border-cyan-600 w-full" /> 
    </header>
  );
};

export default BasicHeader;
