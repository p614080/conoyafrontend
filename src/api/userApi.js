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
 
export const loginUser = async (email, password) => {
    const response = await fetch(`${host}/login`, { // 실제 API URL로 수정
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
    
      // 응답 상태가 200이 아닐 경우 에러 처리
      if (!response.ok) {
        const errorText = await response.text(); // 응답 텍스트를 가져옵니다.
        throw new Error(`로그인에 실패했습니다: ${errorText}`); // 에러 메시지에 추가
      }
    
      const data = await response.json(); // JSON 파싱
      return data;
    };