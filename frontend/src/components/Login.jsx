import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic (e.g., send request to server)

    console.log(`Logging in with username: ${email} and password: ${password}`);

    // Example: Send login request to backend
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/users/login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log({ res });
          toast.success(res.data.message);
          setEmail("");
          setPassword("");
          navigate("/home");
          localStorage.setItem("user", JSON.stringify(res?.data?.data));
          localStorage.setItem("token", res?.data?.token);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } catch (error) {
      console.error("Error during login:", error);
      // Handle network or other errors
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
    
    <section className="login-form">
      <h2>
        Login
        <span className="primary-color"> Welcome </span> Back 👋
      </h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          id={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         placeholder="••••••••"
        />
        <input type="submit" value="Login" />
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </section>
    </div>
  );
};

export default Login;
