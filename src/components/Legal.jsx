/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Legal = ({
  title,
  text,
  subtitle,
  subtitle2,
  subtitle3,
  subtext,
  subtext2,
  subtext3,
  text1,
}) => {
  return (
    <div className="border-b md:pt-[30px] pt-[15px] border-[#C4C4C4]">
      <h1 className="font-bold md:text-[36px] text-[24px]">{title}</h1>
      <p className="pb-[32px]">{text}</p>
      <span>
        <span className="font-bold">{subtitle}</span>
        <span>{subtext}</span>
      </span>
      {subtext2 && (
        <span>
          <br />
          <br />
          <span className="font-bold">{subtitle2}</span>
          <span>{subtext2}</span>
        </span>
      )}
      {subtext3 && (
        <span>
          <br />
          <br />
          <span className="font-bold">{subtitle3}</span>
          <span>{subtext3}</span>
        </span>
      )}
      <p className="pb-[32px]">{text1}</p>
    </div>
  );
};

export default Legal;
