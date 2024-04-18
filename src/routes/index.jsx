import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layout/index.jsx";
import Home from "~/pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "city/:city",
        element: <Home />,
      },
      {
        path: "*",
        element: (
          <div className=" flex justify-center  items-center text-5xl text-white">
            Sakin ol, bu sayfa henüz yapılmadı.
          </div>
        ),
      },
    ],
  },
]);

export default routes;
