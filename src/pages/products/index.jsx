import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-4 container gap-10">
        {data?.products.map((product) => (
          <div className="shadow-lg rounded bg-white" key={product.id}>
            <div onClick={() => navigate("/products")}>
              <img className="w-[200px]" src={product.images} alt="nothing" />
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

export default Product;
