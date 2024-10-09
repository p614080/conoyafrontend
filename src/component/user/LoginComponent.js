import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // navigate를 useNavigate로 수정
import { loginUser } from "../../api/userApi"; // API 함수 import
import { loginOwner } from "../../api/ownerApi"; 
import { useAuth } from "../../context/AuthContext"; // AuthContext import

const LoginComponent = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userType, setUserType] = useState("btnLoginUser");

  const { login } = useAuth(); // AuthContext의 login 함수 가져오기
  const navigate = useNavigate(); // navigate 사용

  // 회원 유형 선택
  const handleUserTypeSelect = (id) => {
    setUserType(id);
  };

  // 로그인 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let data;

      if (userType === "btnLoginUser") {
        // 일반회원 로그인
        data = await loginUser(userEmail, userPassword);
        alert("일반회원 로그인 성공");
      } else if (userType === "btnOwnerUser") {
        // 기업회원 로그인
        data = await loginOwner(userEmail, userPassword);
        alert("기업회원 로그인 성공");
      } else {
        throw new Error("회원 유형을 선택해 주세요.");
      }

      // 로그인 성공 후 처리
      login(data.user); // AuthContext의 login 호출
      sessionStorage.setItem('user', JSON.stringify(data.user));
      navigate("/"); // 리다이렉션

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
          로그인
        </h2>
        <div className="w-full mt-5">
          <button
            id="btnLoginUser"
            type="button"
            onClick={() => handleUserTypeSelect("btnLoginUser")}
            className={`w-1/2 py-3 font-bold rounded transition-all duration-300 ${
              userType === "btnLoginUser" 
                ? "bg-indigo-800 text-white scale-105 border-1 border-indigo-600 shadow-lg"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            일반회원
          </button>
          <button
            id="btnOwnerUser"
            type="button"
            onClick={() => handleUserTypeSelect("btnOwnerUser")}
            className={`w-1/2 py-3 font-bold rounded transition-all duration-300 ${
              userType === "btnOwnerUser" 
                ? "bg-cyan-800 text-white scale-105 border-1 border-cyan-600 shadow-lg"
                : "bg-cyan-600 text-white hover:bg-cyan-700"
            }`}
          >
            기업회원
          </button>
        </div>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              이메일
            </label>
            <div className="mt-2">
              <input
                id="userEmail"
                name="userEmail"
                type="email"
                autoComplete="email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                비밀번호
              </label>
              <div className="text-sm">
                <a href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-400"
                >
                  비밀번호를 잊어버리셨나요?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="userPassword"
                name="userPassword"
                type="password"
                autoComplete="current-password"
                required
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={loading}
            >
              {loading ? '로딩 중...' : '로그인'}
            </button>
          </div>
        </form>
        {error && <p className="text-red-600">{error}</p>}
        <div>
          <Link to={"/user/usertype"}>
            <button
              type="button"
              className="flex mt-4 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
