import { Suspense, lazy } from "react";

const Loading = <div>Loading....</div>

const Login =  lazy(() => import("../pages/user/LoginPage"))

const SingUp = lazy(() => import("../pages/user/SignUpPage.js"))

const MyPage = lazy(() => import("../pages/user/MyPage.js"))

const Favorites = lazy(() => import("../pages/user/FavoritesPage.js"))

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
      path:"signup",
      element: <Suspense fallback={Loading}><SingUp/></Suspense>
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

    }

  ]

}

export default userRouter;
