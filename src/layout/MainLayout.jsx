import { Outlet } from "react-router"
import QuizProvider from "../context/QuizProvider"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

function MainLayout() {
  return (
    <QuizProvider>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </QuizProvider>


  )
}

export default MainLayout