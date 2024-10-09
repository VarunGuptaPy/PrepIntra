import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../globals";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const doLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        email.trim() != "" &&
        password.trim() != "" &&
        password.trim().length >= 6
      ) {
        axios
          .post(`${baseURL}/login`, {
            email: email,
            password: password,
            key: "123456",
          })
          .then((response) => {
            let data = response.data;
            if (data.hasError) {
              // Showing a toast with error
              alert("There is some error while signing up");
            } else {
              if (data.user.accountType == "registering") {
                navigate("/profile");
              } else {
                navigate("/search-interview");
              }
            }
          })
          .catch((error) => {
            console.error(
              "Login failed:",
              error.response ? error.response.data : error.message
            );
          });
      } else {
        alert();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login to PrepIntra
        </h2>
        <form onSubmit={doLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Log In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
