import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'
import VerifyOTP from './pages/VerifyOTP'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Notes from './pages/Notes'
import OAuthSuccess from './pages/0AuthSuccess'
import { getToken } from './utils/auth'


function RequireAuth({ children }){
const token = getToken()
if(!token) return <Navigate to="/login" replace />
return children
}


export default function App(){
return (
<Routes>
<Route path="/note" element={<Signup/>} />
<Route path="/note/verify-otp" element={<VerifyOTP/>} />
<Route path="/note/login" element={<Login/>} />
<Route path="/note/oauth-success" element={<OAuthSuccess/>} />
<Route path="/note/welcome" element={<RequireAuth><Welcome/></RequireAuth>} />
<Route path="/note/notes" element={<RequireAuth><Notes/></RequireAuth>} />
</Routes>
)
}