import { Link } from "react-router-dom";
import React, {userState} from "react";

const LoginComponent = () => {


  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              이메일
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                비밀번호
              </label>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-400"
                >
                  비밀번호를 잊어버리셨나요?
                </a>
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              로그인
            </button>
          </div>
        </form>
        <div>
          <Link to={"/user/usertype"}>
            <button
              type="button"
              class="flex mt-4 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
