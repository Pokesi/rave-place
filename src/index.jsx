import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Collection from './Collection'
import Profile from './Profile'
import { BrowserRouter, Route, Routes } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={<App />}
          path=""
        />
        <Route
          element={<Collection />}
          path="/collection"
        />
        <Route
          element={<Profile />}
          path="/profile"
        />
      </Routes>
    </BrowserRouter>

	</React.StrictMode>
)
