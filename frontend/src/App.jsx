import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import AddEmployee from './pages/AddEmployee'
import Employees from './pages/Employees'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/add-employee' element={<AddEmployee />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

