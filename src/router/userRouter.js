import { Suspense, lazy } from "react";
import UserComponent from "../component/user/UserComponent"; 

const Loading = <div>Loading....</div>

const Join = lazy(() => import("../pages/user/JoinUserPage.js") )
const Login =  lazy(() => import("../pages/user/LoginPage"))


const MyPage = lazy(() => import("../pages/user/MyPage.js"))

const Favorites = lazy(() => import("../pages/user/FavoritesPage.js"))

const UserType = lazy(() => import ("../pages/user/UserTypeSelection.js"))

// const LogoutPage = lazy(() => import("../pages/user/LogoutPage"))

// const KakaoRedirect = lazy(() => import("../pages/user/KakaoRedirectPage"))

// const MemberModify = lazy(() => import("../pages/user/ModifyPage.js"))

const userRouter = () => {

  return [
    {
      path:"login",
      element: <Suspense fallback={Loading}><Login/></Suspense>
    },
    {
      path:"join",
      element: <Suspense fallback={Loading}><Join/></Suspense>
    },
    { path:"usertype",
      element: <Suspense fallback={Loading}><UserType/></Suspense>
    },
    // {
    //   path:"logout",
    //   element: <Suspense fallback={Loading}><LogoutPage/></Suspense>,
    // },
    // {
    //   path:"kakao",
    //   element: <Suspense fallback={Loading}><KakaoRedirect/></Suspense>,
    // },
    {
        path:"mypage",
        element: <Suspense fallback={Loading}><MyPage/></Suspense>
    },
     // {
    //   path:"modify",
    //   element: <Suspense fallback={Loading}><MemberModify/></Suspense>,
    // },
    {   path:"favorites",
        element: <Suspense fallback={Loading}><Favorites/></Suspense>

    },
    {
      path: "info",
      element: <UserComponent /> // UserComponent를 경로에 추가합니다.
    }

  ];

}

export default userRouter;
