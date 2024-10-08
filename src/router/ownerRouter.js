import { lazy, Suspense } from "react"

const Loading =<div>Loading....</div>

const Join = lazy(() => import("../pages/owner/JoinOwnerPage"))

const ownerRouter =() =>{
    return [
        {
            path:"join",
            element: <Suspense fallback={Loading}><Join/></Suspense>
        }
    ]
}
export default ownerRouter