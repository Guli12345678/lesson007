import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="flex flex-wrap gap-10 container">
        {data && (
          <div key={data.id}>
            <div onClick={() => navigate("/users")}>
              <img src={data.image} alt="" />
            </div>
            <div>
              <h3>
                <b className="mr-1">{data.firstName}</b>
                <b>{data.lastName}</b>
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
