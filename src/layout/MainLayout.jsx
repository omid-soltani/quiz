import { Outlet, useMatches } from "react-router"
import QuizProvider from "../context/QuizProvider"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

function MainLayout() {
  const matches = useMatches()
  const isHide = matches.some(match => match.handle?.hide)

  return (
    <QuizProvider>
      {!isHide && <Header />}
      <Main>
        <Outlet />
      </Main>
      {!isHide && <Footer />}

    </QuizProvider>


  )
}

export default MainLayout