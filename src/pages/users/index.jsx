import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <div className="flex flex-wrap gap-10 container">
        {data?.users.map((user) => (
          <div key={user.id}>
            <div onClick={() => navigate("/users")}>
              <img src={user.image} alt="" />
            </div>
            <div>
              <h3>
                <b className="mr-1">{user.firstName}</b>
                <b>{user.lastName}</b>
              </h3>
              <p>Tel: {user.phone}</p>
              <p>Age: {user.age}</p>
              <p>username: {user.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
