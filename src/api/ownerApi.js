import axiosInstance from "./axiosInstance";

export const API_SERVER_HOST = `http://localhost:8080`;

const ownerHost = `${API_SERVER_HOST}/owners`;

// 점주 회원가입
export const joinOwner = async (ownerData) => {
  try {
    const joinDTO = {
      ownerEmail: ownerData.ownerEmail,
      ownerPassword: ownerData.ownerPassword,
      ownerPasswordCheck: ownerData.ownerPasswordCheck,
      ownerNum: ownerData.ownerNum,
      userNickname: ownerData.userNickname,
      storeName: ownerData.storeName,
      location: ownerData.location,
    };
    const response = await axiosInstance.post(`${ownerHost}/join`, joinDTO);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "회원가입 실패");
  }
};

// 점주 로그인
export  const loginOwner = async (ownerEmail, ownerPassword) => {
  try {
    const ownerDto = { ownerEmail, ownerPassword };
    const response = await axiosInstance.post(`${ownerHost}/login`, ownerDto);
    
    // 응답 상태 코드가 200 범위에 있지 않은 경우 오류를 발생
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`로그인에 실패했습니다: ${response.data?.message || "알 수 없는 오류"}`);
    }

    // 로그인 성공 시 데이터를 반환
    return response.data;
  } catch (error) {
    // 서버에서 반환된 에러 메시지가 있을 경우 이를 사용
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(`로그인 처리 중 오류가 발생했습니다: ${errorMessage}`);
  }
};

// 노래방 정보 조회
export const getSingRoomInfo = async (id) => {
  try {
    const response = await axiosInstance.get(`${ownerHost}/detail/${id}`);
    return {
      owner: response.data.owner,
      rooms: response.data.rooms,
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || "회원 정보 조회 실패");
  }
};

// 점주 정보 조회
export const getOwnerInfo = async () => {
  try {
    const response = await axiosInstance.get(`${ownerHost}/mypage?ownerEmail=${sessionStorage.getItem('userEmail')}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "회원 정보 조회 실패");
  }
};

export const changeOwnerPassword = async (changePasswordData) => {
  try {
    const { ownerEmail, ...passwordData } = changePasswordData;

    // ownerEmail을 쿼리 파라미터로 추가
    const response = await axiosInstance.put(
      `${ownerHost}/change-password?ownerEmail=${ownerEmail}`,
      passwordData
    );
    
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "비밀번호 변경 실패");
  }
};

// 노래방 정보 업데이트
export const updateSingroomInfo = async (singroom) => {
  try {
    const response = await axiosInstance.put(`${ownerHost}/store-info`, singroom);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "노래방 정보 수정 실패");
  }
};

// 노래방 리스트 조회
export const getSingroomList = async (queryParams) => {
  try {
    const response = await axiosInstance.get(`${ownerHost}/list`, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "리스트 불러오기 실패");
  }
};

// 점주 정보와 노래방 정보 조회
export const fetchOwnerInfo = async () => {
  try {
    const data = await getOwnerInfo();
    return {
      ownerEmail: data.ownerEmail,
      ownerNum: data.ownerNum,
      location: data.location,
      singroom: {
        name: data.singroom?.name,
        price: data.singroom?.price,
        image: data.singroom?.image,
        roomNumber: data.singroom?.roomNumber,
        roomCapacity: data.singroom?.roomCapacity,
      },
    };
  } catch (error) {
    console.error("회원 정보를 가져오는 중 오류가 발생했습니다.", error);
    throw error;
  }
};
