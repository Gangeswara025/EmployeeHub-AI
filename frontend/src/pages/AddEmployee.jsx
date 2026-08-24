import { useState } from 'react'
import api from '../services/api'
import './AddEmployee.css'

export default function AddEmployee() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [salary, setSalary] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post('/employees/', {
        name,
        email,
        department,
        salary
      })

      alert('Employee added successfully!')
    } catch (error) {
      console.log(error)
      alert('Failed to add employee')
    }
  }

  return (
    <div className="add-employee-container">
      <div className="add-employee-card">
        <div className="form-header">
          <h2>Add New Employee</h2>
          <p>Fill in the details to create a new employee record in the system</p>
        </div>

        <form onSubmit={handleSubmit} className="add-employee-form">
          <div className="form-field">
            <label htmlFor="emp-name">Full Name</label>
            <input
              id="emp-name"
              type="text"
              placeholder="e.g. Jane Doe"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>

          <div className="form-field">
            <label htmlFor="emp-email">Email Address</label>
            <input
              id="emp-email"
              type="email"
              placeholder="e.g. jane.doe@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>

          <div className="form-field">
            <label htmlFor="emp-dept">Department</label>
            <input
              id="emp-dept"
              type="text"
              placeholder="e.g. Engineering, HR, Sales"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value)
              }}
            />
          </div>

          <div className="form-field">
            <label htmlFor="emp-salary">Annual Salary ($)</label>
            <input
              id="emp-salary"
              type="number"
              placeholder="e.g. 85000"
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value)
              }}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit-emp">
              + Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

