/* eslint-disable react/prop-types */
const AboutusCard = ({
  tag,
  title,
  subtitle,
  icon,
  iconWidth = 104,
  onclick,
  styles,
}) => {
  return (
    <div
      onClick={onclick}
      className={`cursor-pointer flex flex-col items-center py-10 text-center w-3/12 rounded-lg border-bg-color border-2 px-10 ${styles}`}
    >
      <img src={icon} alt="" width={iconWidth} className=" my-4" />
      {tag && (
        <h1 className="font-light text-center mb-2 text-[20px] lg:text-[16px]">
          {tag}
        </h1>
      )}
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
