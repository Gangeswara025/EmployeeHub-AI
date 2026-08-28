import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import AddEmployee from './pages/AddEmployee'
import Employees from './pages/Employees'
import ProtectedRoute from './components/ProtectedRoute'
import LeaveRequests from './pages/LeaveRequests'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/add-employee'
              element={
                <ProtectedRoute>
                  <AddEmployee />
                </ProtectedRoute>
              }
            />
            <Route path='/employees'
              element={
                <ProtectedRoute>
                  <Employees />
                </ProtectedRoute>
              }
            />
            <Route path="/leave-requests"
              element={
                <ProtectedRoute>
                  <LeaveRequests />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

