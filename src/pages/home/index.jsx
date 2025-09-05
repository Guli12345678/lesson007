import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 container gap-10">
        {data?.products.map((product) => (
          <div key={product.id}>
            <div onClick={() => navigate(`/product/${product.id}`)}>
              <img
                className="w-[200px]"
                src={product.thumbnail}
                alt="nothing"
              />
            </div>
            <div>
              <h3>
                <b className="mr-1">{product.title}</b>
                <br />
                <b>{product.price}</b>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
