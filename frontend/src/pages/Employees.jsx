import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import './Employees.css'

export default function Employees() {

  const [employees, setEmployees] = useState([])
  const [editEmployee, setEditEmployee] = useState(null)

  useEffect(() => {
    getEmployees()
  }, [])

  const getEmployees = async () => {
    try {
      const response = await api.get('/employees/')
      setEmployees(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (employee) => {
    setEditEmployee(employee)
  }

  const handleUpdate = async () => {
    try {
      const response = await api.put(
        `/employees/${editEmployee.id}/`,
        editEmployee
      )

      console.log(response.data)

      setEmployees(
        employees.map((employee) =>
          employee.id === editEmployee.id
            ? response.data
            : employee
        )
      )

      setEditEmployee(null)

    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/employees/${id}/`)

      setEmployees(
        employees.filter((employee) => employee.id !== id)
      )

    } catch (error) {
      console.log(error)
    }
  }

  const getInitials = (name) => {
    if (!name) return 'EH'
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return name.slice(0, 2).toUpperCase()
  }

  return (
    <div className="employees-container">
      <div className="employees-header-bar">
        <div className="title-group">
          <h1>Employee Directory</h1>
          <span className="count-badge">{employees.length} Employees</span>
        </div>
        <Link to="/add-employee" className="add-emp-btn">
          + Add New Employee
        </Link>
      </div>

      {employees.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">👥</div>
          <h3>No Employees Found</h3>
          <p>Get started by adding your first employee to the directory.</p>
          <Link to="/add-employee" className="add-emp-btn">
            + Add Employee
          </Link>
        </div>
      ) : (
        <div className="employees-grid">
          {employees.map((employee) => (
            <div key={employee.id} className="employee-card">
              <div className="card-top">
                <div className="avatar-circle">
                  {getInitials(employee.name)}
                </div>
                <div className="emp-info">
                  <h2>{employee.name}</h2>
                  <p className="emp-email">{employee.email}</p>
                </div>
              </div>

              <div className="card-details">
                <span className="dept-tag">
                  {employee.department || 'General'}
                </span>
                <span className="salary-tag">
                  ${Number(employee.salary || 0).toLocaleString()}
                </span>
              </div>

              <div className="card-actions">
                <button
                  className="btn-card-edit"
                  onClick={() => handleEdit(employee)}
                >
                  Edit
                </button>
                <button
                  className="btn-card-delete"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editEmployee && (
        <div className="modal-overlay" onClick={() => setEditEmployee(null)}>
          <div className="edit-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="edit-modal-header">
              <h2>Edit Employee</h2>
              <button className="close-btn" onClick={() => setEditEmployee(null)}>✕</button>
            </div>

            <div className="edit-form-grid">
              <div className="field-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={editEmployee.name}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      name: e.target.value
                    })
                  }
                />
              </div>

              <div className="field-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={editEmployee.email}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      email: e.target.value
                    })
                  }
                />
              </div>

              <div className="field-group">
                <label>Department</label>
                <input
                  type="text"
                  value={editEmployee.department}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      department: e.target.value
                    })
                  }
                />
              </div>

              <div className="field-group">
                <label>Salary ($)</label>
                <input
                  type="number"
                  value={editEmployee.salary}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      salary: e.target.value
                    })
                  }
                />
              </div>
            </div>

            <div className="edit-modal-actions">
              <button className="btn-cancel" onClick={() => setEditEmployee(null)}>
                Cancel
              </button>
              <button className="btn-update" onClick={handleUpdate}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

