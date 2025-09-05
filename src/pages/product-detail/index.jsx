import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setData(res.data));
  }, [id]);

  return (
    <div>
      <div className="flex flex-wrap gap-10 container">
        {data && (
          <div className="flex mt-10 gap-10" key={data.id}>
            <div onClick={() => navigate("/products")}>
              <img className="w-[800px]" src={data.thumbnail} alt="" />
            </div>
            <div className="mt-30 gap-10">
              <b className="mr-1">{data.title}</b>
              <h3>
                <b>{data.price}</b>
              </h3>
              <p className="mt-5">{data.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
