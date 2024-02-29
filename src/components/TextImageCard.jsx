/* eslint-disable react/prop-types */

const TextImageCard = ({
  list,
  flexReverse = false,
  darkColor = false,
  image,
}) => {
  return (
    <div
      style={{ color: darkColor ? "white" : "black" }}
      className={
        flexReverse
          ? "w-[90%] flex flex-wrap mx-auto my-[2rem] justify-between items-center lg:p-[20px] flex-row-reverse"
          : "w-[90%] flex flex-wrap mx-auto my-[2rem] justify-between items-center lg:p-[20px]"
      }
    >
      <div className="lg:w-[40%] lg:p-[20px]">
        <h2 className="text-[18px] lg:text-[30px] font-bold tracking-[1px] leading-[1.2] lg:w-[80%] font-space-grotesk">
          Send Crypto, Receive Local Currency In Seconds
        </h2>
        {list?.map((item, index) => (
          <div key={index} className="flex items-start my-[2rem]">
            <span className=" font-space-grotesk text-xs py-[1px] px-[8px] bg-black shadow-lg shadow-white text-white rounded-full mr-[1.5rem]">
              {index + 1}
            </span>
            <div>
              <h3 className="text-[20px] font-medium mb-[0.4rem] font-space-grotesk">
                {item.title}
              </h3>
              <p className="leading-[1.8] tracking-[0.4px] font-space-grotesk">
                {item.info}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" lg:w-[45%]">
        <img className="w-[90%] h-[500px] object-contain" src={image} alt="" />
      </div>
    </div>
  );
};

export default TextImageCard;
