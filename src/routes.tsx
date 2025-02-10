import { createBrowserRouter } from "react-router";
import { Home, Login, UserRegister } from "./pages";
import { ProtectedRoute } from "./components";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
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