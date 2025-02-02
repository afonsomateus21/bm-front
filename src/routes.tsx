import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { UserRegister } from "./pages/UserRegister";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  }, 
  {
    path: '/register',
    element: <UserRegister />
  }
])