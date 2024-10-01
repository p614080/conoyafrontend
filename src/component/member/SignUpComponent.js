import React, { useState } from 'react';

const SignupComponent = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 회원 가입 처리 로직 추가
        console.log({ nickname, email, password });
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-md p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">회원 가입</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="nickname">닉네임</label>
                        <input
                            className="border border-gray-300 rounded w-full p-2"
                            type="text"
                            id="nickname"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="닉네임을 입력하세요"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">이메일</label>
                        <input
                            className="border border-gray-300 rounded w-full p-2"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">비밀번호</label>
                        <input
                            className="border border-gray-300 rounded w-full p-2"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white rounded w-full py-2 hover:bg-blue-600"
                        type="submit"
                    >
                        가입하기
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupComponent;