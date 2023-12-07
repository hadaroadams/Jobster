import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {AddJob,AllJobs,DashBoard,Profile,Stats} from "./pages/dashboard"

const router= createBrowserRouter([
  {
    path:'/',
    element:<Landing/>,
    index:true
    
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/dashboard',
    element:<DashBoard/>,
    children:[
      {
        path:'/dashboard/stat',
        element:<Stats/>,
        index:true
      },
      {
        path:'/dashboard/addjob',
        element:<AddJob/>
      },
      {
        path:'/dashboard/alljobs',
        element:<AllJobs/>,
      },
      {
        path:'/dashboard/profile',
        element:<Profile/>
      }
    ]
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
