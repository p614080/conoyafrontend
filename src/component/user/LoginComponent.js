import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { loginUser } from "../../api/userApi"; 
import { loginOwner } from "../../api/ownerApi"; 
import { useAuth } from "../../context/AuthContext"; 

const LoginComponent = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userType, setUserType] = useState("user");

  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let data;

      if (userType === "user") {
        data = await loginUser(userEmail, userPassword);
        alert("일반회원 로그인 성공");
      } else if (userType === "owner") {
        data = await loginOwner(userEmail, userPassword);
        alert("기업회원 로그인 성공");
      } else {
        throw new Error("회원 유형을 선택해 주세요.");
      }

      const userInfo = { ...data, userType };
      
     // 로그인 후 정보 저장
    sessionStorage.setItem('user', JSON.stringify(userInfo));
    sessionStorage.setItem('userEmail', userEmail); // 이메일 개별 저장
    login(userInfo);
    navigate("/");

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
            type="button"
            onClick={() => handleUserTypeSelect("user")}
            className={`w-1/2 py-3 font-bold rounded transition-all duration-300 ${
              userType === "user" 
                ? "bg-violet-500 text-white scale-105 border-1 hover:bg-indigo-700"
                : "bg-customCornflower text-white hover:bg-indigo-700"
            }`}
          >
            일반회원
          </button>
          <button
            type="button"
            onClick={() => handleUserTypeSelect("owner")}
            className={`w-1/2 py-3 font-bold rounded transition-all duration-300 ${
              userType === "owner" 
                ? "bg-orange-400 text-white scale-105 border-1 hover:bg-orange-300 shadow-lg"
                : "bg-orange-200 text-white hover:bg-orange-300"
            }`}
          >
            기업회원
          </button>
        </div>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium leading-6 text-gray-900">
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
              <label htmlFor="userPassword" className="block text-sm font-medium leading-6 text-gray-900">
                비밀번호
              </label>
              <div className="text-sm">
                <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-400">
                  비밀번호를 잊어버리셨나요?
                </Link>
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
              className="flex w-full justify-center rounded-md bg-customCornflower px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customCornflower"
              disabled={loading}
            >
              {loading ? '로딩 중...' : '로그인'}
            </button>
          </div>
        </form>
        {error && <p className="text-red-600">{error}</p>}
        <div>
          <Link to="/user/usertype">
            <button
              type="button"
              className="flex mt-4 w-full justify-center rounded-md bg-customCornflower px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customCornflower"
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
