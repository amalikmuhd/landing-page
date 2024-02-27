import React from "react";
import TextImageCard from "./TextImageCard";

const WhyPayCrest = () => {
  return (
    <div className="bg-white p-[10px] lg:p-[20px]">
      <div className="lg:w-[60%] mx-auto text-center">
        <h6 className="text-[#202F3A] text-[12px]">Why Paycrest</h6>
        <h2 className="text-[30px] font-bold my-[1.5rem]">
          A New Era of Borderless Payments
        </h2>
        <p className="leading-[1.8] text-[16px]">
          Paycrest is ushering in a new era of decentralized payments for Africa
          that are fast, affordable, and accessible to all. Our protocol
          leverages cryptocurrency networks toenable instant transactions
          directly to local bank accounts or mobile money wallets, without
          recipients needing to understand blockchain technology.
        </p>
      </div>
      <TextImageCard />
    </div>
  );
};

export default WhyPayCrest;
