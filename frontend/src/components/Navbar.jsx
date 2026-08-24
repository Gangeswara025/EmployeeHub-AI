import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className='navbar-header'>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          <div className='logo-icon'>EH</div>
          <span className='logo-text'>EmployeeHub <span className='logo-badge'>AI</span></span>
        </Link>
        <ul className='nav-menu'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/employees' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink to='/add-employee' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Add Employee
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className={({ isActive }) => (isActive ? 'nav-link active login-btn' : 'nav-link login-btn')}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

