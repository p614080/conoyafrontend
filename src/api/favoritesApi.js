import axiosInstance from "./axiosInstance";

export const API_SERVER_HOST = `http://localhost:8080`;

const host = `${API_SERVER_HOST}/api/v1/favorites`;

//사용자 즐겨찾기 함수 추가
export const addUserFavorites = async (userId, ownerId) => {
    try {
      const response = await axiosInstance.post(`${host}/add/${userId}/${ownerId}`);
      return response.data; // 요청이 성공하면 응답 데이터를 반환합니다.
    } catch (error) {
      console.error('즐겨찾기 추가 중 오류 발생:', error); // 오류를 콘솔에 로그하여 디버깅에 도움을 줍니다.
      throw new Error('즐겨찾기를 추가할 수 없습니다. 나중에 다시 시도해 주세요.'); // UI에서 처리할 수 있는 설명적인 오류를 던집니다.
    }
  };

export const getUserFavorites = async (userId) => {
    try {
        const response = await axiosInstance.get(`${host}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('즐겨찾기를 가져올 수 없습니다.');
        throw new Error('즐겨찾기를 가져올 수 없습니다. 나중에 다시 시도해주세요');
    }
}