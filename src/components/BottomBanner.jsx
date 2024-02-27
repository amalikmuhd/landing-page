import React from "react";

const BottonBanner = ({ mainContainerBG }) => {
  return (
    <div className={`w-full py-10 px-4`}>
      <div
        style={{ backgroundImage: "url('/World 1.png')" }}
        className="bg-cover bg-center bg-no-repeat lg:w-[70%] mx-auto lg:h-[250px] rounded-[10px]"
      >
        <div className=" lg:w-[100%] bg-[#0066f59a] mx-auto text-center lg:h-[250px] flex flex-col items-center justify-center rounded-[10px]">
          <h1 className="textTitle text-[18px] lg:text-[35px] font-black leading-[1.4] tracking-[1px] mx-auto lg:w-[55%] text-[#ffff]">
            Facilitate cross-border payments to and from Africa
          </h1>
          <button className="bg-[#EDFEDD] text-[#2A2E33] w-full lg:w-[20%] font-bold mt-[1.5rem] p-4 rounded-[10px] lg:rounded-[10px]">
            Join Now
          </button>
          {/* <img src="/World 1.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default BottonBanner;
