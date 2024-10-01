import { Suspense, lazy } from "react";

const Loading = <div>Loading....</div>

const Login =  lazy(() => import("../pages/member/LoginPage"))

const SingUp = lazy(() => import("../pages/member/SignUpPage.js"))

const MyPage = lazy(() => import("../pages/member/MyPage.js"))

const Bookmark = lazy(() => import("../pages/member/BookmarkPage.js"))

// const LogoutPage = lazy(() => import("../pages/member/LogoutPage"))

// const KakaoRedirect = lazy(() => import("../pages/member/KakaoRedirectPage"))

const MemberModify = lazy(() => import("../pages/member/ModifyPage.js"))

const memberRouter = () => {

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
    {   path:"bookmark",
        element: <Suspense fallback={Loading}><Bookmark/></Suspense>

    }

  ]

}

export default memberRouter
