import React from "react";
import "./Hero.scss";

const Hero = ({
  bgImage,
  title,
  desc,
  title__size,
  desc__size,
  btn_title,
  btn_title_two,
  btn_bg,
  btn_cl,
  hover_btn_bg,
  hover_btn_cl,
  btn_border_cl,
  bottom_title,
  title_color,
  bottom,
  btn_count
}) => {
  return (
    <div
      className="hero"
      style={{
        background: `url(${bgImage}) no-repeat center/cover`,
        color: "white",
      }}
    >
      <div className={bottom ? "hero__body bottom" : "hero__body"}>
        <div className="hero__content">
          <h2
            style={{
              fontSize: title__size,
              textAlign: "center",
              color: title_color ? title_color : "",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: desc__size,
              textAlign: "center",
              color: title_color ? title_color : "",
            }}
          >
            {desc}
          </p>
        </div>
        
        
        <div className="hero__btn">
          {/* First Button */}
          
          {!btn_count ? <button
            style={{
              backgroundColor: btn_bg,
              color: btn_cl,
              cursor: "pointer",
              padding: "10px 15px",
              borderRadius: "20px",
              border: "none",
              fontSize: "18px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = hover_btn_bg;
              e.target.style.color = hover_btn_cl;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = btn_bg;
              e.target.style.color = btn_cl;
            }}
          >
            {btn_title}
          </button> : ""}
          
        

          <button
            style={{
              backgroundColor: "transparent",
              color: btn_cl,
              cursor: "pointer",
              padding: "10px 15px",
              borderRadius: "20px",
              border: `1px solid ${btn_border_cl}`,
              fontSize: "18px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = hover_btn_bg;
              e.target.style.color = hover_btn_cl;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = btn_bg;
            }}
          >
            {btn_title_two}
          </button>
        </div>
        <div
          className="botttom__content"
          style={{ color: "#F44F25", fontSize: "20px" }}
        >
          {bottom_title ? bottom_title : ""}
        </div>
      </div>
    </div>
  );
};

export default Hero;
