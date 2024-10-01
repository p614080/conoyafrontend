import { lazy, Suspense } from "react";

const {createBrowserRouter} = require("react-router-dom");

const Loading = <div>Loading</div>

const Main = lazy(() => import("../pages/MainPage"))

const Login = lazy(() => import("../pages/member/LoginPage"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main></Main></Suspense>
    }
   
])

export default root;