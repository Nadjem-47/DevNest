"use client"
import React from "react"
import styles from "./login.module.css"

export default function Login() {


    console.log(process.env.API_BASE_URL, "process.env.NEXT_PUBLIC_BASE_URL");
    
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        alert(data.message || "Login failed")
      } else {
        alert("Login successful!")
      }
    } catch (err) {
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login to Your Account</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
        <div className={styles.links}>
          <a href="#">Forgot password?</a>
          <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  )
}
