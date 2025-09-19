import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import BookPage from './pages/book.jsx';
import './styles/global.css'
import TodoApp from './components/todo/TodoApp.jsx';
import ErrorPage from './components/layout/error.jsx';

const router = createBrowserRouter([
  {
    // định nghĩa component, điều hướng router
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // kế thừa layout của cha
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/books",
        element: <BookPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  /// tính năng của React chạy 2 lần giúp phát hiện bug và debug dễ hơn
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
