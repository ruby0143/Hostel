import React, { useState, useEffect } from "react";
import Axios from "axios";
import User from "../user/User";
import { expToken } from "../Login/Login";
import Count from "../count/Count";
import "./admin.css";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    Axios.get("https://node-server-main.herokuapp.com/admin/get", {
      headers: {
        authorization: `Bearer ${expToken}`,
      },
    }).then((res) => {
      if (res.data.message === "ok") {
        setLogin(true);
        return setUsers(res.data.users);
      }
    });
  }, []);
  return login ? (
    <div>
      <div className="nav">
        <div className="col-lg-9" style={{ textAlign: "center", margin: "20px" }}>
          <h2 className="m">Hostel Name</h2>
        </div>
        
      </div>
      <hr></hr>
      <Count />
      <div className="body">
        <h3 className="head">Waiting List</h3>
        <hr />
        {users.map((ele) => {
          return (
            <User
              username={ele.username}
              mobile={ele.mobile}
              roomNo={ele.roomNo}
              password={ele.password}
            />
          );
        })}
        <br></br>
        <div className="col-lg-2 l ">
          <a href="/" className="logout">
            <button class="btn btn-primary">Logout</button>
          </a>
        </div>
        <br></br>
      </div>
    </div>
  ) : (
    <h1>Please Login</h1>
  );
};

export default Admin;
