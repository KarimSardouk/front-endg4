import React, { useState } from 'react';
import "./login.css";
const Login = () => {
  const [changePasswordMode, setChangePasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePasswordClick = () => {
    setChangePasswordMode(true);
  }

  const handleSavePasswordClick = () => {
    if (newPassword === confirmPassword) {
      // Add code to save the new password
      alert("Password changed successfully!");
      setChangePasswordMode(false);
    } else {
      // Apply animation if passwords don't match
      let cube = document.querySelector(".cube");
      cube.style.animation = "tilt-shaking 0.5s";

      setTimeout(function() {
        cube.style.animation = ""; // Reset the animation
        alert("Your passwords do not match.");
      }, 500);
    }
  }

  return (
    <div className="cube">
      <p><b>LOGIN</b></p>
      <input
        type="text"
        placeholder="insert username here"
        id="input-name"
        className="input"
      />
      {changePasswordMode ? (
        <>
          <input
            type="password"
            placeholder="enter new password"
            id="new-pass"
            className="input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password here"
            id="conf-pass"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="submit" onClick={handleSavePasswordClick}><b>SAVE</b></button>
        </>
      ) : (
        <>
          <input
            type="password"
            placeholder="insert password here"
            id="input-pass"
            className="input"
          />
          <button className="submit"><b>SUBMIT</b></button>
          <button className="submit" onClick={handleChangePasswordClick}><b>Change Password</b></button>
        </>
      )}
    </div>
  );
}

export default Login;
