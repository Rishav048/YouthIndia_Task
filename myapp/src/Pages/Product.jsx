import React, { useEffect, useRef, useState } from "react";
import style from "./Product.module.css";
import ProductCard from "../Component/ProductCard";
import Pagination from "../Component/Pagination";
import Loader from "../Component/Loader";
import { Link } from "react-router-dom";

const Product = () => {
  const [Products, setProducts] = useState([]);
  const [PageNo, setPageNo] = useState(1);
  const [TotalPage, setTotalPage] = useState(null);
  const [Searchvalue, setSearchvalue] = useState("Batman");
  const [Loading, setLoading] = useState(true);

  console.log(Searchvalue);

  useEffect(() => {
    getTotalPage();
    getData();
  }, [PageNo, Searchvalue]);

  const getTotalPage = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=9823255c&s=${Searchvalue}`
      );
      let data = await response.json();
      if (data) {
        let totalpage = Math.ceil(data.totalResults / 10);
        setTotalPage(totalpage);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=9823255c&s=${Searchvalue}&page=${PageNo}`
      );
      let data = await response.json();
      console.log("data", data);
      if (data) {
        setProducts(data.Search);
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageChange = (val) => {
    setPageNo((prev) => prev + val);
  };

  if (Loading) {
    return <Loader />;
  }

  return (
    <div>
      <Link
        to={"/"}
        style={{
          margin: "20px 0px 0px 50px",
          display: "inline-block",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Go to Home
      </Link>
      <input
        autoFocus
        type="text"
        placeholder="Search by Name"
        value={Searchvalue}
        onChange={(e) => setSearchvalue(e.target.value)}
      />
      <div className={style.container}>
        {Products && Products.map((el) => <ProductCard key={el.id} {...el} />)}
      </div>
      <Pagination
        handlePageChange={handlePageChange}
        PageNo={PageNo}
        TotalPage={TotalPage}
      />
    </div>
  );
};

export default Product;
