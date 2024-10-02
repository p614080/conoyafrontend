import { lazy, Suspense } from "react";
import memberRouter from "./memberRouter";
import singroomRouter from "./singroomRouter";

const {createBrowserRouter} = require("react-router-dom");

const Loading = <div>Loading</div>

//메인페이지
const Main = lazy(() => import("../pages/MainPage"))
//공지사항
const Notice = lazy(() => import("../pages/NoticePage"))
//가입페이지(일반회원/기업회원 선택)
const SignUp = lazy(() => import("../pages/member/SignUpPage"))



const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "notice",
        element: <Suspense fallback={Loading}><Notice/></Suspense>
    },
    {
        path: "signup",
        element: <Suspense fallback={Loading}><SignUp/></Suspense>
    },
    {
        path: "member",
        children: memberRouter()
    },
    {
        path: "singroom",
        children: singroomRouter()
    }
])

export default root;