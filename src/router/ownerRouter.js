import { lazy, Suspense } from "react"

const Loading =<div>Loading....</div>

const Join = lazy(() => import("../pages/owner/JoinOwnerPage"))
const OwnerMyPage = lazy(()=> import("../pages/owner/OwnerMyPage"))


const ownerRouter =() =>{
    return [
        {
            path:"join",
            element: <Suspense fallback={Loading}><Join/></Suspense>
        },
        {
            path:"mypage",
            element: <Suspense fallback={Loading}><OwnerMyPage/></Suspense>
        }
    ]
}
export default ownerRouter