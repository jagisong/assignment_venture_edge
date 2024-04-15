import React, { useState, memo } from "react";
import { BASEURL } from "../helper/UrlApi";
import axios from "axios";
import Register from "../pages/Register";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log([e.target.name] , e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASEURL}/user/signup`,
        formData
      );
    //   console.log(response.data);
    navigate("/login")
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <Register handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};



export default SignUp;
