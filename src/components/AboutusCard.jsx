/* eslint-disable react/prop-types */
const AboutusCard = ({ title, subtitle, icon }) => {
  return (
    <div className="flex flex-col items-center py-10 text-center w-4/12 rounded-lg border-bg-color border-2 px-10 shadow-2xl">
      <img src={icon} alt="" width={104} className=" my-4" />
      <h1 className="font-light text-center mb-2 text-[30px] lg:text-[18px]">
        {title}
      </h1>
      <h3 className="font-light text-center text-[20px] lg:text-[16px]">
        {subtitle}
      </h3>
    </div>
  );
};

export default AboutusCard;
