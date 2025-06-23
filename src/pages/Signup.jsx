import React, { useState } from "react";
import "./AuthSplit.css";
import signupImg from "../assets/logo2.png";

const steps = [
  { label: "Account" },
  { label: "Profile" },
  { label: "Contact" },
  { label: "Finish" },
];

export default function Signup() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    countryCode: "+91",
    phone: "",
    dob: "",
    gender: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function next() {
    if (step < 3) setStep(step + 1);
  }

  function prev() {
    if (step > 0) setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Signed up!");
  }

  return (
    <div className="auth-split-container">
      <div className="auth-split-left">
        <img src={signupImg} alt="Signup Visual" className="auth-split-img" />
      </div>
      <div className="auth-split-right">
        <div className="auth-panel fixed-height">
          <div className="progress-bar">
            {steps.map((s, i) => (
              <div key={s.label} className={`progress-step${i <= step ? " active" : ""}`}>
                {i + 1}
              </div>
            ))}
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {step === 0 && (
              <>
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
                <label>Password</label>
                <input name="password" type="password" value={form.password} onChange={handleChange} required />
              </>
            )}

            {step === 1 && (
              <>
                <label>First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required />
                <label>Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required />
                <label>Username</label>
                <input name="username" value={form.username} onChange={handleChange} required />
              </>
            )}

            {step === 2 && (
              <>
                <label>Phone Number</label>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    style={{ flex: "0.4" }}
                    required
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+81">+81</option>
                  </select>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    style={{ flex: "1" }}
                    required
                  />
                </div>
                <label>Date of Birth</label>
                <input name="dob" type="date" value={form.dob} onChange={handleChange} required />
                <label>Gender</label>
                <select name="gender" value={form.gender} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </>
            )}

            {step === 3 && (
              <>
                <div className="signup-summary">
                  <div><b>Email:</b> {form.email}</div>
                  <div><b>Name:</b> {form.firstName} {form.lastName}</div>
                  <div><b>Username:</b> {form.username}</div>
                  <div><b>Phone:</b> {form.countryCode} {form.phone}</div>
                  <div><b>DOB:</b> {form.dob}</div>
                  <div><b>Gender:</b> {form.gender}</div>
                </div>
                <div className="signup-success">Ready to create your account!</div>
              </>
            )}

            <div className="auth-actions">
              {step > 0 && (
                <button type="button" className="auth-btn secondary" onClick={prev}>
                  Back
                </button>
              )}
              {step < 3 && (
                <button type="button" className="auth-btn" onClick={next}>
                  Next
                </button>
              )}
              {step === 3 && (
                <button type="submit" className="auth-btn">
                  Sign Up
                </button>
              )}
            </div>
          </form>

          <div className="auth-footer">
            <span>Already have an account?</span>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
