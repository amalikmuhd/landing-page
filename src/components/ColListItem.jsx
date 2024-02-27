/* eslint-disable react/prop-types */
const ColListItem = ({ card, title, subtitle, button }) => {
  return (
    <div className="flex flex-col">
      <div className=" align-left flex lg:pt-[64px] pt-[40px] lg:px-[120px] px-[20px]">
        <p className="text-center font-bold border-0 rounded-full bg-[#9BBFF01A] text-[#1565D8] px-[19px] py-[6px]">
          {card}
        </p>
      </div>
      <h1 className=" lg:px-[120px] px-[20px] font-bold md:text-[36px] text-[24px] py-[24px] align-left flex lg:leading-[48px]">
        {title}
      </h1>
      <div className="flex align-left">
        <p className="text-[18px] px-auto flex lg:w-[699px] lg:px-[120px] px-[20px]">
          {subtitle}{' '}
        </p>
      </div>
      <div className="lg:px-[120px] pt-[24px] px-[20px]">
        <button className="bg-[#1565D8] font-bold text-white rounded-[8px] px-[24px] py-[10px] border border-[#1565D8]">
          {button}
        </button>
      </div>
    </div>
  );
};

export default ColListItem;
