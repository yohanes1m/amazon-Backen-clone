import React, { useEffect, useState } from "react";
import classes from "./product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../Category/Loader/Loader";

function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading? (<Loader/>) :(<section className={classes.product_container}>
        {product.map((singleProduct, index) => {
          return <ProductCard product={singleProduct} key={index} renderAdd={true}/>;
        })}
      </section>) }
      
    </>
  );
}

export default Product;
