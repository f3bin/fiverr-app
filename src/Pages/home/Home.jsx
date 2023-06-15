import React from "react";
import "./Home.scss";
import Featured from "../../Components/featured/Featured";
import TrustedBy from "../../Components/trustedBy/TrustedBy";
import Slide from "../../Components/Slide/Slide";
import CatCard from "../../Components/catCard/CatCard.jsx";
import { cards,projects } from "../../data.js";
import ProjectCard from "../../Components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>

      {/* Feature 1 */}

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything. </h1>

            <div className="title">
              <img src="./imgs/check.png" alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <img src="./imgs/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>

            <div className="title">
              <img src="./imgs/check.png" alt="" />
              Pay when you're happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>

            <div className="title">
              <img src="./imgs/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              controls
            />
          </div>
        </div>
      </div>

      {/* Feature 2 */}

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr buisness</h1>
            <h1>A solution built for business</h1>
            <p>
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>
            <div className="title">
              <img src="./imgs/check.png" alt=""/>
              <p>Talent matching</p>
            </div>
            <div className="title">
              <img src="./imgs/check.png" alt=""/>
              <p>Dedicated account management</p>
            </div>
            <div className="title">
              <img src="./imgs/check.png" alt=""/>
              <p>Team collaboration tools</p>
            </div>
            <div className="title">
              <img src="./imgs/check.png"  alt=""/>
              <p>Business payment solutions</p>
            </div>
            <button>Explore fiverr buisness</button>
          </div>
            
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Another Slide */}

      <Slide slidesToShow={4  } arrowsScroll={4 }>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
