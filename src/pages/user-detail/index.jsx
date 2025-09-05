import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "../users";

const UserDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setData(res.data));
  }, [id]);

  return (
    <div>
      <div className="flex flex-wrap gap-10 container shadow-lg rounded bg-white mt-10 p-20">
        {data && (
          <div className="flex mt-10 gap-15 leading-9" key={data.id}>
            <div onClick={() => navigate("/users")}>
              <img className="w-[300px]" src={data.image} alt="" />
            </div>
            <div className="mt-20 ">
              <b className="mr-1">{data.firstName}</b>
              <b className="mr-1">{data.lastName}</b>
              <p>
                <b>Email</b>: {data.email}
              </p>
              <h3>
                <b>Age</b>: <span>{data.age}</span>
              </h3>
              <b>Username</b>: <span>{data.username}</span>
              <div className="flex gap-5">
                <button className="bg-blue-400 w-[100px] mt-5 text-white">
                  Follow
                </button>
                <button className="bg-blue-400 w-[100px] mt-5 text-white">
                  Message
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
