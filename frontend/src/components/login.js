import React from 'react';
import 'login.css';
const Login = () => {

  const getUserInput = () => {
    // Get the value from the input field
    let userInput = document.getElementById("input-name").value;
    let passInput = document.getElementById("input-pass").value;
    let confirmPass = document.getElementById("conf-pass").value;

    // Do something with the user input
    alert("You entered: " + userInput);
    alert("You entered: " + passInput);
    alert("You entered: " + confirmPass);

    //if statement
    if (passInput === confirmPass) {
      alert("Your passwords match!");
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
      <input
        type="password"
        placeholder="insert password here"
        id="input-pass"
        className="input"
      />
      <input
        type="password"
        placeholder="confirm password here"
        id="conf-pass"
        className="input"
      />
      <button className="submit" onClick={getUserInput}><b>SUBMIT</b></button>
    </div>
  );
}

export default Login;
