import React, { useState } from "react";

const SignupComponent = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원 가입 처리 로직 추가
    console.log({ nickname, email, password });
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
          회원가입
        </h2>
        <div className="w-full mt-5 h-full">
          {/* <Link to={"/user/signup"}>
            <button
              id="btnLoginUser"
              className="w-1/2 justify-center py-2 text-white font-bold bg-indigo-600 rounded hover:bg-indigo-500"
            >
              일반회원
              <br />
              가입
            </button>
          </Link>
          <Link to={"/owner/signup"}>
            <button
              id="btnLoginUser"
              className="w-1/2 ml-auto justify-center py-2 text-white font-bold bg-cyan-600 rounded hover:bg-cyan-500"
            >
              기업회원 <br /> 가입
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
