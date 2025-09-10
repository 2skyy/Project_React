// Main 페이지들을 구성하기 위한 Route를 생성
// 만드는 이유 ? 관리하기 쉽도록 하기 위해서
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home";
import Settings from "../components/settings";
import Layout from "../Layout/Layout";
//main 페이지들이 구성된 분배기(Router)
// export : 외부에서 사용 가능 허가
export const router = createBrowserRouter([
  {
    path: "/",
    //하위 페이지에 적용될 공통 Element
    element: <Layout />,
    //하위 페이지 구성 ex.<Routes>
    children: [
      { path: "", element: <Home /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
