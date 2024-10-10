import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";

const UserTypeSelectionPage = () => {
  const navigate = useNavigate();
  const handleUserTypeSelect = (type) => {
    if(type === "user"){
      navigate("/user/join");
    }
    if(type === "owner"){
      navigate("/owner/join");
    }

  };

  return (
    <BasicLayout>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <>
            <h2 class="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
              가입 유형 선택
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={() => handleUserTypeSelect("user")}
                className="mt-5 px-4 py-2 bg-customCornflower text-white font-bold rounded hover:bg-violet-600"
              >
                일반회원
              </button>
              <button
                onClick={() => handleUserTypeSelect("owner")}
                className="mt-5 px-4 py-2 bg-orange-300 text-white font-bold rounded hover:bg-orange-500"
              >
                기업회원
              </button>
            </div>
          </>
        </div>
      </div>
    </BasicLayout>
  );
};

export default UserTypeSelectionPage;
