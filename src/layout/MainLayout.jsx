import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

function MainLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>

  )
}

export default MainLayout