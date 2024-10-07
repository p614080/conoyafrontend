import axios from "axios";
import axiosInstance from "./axiosInstance";

export const API_SERVER_HOST = `http://localhost:8080`

const host = `${API_SERVER_HOST}/owners`

  export const joinOwner = async (ownerData) => {
    try {
      const response = await axiosInstance.post(`${host}/join2`, ownerData);
      return response.data; // 성공적으로 응답을 반환합니다.
    } catch (error) {
      throw new Error(error.response.data.message || '회원가입 실패');
    }
  };
  