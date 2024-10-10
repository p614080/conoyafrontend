import axiosInstance from "./axiosInstance";

export const API_SERVER_HOST = `http://localhost:8080`

const ownerHost = `${API_SERVER_HOST}/owners`

  export const joinOwner = async (ownerData) => {
    try {
      const JoinDTO = {
        ownerEmail : ownerData.ownerEmail,                             
        ownerPassword : ownerData.ownerPassword,                      
        ownerPasswordCheck : ownerData.ownerPasswordCheck,
        ownerNum : ownerData.ownerNum,
        userNickname : ownerData.userNickname,
        storeName : ownerData.storeName,   
        location : ownerData.location
      }
      const response = await axiosInstance.post(`${ownerHost}/join2`, JoinDTO);
      return response.data; // 성공적으로 응답을 반환합니다.
    } catch (error) {
      throw new Error(error.response.data.message || '회원가입 실패');
    }
  };

  export const loginOwner = async (UserEmail, UserPassword) => {
    try {
      const ownerDto = JSON.stringify({ ownerEmail: UserEmail, ownerPassword: UserPassword }); // 변수 이름 수정
      const response = await fetch(`${ownerHost}/login`, { // 실제 API URL로 수정
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: ownerDto,
      });
  
      // 응답 상태가 200이 아닐 경우 에러 처리
      if (!response.ok) {
        const errorText = await response.text(); // 응답 텍스트를 가져옵니다.
        throw new Error(`로그인에 실패했습니다: ${errorText}`); // 에러 메시지에 추가
      }
  
      const data = await response.json(); // JSON 파싱
      return data;
  
    } catch (error) {
      throw new Error(`로그인 처리 중 오류가 발생했습니다: ${error.message}`); // 에러 메시지 처리
    }
  };

  export const getSingRoomInfo = async (id) => {
  try {
    const response = await axiosInstance.get(`${ownerHost}/detail/${id}`);
    return {
      owner: response.data.owner, // 노래방 소유자 정보
      rooms: response.data.rooms,   // 노래방 방 정보
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || "회원 정보 조회 실패");
  }
};
  
  export const getOwnerInfo = async () => {
    try {
      const response = await axiosInstance.get(`${ownerHost}/info`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "회원 정보 조회 실패");
    }
  };

  export const changeOwnerPassword = async (changePasswordData) => {
    try {
      const response = await axiosInstance.put(`${ownerHost}/change-password`, changePasswordData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "비밀번호 변경 실패");
    }
  };
  
  export const updateSingroomInfo = async (singroomData) => {
    try {
      const response = await axiosInstance.put(`${ownerHost}/singroom/update`, singroomData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "노래방 정보 수정 실패");
    }
    
  };

  // 노래방리스트 
  export const getSingroomList = async (singroomData) => {
    try {
      const response = await axiosInstance.get(`${ownerHost}/list`, {
        params: singroomData, // 쿼리 파라미터로 전달
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "리스트 불러오기 실패");
    }
  };