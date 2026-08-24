
export default function EmployeeCard() {
  return (
    <div>
      <h1>John Doe</h1>
      <label htmlFor="dept">Department:</label>
      <select name="Department" id="dept">
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>
      <h2>Salary : </h2>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
