import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AddJob, AllJobs, DashBoard, Profile, Stats } from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <Landing />,
    index: true,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "/",
        element: <Stats />,
      },
      {
        path: "/addjob",
        element: <AddJob />,
      },
      {
        path: "/alljobs",
        element: <AllJobs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
