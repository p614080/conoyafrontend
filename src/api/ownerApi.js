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

  export const getOwnerInfo = async () => {
    try {
      const response = await axiosInstance.get(`${host}/info`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "회원 정보 조회 실패");
    }
  };

  export const changeOwnerPassword = async (changePasswordData) => {
    try {
      const response = await axiosInstance.put(`${host}/change-password`, changePasswordData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "비밀번호 변경 실패");
    }
  };
  
  export const updateSingroomInfo = async (singroomData) => {
    try {
      const response = await axiosInstance.put(`${host}/singroom/update`, singroomData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "노래방 정보 수정 실패");
    }
  };