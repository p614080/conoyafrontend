import axios from "axios";
import axiosInstance from "./axiosInstance";

export const API_SERVER_HOST = `http://localhost:8080`

const host = `${API_SERVER_HOST}/user`

export const joinUser = async (userData) => {
    try {
      const response = await axiosInstance.post(`${host}/join`, userData);
      return response.data; // 성공적으로 응답을 반환합니다.
    } catch (error) {
      throw new Error(error.response.data.message || '회원가입 실패');
    }
  };
  