import { createBrowserRouter, redirect } from "react-router"
import Home from "../components/home"
import Quiz from "../components/Quiz"
import QuizResult from "../components/QuizResult"
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
        element: <QuizResult />,
        handle: { hide: true }

      },
      {
        path: "*",
        element: <div>not found</div>
      }
    ]
  }
])
export default MyRouter

