import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // 돋보기 아이콘

const BasicHeader = () => {
    return (
        <header className="bg-slate-100 text-cyan-900 p-4">
            <div className="flex space-x-6 list-none">
                <h1 className="text-2xl font-bold ml-4">코노야</h1>
                <input
                    type="text"
                    className="ml-96 w-80 flex justify-center"
                    placeholder="검색어를 입력하세요"
                />
                <button
                    id="btnSearch"
                    className="bg-cyan-900 text-white hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50 rounded px-4 py-2 flex items-center"
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2"/>
                </button>
            </div>
            <nav>
                <ul className="flex space-x-8 ml-2 list-none pt-5">
                    <li className="hover:underline">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li><Link to={'/member/bookmark'}>즐겨찾기</Link></li>
                    <li><Link to={'/member/login'}>Login</Link></li>
                    <li><Link to={'/member/mypage'}>Mypage</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default BasicHeader;
