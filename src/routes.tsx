import { createBrowserRouter } from "react-router";
import { Login, UserRegister } from "./pages";

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