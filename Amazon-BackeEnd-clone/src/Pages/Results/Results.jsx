import React, { useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import { useEffect } from "react";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Category/Loader/Loader";
function Results() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  // console.log(categoryName);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log(products);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.product_container}>
            {products?.map((product) => {
              // console.log(product);

              return <ProductCard key={product.id} product={product} 
              renderAdd={true}/>;
            })}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results;
