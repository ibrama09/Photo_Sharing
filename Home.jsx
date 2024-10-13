import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    nextPage: 0,
    previousPage: 0,
  });
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("access token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
    .delete(`https://reqres.in/api/login`, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response);
    });
  };

  const handleNext = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    });
  };
  
  const handlePrevious = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage - 1,
    });
  };

  useEffect(() => {
    
  }, [pagination.currentPage]);

  const isLogedin = localStorage.getItem("access_token");

  console.log(pagination);
  return (
    <div>
      <Navbar />
      {isLogedin !== null && <button onClick={handleLogout}>logout</button>}
      <h1>ini halaman homepage</h1>
      <button onClick={handlePrevious}>back</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Home;
