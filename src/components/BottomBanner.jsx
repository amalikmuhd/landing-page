import { banner4 } from "../assets/assets";

/* eslint-disable react/prop-types */
const BottonBanner = ({ title }) => {
  return (
    <div className={`w-full py-10 px-4`}>
      <div
        style={{ backgroundImage: `url(${banner4})` }}
        className="bg-cover bg-center bg-no-repeat lg:w-[70%] mx-auto lg:h-[250px] rounded-[10px] font-space-grotesk"
      >
        <div className=" lg:w-[100%] mx-auto text-center lg:h-[250px] flex flex-col items-center justify-center rounded-[10px]">
          <h1 className="textTitle text-[18px] lg:text-[35px] font-black leading-[1.4] tracking-[1px] mx-auto lg:w-[50%] text-[#ffff] mt-4">
            {title
              ? "Turn financial ideas into reality, start building today"
              : "Facilitate cross-border payments to and from Africa"}
          </h1>
          <button className="bg-[#fff] text-[#2A2E33] w-1/2 lg:w-[20%] font-bold mt-[1.5rem] p-4 rounded-[10px] lg:rounded-[10px] mb-4">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottonBanner;
