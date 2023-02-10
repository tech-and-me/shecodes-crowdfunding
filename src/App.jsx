import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const RouterWrapper = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>)
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <RouterWrapper/>,
    children: [
      {
        path: "/",
        element:<HomePage />
      },
      {
        path:"/project",
        element:<ProjectPage />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;