// eslint-disable-next-line react/prop-types
const AppText = ({ tag, title, subtitle }) => {
  return (
    <>
      <div className="justify-center flex ">
        <h6 className="text-center text-[#202F3A] w-24 text-[12px] bg-[#9BBFF0] bg-opacity-10 rounded-lg font-space-grotesk p-1 font-semibold">
          {tag}
        </h6>
      </div>
      <h1 className="font-bold font-space-grotesk md:text-[36px] text-[24px] py-[24px] justify-center text-center flex lg:leading-[48px]">
        {title}
      </h1>
      <div className="w-full flex flex-col items-center">
        <p className="text-[18px] font-space-grotesk px-auto lg:w-full text-center md:pb-0 pb-[60px]">
          {subtitle}
        </p>
      </div>
    </>
  );
};

export default AppText;
