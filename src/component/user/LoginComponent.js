import { Link } from "react-router-dom";
import React, { useState } from "react";
import { loginUser } from "../../api/userApi"; // API 함수 import

const LoginComponent = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log(userEmail);
      console.log(userPassword)
      const data = await loginUser(userEmail, userPassword); // loginUser 함수 사용
      // 로그인 성공 후 처리 (예: 상태 업데이트, 리다이렉션 등)
    
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
            className="w-1/2 justify-center py-2 text-white font-bold bg-indigo-600 rounded hover:bg-indigo-500"
          >
            일반회원
          </button>
          <button
            id="btnLoginUser"
            className="w-1/2 ml-auto justify-center py-2 text-white font-bold bg-cyan-600 rounded hover:bg-cyan-500"
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
                <a
                  href="#"
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
