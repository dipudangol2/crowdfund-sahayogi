
import { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const Login = () => {
  // const history = useHistory(); 
  // Initialize useHistory hook

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic email validation
    if (!email.includes('@')) {
      setError("Email must contain @ symbol");
    } else if (password === "") {
      setError("Please enter your password");
    } else {
      // Clear any previous errors
      setError(null);

      // Simulate login success
      alert("Successfully logged in!");

      // Redirect to dashboard (example path '/dashboard')
      // history.push("/dashboard");
    }
  };

  return (
    <div className='form-container'>
      <form className="Forms" onSubmit={handleSubmit}>
        <div className='header'>
          <div className='text'><h1>Login</h1></div>
          <div className='underline'></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email Id'
              required
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
          </div>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="forgot-password">
          Forgot Password?
          <span onClick={() => alert("Go to your email and click on the reset button to update your password!")}>Click Here</span>
        </div>

        <button className="submit" type="submit">Submit</button>
      </form>
      <div>Don't have an account?</div>
      <Link to={"/signup"}> <button className="submit">Sign Up</button></Link>
    </div>
  );
}

export default Login;
