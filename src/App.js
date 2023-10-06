import logo from './logo.svg'
import './App.css'
import Login from './components/Login'
import { Route, BrowserRouter, Routes, Link, Outlet, Navigate } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home/index'
import Private from './PrivateRoutes/Private'
import LoginRoute from './PrivateRoutes/LoginRoute'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route  path="/home" element={<Home />} /> */}
          <Route path="/" element={<Private />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/" element={<LoginRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          {/* <privateRoute  path="/">
            <Route  path="login" element={<Login />} />
            <Route  path="register" element={<Register />} />
          </privateRoute> */}

          {/* <loginRoute  path="/">
          </loginRoute> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
