import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import autoprefixer from "autoprefixer";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "grey",
        padding: "5px",
        borderRadius: "100%",
        justifyContent: "center",
        justifyItems: "center",
        width: "20px",
        height: "20px ",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "grey",
        padding: "5px",
        borderRadius: "100%",
        justifyContent: "center",
        justifyItems: "center",
        width: "20px",
        height: "20px ",
      }}
      onClick={onClick}
    />
  );
}

export default function Car() {
  const data = [
      "https://m.media-amazon.com/images/I/61YQd1wdQBL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61-2gQ-7qTL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61c0jQJVTQL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61XFW-S9aOL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/61P1CSjQ7pL._SY741_.jpg  ",
      "https://m.media-amazon.com/images/I/51a1KCZH59L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/51x-nX01WKL._SY741_.jpg",
 
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoprefixer:true
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="max-w-screen-lg m-auto p-2 scale-125">
      {data.map((item, index) => {
        return (
          <div
            className="  rounded-lg hover:scale-105 duration-200 "
            key={index}
          >
            <img
              className="w-full h-full rounded-xl object-cover border-8 border-transparent"
              src={item}
              alt=""
            />
          </div>
        );
      })}
    </Slider>
  );
}
