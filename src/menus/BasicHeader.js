import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // 돋보기 아이콘

const BasicHeader = () => {
  return (
    <header className="bg-white text-cyan-900 p-5">
      <div className="flex items-center space-x-6 list-none">
        <div className="ml-10">
          <h1 className="text-2xl font-bold ">코노야</h1>
        </div>
        {/* <div className="flex justify-center ">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full border-b-2 border-cyan-600 focus:outline-none " // 최대 너비 설정
          />
          <div className="justify-center pl-7">
            <button className="flex justify-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-cyan-600 "
              />
            </button>
          </div>
        </div> */}
      </div>
      <nav>
        <ul className="flex space-x-8 ml-2 list-none pt-5">
          <li className="hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/member/bookmark"}>즐겨찾기</Link>
          </li>
          <li>
            <Link to={"/member/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/member/mypage"}>Mypage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default BasicHeader;
