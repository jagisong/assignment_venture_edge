import React, { useEffect, useState } from "react";
import Resolution from "../pages/Resolution";
import axios from "axios";
import { BASEURL } from "../helper/UrlApi";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const RenderResolution = () => {
  const [resolutions, setResolutions] = useState([]);
  const [resolutionData, setResolutionData] = useState({
    title: "", 
    description: ""
  });
  const [run, setRun] = useState(false);
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    e.preventDefault();
    setResolutionData({...resolutionData,[e.target.name]: e.target.value});
  }

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    navigate("/updates", {
      state: {
        id: e.target.value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      const response = await axios.post(`${BASEURL}/resolution/create`, resolutionData, {
          headers: {
            Authorization: `${authToken}`,
          },
        });
        console.log(response.data);
        setRun(!run);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    const fetchResolutions = async () => {
      try {
        const response = await axios.get(`${BASEURL}/resolution/getall`, {
          headers: {
            Authorization: `${authToken}`,
          },
        });
        // console.log(response.data);
        setResolutions(response.data.allResolution);
      } catch (error) {
        console.error("Error fetching resolutions:", error);
      }
    };
    fetchResolutions();
  }, [authToken, run]);
  return (
    <>
      <Navbar />
      <Resolution resolutions={resolutions} handleClick={handleClick} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  );
};

export default RenderResolution;
