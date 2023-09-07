import React, { useEffect, useState } from "react";
import Banner from "../components/Banner"
import Products from "../components/Products";
import { productsData } from "../api/Api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productsData();
      setProducts(data);
    };
  
    fetchProducts();
    
  },[]);
  
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;