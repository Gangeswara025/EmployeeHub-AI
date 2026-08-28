import { useEffect, useState } from "react";
import api from "../services/api";
import "./LeaveRequests.css";

export default function LeaveRequests() {

  const [employees, setEmployees] = useState([]);
  const [leaves, setLeaves] = useState([]);

  const [form, setForm] = useState({
    employee: "",
    leave_type: "Casual",
    start_date: "",
    end_date: "",
    reason: ""
  });

  const getEmployees = async () => {
    try {
      const response = await api.get("/employees/");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLeaves = async () => {
    try {
      const response = await api.get("/leave-requests/");
      setLeaves(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
    getLeaves();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/leave-requests/", form);

      alert("Leave request submitted successfully!");

      setForm({
        employee: "",
        leave_type: "Casual",
        start_date: "",
        end_date: "",
        reason: ""
      });

      getLeaves();

    } catch (error) {
      console.log(error);
      alert("Failed to submit leave request.");
    }
  };

  return (
    <div className="leave-page">

      <h1>Leave Requests</h1>
      <form
        onSubmit={handleSubmit}
        className="leave-form"
      >

        <select
          name="employee"
          value={form.employee}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Employee
          </option>

          {employees.map((employee) => (
            <option
              key={employee.id}
              value={employee.id}
            >
              {employee.name}
            </option>
          ))}
        </select>


        <select
          name="leave_type"
          value={form.leave_type}
          onChange={handleChange}
        >
          <option value="Casual">
            Casual
          </option>

          <option value="Sick">
            Sick
          </option>

          <option value="Emergency">
            Emergency
          </option>
        </select>


        <input
          type="date"
          name="start_date"
          value={form.start_date}
          onChange={handleChange}
          required
        />


        <input
          type="date"
          name="end_date"
          value={form.end_date}
          onChange={handleChange}
          required
        />


        <textarea
          name="reason"
          placeholder="Reason"
          value={form.reason}
          onChange={handleChange}
          required
        />


        <button type="submit">
          Submit Leave Request
        </button>

      </form>

      <hr />

      <h2>Previous Requests</h2>

      <div className="leave-list">

        {leaves.length === 0 ? (

          <p className="no-leaves">
            No leave requests found.
          </p>

        ) : (

          leaves.map((leave) => (

            <div
              className="leave-card"
              key={leave.id}
            >

              <h3>
                {leave.employee_name}
              </h3>

              <p>
                <strong>Type:</strong>{" "}
                {leave.leave_type}
              </p>

              <p>
                <strong>Dates:</strong>{" "}
                {leave.start_date} → {leave.end_date}
              </p>

              <p>
                <strong>Reason:</strong>{" "}
                {leave.reason}
              </p>

              <span className="leave-status">
                {leave.status}
              </span>

            </div>

          ))

        )}

      </div>

    </div>
  );
}