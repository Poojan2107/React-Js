import React, { useState } from 'react'

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailErrors("");
    setPasswordErrors("");

    let isValidate = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (email.trim() === '') {
      setEmailErrors("Email is Required!");
      isValidate = false;
    } else if (!emailRegex.test(email)) {
      setEmailErrors("Enter a valid Email!");
      isValidate = false;
    }

    if (password.trim() === '') {
      setPasswordErrors("Password is Required!");
      isValidate = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordErrors("Password must be at least 6 characters with letters and numbers!");
      isValidate = false;
    }

    if (isValidate) {
      console.log(email)
      console.log(password)
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div style={{ maxWidth: "500px", padding: "20px" }}>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErrors && <p style={{ color: "red" }}>{emailErrors}</p>}
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordErrors && <p style={{ color: "red" }}>{passwordErrors}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App
