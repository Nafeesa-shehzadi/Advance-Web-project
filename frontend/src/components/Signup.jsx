import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhoneno] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      name: username,
      email,
      password,
      phone,
    };
    console.log("Request body:", userData);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        userData
      );

      const data = response.data;
      console.log("Response data:", data);

      toast(data.message || "User registered successfully!"); // Display success message
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
      // console.error("Error===:", error);
    }
  };

  return (
    <div
    className="flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/registration.jpg')" }}
  >
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Username"
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="name@gmail.com"
          onChange={(e) => setemail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="034-52789165"
          value={phone}
          onChange={(e) => setPhoneno(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
    </div>
  );
};
export default Signup;
