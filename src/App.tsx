import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import Footer from "./components/footer/Footer"
import Login from "./pages/login/Login"
import "./styles/global.scss"
import Product from "./pages/product/Product"
import User from "./pages/user/User"

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
         </div>
          <div className="contentContainer">
            <Outlet />
         </div>
        </div>
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: "/users/:id",
          element:<User />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: "/products/:id",
          element: <Product />
        }
      ]
    },
    {
      path: '/login',
      element : <Login />
    }
])
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  )
}

export default App
