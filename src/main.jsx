import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup'
import VerifyOTP from './pages/VerifyOTP'
import Login from './pages/Login'
import OAuthSuccess from './pages/0AuthSuccess'
import Welcome from './pages/Welcome'
import Notes from './pages/Notes'
import { getToken } from './utils/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/verify-otp',
    element: <VerifyOTP />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/oauth-success',
    element: <OAuthSuccess />,
  },
  {
    path: '/welcome',
    element: <RequireAuth><Welcome /></RequireAuth>,
  },
  {
    path: '/notes',
    element: <RequireAuth><Notes /></RequireAuth>,
  },
]);

function RequireAuth({ children }){
const token = getToken()
if(!token) return <Navigate to="/login" replace />
return children
}

createRoot(document.getElementById('root')).render(
<React.StrictMode>
 <RouterProvider router={router} />
</React.StrictMode>
)