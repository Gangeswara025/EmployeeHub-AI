import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='hero-section'>
        <h1 className='heading'>Employee Management System</h1>
        <p className='hero-description'>
          A simple dashboard to manage employee records — add, view, update, and
          remove profiles, and keep department details organized in one place.
        </p>
        <div className='hero-actions'>
          <Link to='/employees' className='btn btn-primary-hero'>
            View Employees
          </Link>
          <Link to='/add-employee' className='btn btn-secondary-hero'>
            Add New Employee
          </Link>
        </div>
      </div>

      <div className='features-grid'>
        <div className='feature-card'>
          <h3>Centralized Records</h3>
          <p>All employee information, departments, and contact details in one dashboard.</p>
        </div>
        <div className='feature-card'>
          <h3>Django + React</h3>
          <p>Django REST Framework backend with a React frontend for a fast, responsive UI.</p>
        </div>
        <div className='feature-card'>
          <h3>Full CRUD Support</h3>
          <p>Add, view, update, and delete employee profiles with simple, intuitive controls.</p>
        </div>
      </div>
    </div>
  )
}