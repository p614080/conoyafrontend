import { lazy, Suspense } from "react";

const {createBrowserRouter} = require("react-router-dom");

const Loading = <div>Loading</div>

//메인페이지
const Main = lazy(() => import("../pages/MainPage"))
//즐겨찾기
const Bookmark= lazy (() => import("../pages/bookmark/BookmarkPage"))
//로그인
const Login = lazy(() => import("../pages/member/LoginPage"))
//마이페이지
const Mypage = lazy(() => import("../pages/member/MyPage"))



const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "bookmark",
        element: <Suspense fallback={Loading}><Bookmark/></Suspense>
    },
    {
        path: "login",
        element: <Suspense fallback={Loading}><Login/></Suspense>
    },
    {
        path: "mypage",
        element: <Suspense fallback={Loading}><Mypage/></Suspense>
    }
   
])

export default root;