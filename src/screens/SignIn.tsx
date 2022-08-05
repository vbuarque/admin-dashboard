import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Logo from "../assets/logo.svg";
import "../styles/auth.scss";

export function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <div className="forms">
        <div className="form login">
          <div className="title">
            <img src={Logo} alt="" />
            <span className="title-login">Dashboard Kit</span>
          </div>

          <div className="subtitle">
            <h1>Log In to Dashboard Kit</h1>
            <span>Enter your email and password below</span>
          </div>

          <form action="#">
            <span className="title-input-email">email</span>
            <div className="input-field">
              <input className="input-email" type="text" placeholder="Email address" required />
            </div>

            <div className="title-input">
              <span className="title-input-password">password</span>
              <span className="title-input-forget">
                <a href="#">Forgot password?</a>
              </span>
            </div>
            <div className="input-field">
              <input
                className="input-password"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <div className="icon-container" onClick={ () => setShowPassword(!showPassword) }>
                {showPassword ? <FiEye size={16} color="#9FA2B4"/> : <FiEyeOff size={16} color="#9FA2B4"/>}
              </div>
            </div>

            <div className="btn-field">
              <button type="submit">Log In</button>
            </div>
            <div className="sign-up">
              <span>
                Don't have an account?<a href="#">Sign up</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
