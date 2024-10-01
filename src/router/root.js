import { lazy, Suspense } from "react";
import memberRouter from "./memberRouter";

const {createBrowserRouter} = require("react-router-dom");

const Loading = <div>Loading</div>

//메인페이지
const Main = lazy(() => import("../pages/MainPage"))



const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "member",
        children: memberRouter()
    }
])

export default root;