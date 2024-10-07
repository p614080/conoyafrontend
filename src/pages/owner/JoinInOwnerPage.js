import { useState } from "react";
const JoinInOwnerPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('individual'); // 기본값은 일반회원
    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 가입 처리 로직 추가
        console.log({ email, password, confirmPassword, userType });
    };

    return(
        
        <div>
             <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl mb-4">회원 가입</h2>

            <div className="mb-4">
                <label className="block text-gray-700">회원 유형</label>
                <select 
                    value={userType} 
                    onChange={(e) => setUserType(e.target.value)} 
                    className="w-full p-2 border rounded"
                >
                    <option value="individual">일반회원</option>
                    <option value="business">기업회원</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">이메일</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">비밀번호</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700">비밀번호 확인</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* 기업회원일 경우 추가 정보 입력 */}
            {userType === 'business' && (
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-gray-700">회사명</label>
                    <input
                        type="text"
                        id="companyName"
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">가입하기</button>
        </form>
        </div>
    )
}
export default JoinInOwnerPage;