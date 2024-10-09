import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // AuthContext import

const BasicHeader = () => {
  const { state, logout } = useAuth();
  const userInfo = state.user; // state.user로 변경

  console.log(userInfo);

  return (
    <div className="bg-white font-bold pl-7">
      <div className="flex items-center pt-10 pl-2 pb-7 space-x-2">
        {/* 로고 */}
        <h1 className="text-2xl font-bold">코노야</h1>
        {/* 검색창 */}
        <div className="flex justify-center w-full max-w-sm pl-7">
          {/* 검색창 코드 */}
        </div>
      </div>
      {/* 네비게이션 */}
      <nav>
        <ul className="flex space-x-8 ml-2 list-none">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
                <Link to="/singroom/list">노래방찾기</Link>
              </li>
          {userInfo ? (
            <>
             
              <li className="hover:underline">
                <Link to="/user/favorites">즐겨찾는 노래방</Link>
              </li>
              <li className="hover:underline">
                <Link to="/user/mypage">Mypage</Link>
              </li>
              <li className="hover:underline">
                <button onClick={logout} className="hover:text-red-600">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="hover:underline">
              <Link to="/user/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default BasicHeader;
