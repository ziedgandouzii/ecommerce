import React, { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";
const ProductCard = ({ addtoCard, name }) => {
  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    axios
      .post("http://localhost:3001/products", { name })
      .then((response) => {
        const data = response.data.sort(() => Math.random() - 0.5);
        setproducts(data);
        setisloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  const style = {
    height: "250px",
  };
  return (
    <>
      {(!isloading &&
        products.map((shopItems, index) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">-10%</span>
                  <img
                    src={process.env.PUBLIC_URL + "/" + shopItems.image}
                    alt=""
                    style={style}
                  />
                </div>
                <div className="product-details">
                  <h3>{shopItems.name}</h3>

                  <div className="price">
                    <h4>{shopItems.price}.00 DT</h4>
                    <button onClick={() => addtoCard(shopItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })) || (
        <>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </>
      )}
    </>
  );
};

export default ProductCard;
