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