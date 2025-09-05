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
      <div className="grid grid-cols-4 container gap-10">
        {data?.users?.map((user) => (
          <div key={user.id}>
            <div onClick={() => navigate(`/user/${user.id}`)}>
              <img className="w-[200px]" src={user.image} alt="nothing" />
            </div>
            <div>
              <h3>
                <b className="mr-1">{user.firstName}</b>
                <b className="mr-1">{user.lastName}</b>
                <br />
                <span>
                  <b>Age: </b>
                  {user.age}{" "}
                </span>
                <br />
                <span>
                  <b>Username:</b> {user.username}
                </span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
