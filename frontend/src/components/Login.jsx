import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";
import axios from "axios";
import { BASEURL } from "../helper/UrlApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASEURL}/user/login`, loginData);
      const authToken = response.data.authToken;
      localStorage.setItem('authToken', authToken);
      navigate("/dashboard")
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   console.log(LoginToken);
  return <LoginPage handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default Login;
