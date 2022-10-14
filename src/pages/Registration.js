import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Navbar from "../layout/Navbar";

export default function Registration() {
  const [users, setUsers] = useState([]);

  //   const { id } = useParams();

  //   useEffect(() => {
  //     loadUsers();
  //   }, []);

  //   const loadUsers = async () => {
  //     const result = await axios.get("http://localhost:8080/users");
  //     setUsers(result.data);
  //   };

  //   const deleteUser = async (id) => {
  //     await axios.delete(`http://localhost:8080/user/${id}`);
  //     loadUsers();
  //   };

  const [home, setHome] = useState();
  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [success]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await axios.post(
          "http://localhost:8080/registration",
          values
        );
        setHome(result.data);
        setSuccess(true);
      } catch (err) {
        !err?.response
          ? setErrMsg("No Server Response")
          : err.response?.status === 400
          ? setErrMsg("User Already Exists!")
          : err.response?.status === 401
          ? setErrMsg("Not authorized")
          : setErrMsg("Login Failed");
      }
    },
  });

  const { values, handleChange, handleSubmit } = formik;
  const { username, password } = values;

  return (
    <>
      <Navbar bool={false} />
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          width: "300px",
        }}
      >
        {success && (
          <div
            style={{
              color: "green",
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            Success!
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "150px",
            justifyContent: "space-between",
          }}
        >
          <input
            name="username"
            value={username}
            required
            onChange={handleChange}
            placeholder="username"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
          />
          {errMsg && (
            <div
              style={{
                color: "red",
                fontWeight: 700,
                fontSize: "20px",
                marginBottom: "20px",
              }}
            >
              {errMsg}
            </div>
          )}
          <button type="submit">Register</button>
        </form>
      </div>s
    </>
  );
}
