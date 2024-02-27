import React from "react";
import IMAGES from "../constants/Images";

const CardTwo = ({
  cardImage,
  text,
  imageWidth,
  cardWidth,
  cardClass,
  cardBackground,
  titleText,
}) => {
  return (
    <div
      data-aos="zoom-in"
      style={{
        backgroundColor: cardBackground === "dark" ? "#000000" : "#F1F1F1",
        color: cardBackground === "dark" ? "white" : "#000000",
      }}
      className={
        cardClass
          ? cardClass
          : `p-4  w-[100%] md:w-[${cardWidth}] lg:w-[${cardWidth}] my-5 rounded-[20px]`
      }
    >
      <div className="imageContainer my-4 text-center w-[15%] p-[10px] bg-[#FFFFFF] rounded-[50px]">
        <img
          className={` mx-auto w-[100%]`}
          src={cardImage ? cardImage : "/money-transfer 1.png"}
          alt=""
        />
      </div>
      <h3
        className={`mt-8 mb-3 text-[20px] font-black tracking-wide leading-6`}
      >
        {titleText ? titleText : "Trustless Payments"}
      </h3>
      <p className={` text-[14px] font-medium tracking-wide leading-6`}>
        {text
          ? text
          : " Paycrest eliminates the need for intermediaries through an innovative peer-to-peer protocol, improving security."}
      </p>
    </div>
  );
};

export default CardTwo;
