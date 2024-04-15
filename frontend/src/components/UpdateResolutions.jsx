import React, { useEffect, useState } from "react";
import Updates from "../pages/Updates";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../helper/UrlApi";
import Navbar from "./Navbar";

const UpdateResolutions = () => {
  const location = useLocation();
  const { state } = location;
  // console.log(state.id);
  const authToken = localStorage.getItem("authToken");
  const id = state.id;
  // console.log(id);
  const [monthlyUpdateData, setMonthlyUpdateData] = useState([]);
  const [monthlyData,setMonthlyData] = useState({
    month: "",
    update: ""
  })
  const [run,setRun] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setMonthlyData({...monthlyData,[e.target.name]: e.target.value});
  }
    // console.log(monthlyUpdates);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${BASEURL}/resolution/update/${id}`, monthlyData, {
          headers: {
            Authorization: `${authToken}`,
          },
        });
        setRun(!run);
        console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchResolutions = async () => {
      try {
        const response = await axios.get(`${BASEURL}/resolution/getall`, {
          headers: {
            Authorization: `${authToken}`,
          },
        });
        // console.log(response.data.allResolution);
        const resolutionData = response.data.allResolution;
        const val = () => {
          return resolutionData.filter((resolution) => resolution._id === id);
        }
        setMonthlyUpdateData(val()[0].monthlyUpdates);
      } catch (error) {
        console.error("Error fetching resolutions:", error);
      }
    };
    fetchResolutions();
  }, [authToken, run]);
  return (
    <>
      <Navbar />
      <Updates monthlyUpdates={monthlyUpdateData} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  );
};

export default UpdateResolutions;
