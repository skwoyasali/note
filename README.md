# 📝 Note App

A full-stack note-taking app built with React, Node.js, Express, and MongoDB.  
This project includes user authentication (email + OTP and Google OAuth), JWT-based sessions, CRUD operations for notes, and a clean responsive UI.

---

## 🚀 Live Demo & Repositories

- **Deployed App:** https://note-lime-ten.vercel.app/  
- **Frontend Repo:** https://github.com/skwoyasali/note  
- **Backend Repo:** https://github.com/skwoyasali/Note-Backend

---

## ✨ Features

- 🔐 **User Auth** — Register and login with email + OTP or Google OAuth (JWT sessions)  
- 📝 **Notes CRUD** — Create, read, update, delete notes (per-user)   
- 📱 **Responsive UI** — Mobile-friendly layout using TailwindCSS 

---

## 🧰 Tech Stack

- **Frontend:** React (Vite), React Router, Axios, TailwindCSS  
- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Auth:** JWT, bcrypt, Passport.js (Google OAuth)  

---

## ⚙️ Getting Started

### 🔧 Prerequisites
- Node.js v18+
- MongoDB (Atlas)
- npm or yarn

### 📥 1. Clone the repository
```
git clone https://github.com/skwoyasali/note
cd note
npm install
```

### 🛠 2. Backend Setup

```
git clone https://github.com/skwoyasali/Note-Backend
cd Backend
npm install
```

Create a `.env` file in the `/Backend` directory with the following keys:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
FRONTEND_URL=http://localhost:5173
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SMTP_HOST=your_smtp_host          (for OTP/email)
SMTP_PORT=587                      
SMTP_USER=your_smtp_user          
SMTP_PASS=your_smtp_pass           
OTP_TTL_SECONDS=300                
```

Start the backend server:

```
npm run dev
```

Backend runs at: http://localhost:5000

---

### 🌐 3. Frontend Setup

```
cd note
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

---

## 👨‍💻 Usage Guide

| Step              | Action                                             |
|-------------------|----------------------------------------------------|
| 📝 Register/Login | Register with email (OTP) or login with Google     |
| ➕ Create Notes    | Add note (title, body, optional tags/categories)   |
| 🗑️ Delete Notes    | Remove notes you own                                |


---

## 💡 Notes & Design Decisions

- **Security:** JWT-based authentication. This project is for demonstration — for production, add secure cookie flags, refresh tokens, CSRF protection, and stricter validation.  
- **Email / OTP:** Uses SMTP (configurable). For dev use Mailtrap or similar.  
- **Google OAuth:** Uses Passport.js on the backend; ensure OAuth redirect URIs are configured in Google Cloud Console.  
- **API Prefix:** Backend routes are grouped under `/auth` and `/notes`.  
- **Error Handling:** API returns clear JSON messages on failures for the frontend to show to users.  
- **Accessibility:** Basic keyboard navigation and responsive behavior are provided.

---

## 🧪 Troubleshooting & Tips

- If Google OAuth returns `redirect_uri_mismatch`, make sure the redirect URI in Google Cloud Console exactly matches your backend callback URL and the frontend redirect path for production.  
- If OTP emails don't arrive, verify SMTP configuration or use Mailtrap for dev.  
- If MongoDB authentication fails, check your `MONGO_URI` credentials and whitelist IP (or use `0.0.0.0/0` for dev in Atlas).

---

## 👤 Author

Project by **Sk Woyas Ali**

- GitHub: https://github.com/skwoyasali  
- Frontend Repo: https://github.com/skwoyasali/note  
- Backend Repo: https://github.com/skwoyasali/Note-Backend  
- Live App: https://note-lime-ten.vercel.app/

---
```
