import React, { useEffect, useState } from "react";
import style from "./LazyProduct.module.css";
import ProductCard from "../Component/ProductCard";
import { Link } from "react-router-dom";

const LazyProduct = () => {
  const [Products, setProducts] = useState([]);
  const [PageNo, setPageNo] = useState(1);
  const [Searchvalue, setSearchvalue] = useState("Avengers");
  const [TotalPage, setTotalPage] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getTotalPage();
    getData();
  }, [Searchvalue, PageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setloading(true);
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=9823255c&s=${Searchvalue}&page=${PageNo}`
      );
      let data = await response.json();
      if (data && data.Search) {
        setProducts((prev) => [...prev, ...data.Search]);
      }

      setloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleScroll = (e) => {
    const TotalwindowHeight = document.documentElement.scrollHeight;
    const CurrentDisplayedHeight = window.innerHeight;
    const ScrollBarScrolledHeight = document.documentElement.scrollTop;

    if (PageNo > TotalPage) {
      return;
    } else if (
      ScrollBarScrolledHeight + CurrentDisplayedHeight >= TotalwindowHeight &&
      ScrollBarScrolledHeight !== 0
    ) {
      setPageNo((prev) => prev + 1);
    }
  };

  return (
    <>
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
        type="text"
        placeholder="Search by Name"
        value={Searchvalue}
        onChange={(e) => setSearchvalue(e.target.value)}
      />
      <div className={style.container}>
        {Products && Products.map((el, i) => <ProductCard key={i} {...el} />)}
      </div>
      {loading && (
        <h1
          style={{
            textAlign: "center",
            display: "block",
            color: "blue",
            marginBottom: "50px",
          }}
        >
          Loading.....!
        </h1>
      )}
    </>
  );
};

export default LazyProduct;
