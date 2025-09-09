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
    path: '/note',
    element: <Signup />,
  },
  {
    path: '/note/verify-otp',
    element: <VerifyOTP />,
  },
  {
    path: '/note/login',
    element: <Login />,
  },
  {
    path: '/note/oauth-success',
    element: <OAuthSuccess />,
  },
  {
    path: '/note/welcome',
    element: <RequireAuth><Welcome /></RequireAuth>,
  },
  {
    path: '/note/notes',
    element: <RequireAuth><Notes /></RequireAuth>,
  },
]);

function RequireAuth({ children }){
const token = getToken()
if(!token) return <Navigate to="/note/login" replace />
return children
}

createRoot(document.getElementById('root')).render(
<React.StrictMode>
 <RouterProvider router={router} />
</React.StrictMode>
)