import { useState } from 'react'
import Button from '../components/Button'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-avatar">🔑</div>
          <h2>Welcome Back</h2>
          <p>Sign in to access your EmployeeHub AI account</p>
        </div>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Work Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => {
                console.log(e.target.value)
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="••••••••"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value)
              }}
            />
          </div>
          <div className="login-btn-wrapper">
            <Button text="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}

