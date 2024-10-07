import { lazy, Suspense } from "react";
import userRouter from "./userRouter";
import singroomRouter from "./singroomRouter";
import onwerRouter from "./ownerRouter.js";

const {createBrowserRouter} = require("react-router-dom");

const Loading = <div>Loading</div>

//메인페이지
const Main = lazy(() => import("../pages/MainPage"))
//공지사항
const Notice = lazy(() => import("../pages/NoticePage"))
//가입페이지(일반회원/기업회원 선택)
const SignUp = lazy(() => import("../pages/user/SignUpPage"))



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
        path: "user",
        children: userRouter()
    },
    {
        path: "singroom",
        children: singroomRouter()
    },
    {
        path: "owner",
        children: onwerRouter()  
    }
])

export default root;