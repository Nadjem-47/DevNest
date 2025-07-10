import React from "react";
import styles from "../login/login.module.css";

export default function SignUp() {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h2>Create an Account</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.loginButton}>Sign Up</button>
        <div className={styles.links}>
          <a href="/login">Already have an account?</a>
        </div>
      </form>
    </div>
  );
}
