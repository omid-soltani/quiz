import { createBrowserRouter, redirect } from "react-router"
import Home from "../components/home"
import Quiz from "../components/Quiz"
import MainLayout from "../layout/MainLayout"

const MyRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => redirect("/home")
      },
      {
        path: "home",
        element: <Home />

      },
      {
        path: "quiz",
        element: <Quiz />

      },
      {
        path: "result",
        element: <div>result</div>

      },
      {
        path: "*",
        element: <div>not found</div>
      }
    ]
  }
])
export default MyRouter

