// eslint-disable-next-line react/prop-types
const AppText = ({ tag, title, subtitle }) => {
  return (
    <>
      <div className="justify-center flex ">
        <p className="bg-secondary-color text-center font-bold border-0 rounded-full bg-[#9BBFF01A] px-[19px] py-[6px]">
          {tag}
        </p>
      </div>
      <h1 className="font-bold md:text-[36px] text-[24px] py-[24px] justify-center text-center flex lg:leading-[48px]">
        {title}
      </h1>
      <div className="flex justify-center">
        <p className="text-[18px] px-auto flex lg:w-full text-center md:pb-0 pb-[60px]">
          {subtitle}
        </p>
      </div>
    </>
  );
};

export default AppText;
