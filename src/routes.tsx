import { createBrowserRouter } from "react-router";
import { Home, Login, UserRegister } from "./pages";
import { LoginRoute, ProtectedRoute } from "./components";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginRoute />,
    children: [
      {
        path: "login",
        element: <Login />
      }
    ]
  }, 
  {
    path: '/register',
    element: <UserRegister />
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: "home",
        element: <Home />
      },
    ]
  }
])