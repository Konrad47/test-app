import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./api/loginApi";
import "./index.css";
import { AuthDto } from "./models";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { setAccessToken, setId } from "../../store/slices/auth.slice";

const LoginView = (): React.JSX.Element => {
  const [formData, setFormData] = useState<AuthDto>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await login(formData);
    if (result && result.access_token) {
      dispatch(setAccessToken(result.access_token));
      dispatch(setId(result.id));
      navigate("/authorized");
    } else {
      setError("Login failed. Please check your username and password.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container login-container">
      <h1>Login</h1>
      <div className="links-container">
        <Link to="/">Home</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginView;
