import React, { createContext, useContext, useReducer } from "react";

// Context 생성
const AuthContext = createContext();

// 초기 상태
const initialState = {
    user: null,
};

// 액션 타입 정의
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// 상태 관리용 리듀서
const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { user: action.payload };
        case LOGOUT:
            return { user: null };
        default:
            return state;
    }
}

// Provider 컴포넌트
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
   
    const login = (user) => {
        console.log("Logging in:", user);
        dispatch({ type: LOGIN, payload: user });
    };

    const logout = () => {
        dispatch({ type: LOGOUT });
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Context 사용을 위한 커스텀 훅
export const useAuth = () => {
    return useContext(AuthContext);
};
