import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the right <i>freelance service</i>, right away</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./imgs/search.png" alt="" />
              <input type="text" placeholder="search for any service ..." />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>popular: </span>
            <button>Website Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./imgs/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
