
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <header
      className=" font-space-grotesk h-[96px] lg:px-[120px] px-[20px] fixed w-full font-Open-sans border-b border-[#fff] border-opacity-5
    flex  items-center  bg-[#0D0C2B] flex-row
    "
    >
      <div className="flex justify-center lg:block  bg-blue-background ">
        <img width = {204} height = {36} src ="./logo.svg"/>
      </div>
      <div className = "absolute lg:hidden block right-[30px]"><IoMenu size={24} color={'#fff'} /></div>
      <div className = " lg:block hidden flex-row absolute right-[120px]">
        <button className = 'bg-[#0D0C2B] rounded-[8px] px-[24px] py-[15px] border-white border text-white'>Login</button>
        <button className = 'bg-[#1565D8] rounded-[8px] px-[24px] py-[15px] border border-[#1565D8] ml-[16px]'>Get started</button>
      </div>
    </header>
  );
};

export default NavBar;
