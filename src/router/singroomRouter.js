import { Suspense, lazy } from "react";

const Loading = <div>Loading....</div>

const List =  lazy(() => import("../pages/singroom/SingroomListPage"))

const Detail = lazy(() => import("../pages/singroom/SingroomDetailPage"))


const SingroomRouter = () => {

  return [
    {
      path:"",
      element: <Suspense fallback={Loading}><List/></Suspense>
    },
    {
      path:"list",
      element: <Suspense fallback={Loading}><List/></Suspense>
    },
    {
      path:"detail/:id",
      element: <Suspense fallback={Loading}><Detail/></Suspense>
    },
  ]
}

export default SingroomRouter
